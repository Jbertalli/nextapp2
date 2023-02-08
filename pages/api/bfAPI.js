import BF from '../../models/BF';
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
    const { newBF, user } = req.body;
    try {
        const bf = await new BF({
            user,
            newBF
        }).save();
        res.status(201).json({ bf });
        console.log({ bf });
    } catch(error) {
        console.error(error);
        res.status(500).send("Server error while updating BF");
    }
}

async function handleGetRequest(req, res) {
    const { newBF } = req.body;
    try {
        const bf = await BF.find({ _id: { $ne: newBF }})
        .sort({ createdAt: 'desc' });
        res.status(200).json(bf);
    } catch(error) {
        console.error(error);
        res.status(403).send('error');
    }
}

async function handleDeleteRequest(req, res) {
    try {
        const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        await BF.findOneAndDelete({ user: { $eq: userId } })
        .sort({ createdAt: 'desc' });
        res.status(203).send();
    } catch(error) {
        console.error(error);
        return res.status(500).send('Error deleting Last Order');
    }
}
