import Calorie from '../../models/Calorie';
import connectDb from '../../utils/connectDb';
import jwt from 'jsonwebtoken';

connectDb();

export default async (req, res) => {
    switch(req.method) {
        case "GET":
            await handleGetRequest(req, res);
            break;
        case "POST":
            await handlePostRequest(req, res);
            break;
        case "PUT":
            await handlePutRequest(req, res);
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
    const { newCal, user } = req.body;
    try {
        const calorie = await new Calorie({
            user,
            newCal
        }).save();
        res.status(201).json({ calorie });
        console.log({ calorie });
    } catch(error) {
        console.error(error);
        res.status(500).send("Server error while updating Calories");
    }
}

async function handleGetRequest(req, res) {
    const { newCal } = req.body;
    try {
        const calorie = await Calorie.find({ _id: { $ne: newCal }})
        .sort({ createdAt: 'desc' });
        res.status(200).json(calorie);
    } catch(error) {
        console.error(error);
        res.status(403).send('error');
    }
}

async function handleDeleteRequest(req, res) {
    try {
        const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        await Calorie.findOneAndDelete({ user: { $eq: userId } })
        .sort({ createdAt: 'desc' });
        res.status(203).send();
    } catch(error) {
        console.error(error);
        return res.status(500).send('Error deleting Last Order');
    }
}
