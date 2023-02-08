import BMI from '../../models/BMI';
import connectDb from '../../utils/connectDb';
import jwt from 'jsonwebtoken';

connectDb();

export default async (req, res) => {
    switch(req.method) {
        case "POST":
            await handlePostRequest(req, res);
            break;
        case "GET":
            await handleGetRequest(req, res);
            break;
        case "DELETE":
            await handleDeleteRequest(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
};

async function handlePostRequest(req, res) {
    const { newBMI, user } = req.body;
    try {
        const bmi = await new BMI({
            user,
            newBMI
        }).save();
        res.status(201).json({ bmi });
        console.log({ bmi });
    } catch(error) {
        console.error(error);
        res.status(500).send("Server error while updating BMI");
    }
}

async function handleGetRequest(req, res) {
    const { newBMI } = req.body;
    try {
        const bmi = await BMI.find({ _id: { $ne: newBMI }})
        .sort({ createdAt: 'desc' });
        res.status(200).json(bmi);
    } catch(error) {
        console.error(error);
        res.status(403).send('error');
    }
}

async function handleDeleteRequest(req, res) {
    try {
        const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        await BMI.findOneAndDelete({ user: { $eq: userId } })
        .sort({ createdAt: 'desc' });
        res.status(203).send();
    } catch(error) {
        console.error(error);
        return res.status(500).send('Error deleting Last Order');
    }
}
