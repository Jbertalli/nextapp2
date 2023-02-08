import BMI from "../../models/BMI";
import jwt from "jsonwebtoken";
import connectDb from "../../utils/connectDb";

connectDb();

export default async (req, res) => {
    switch(req.method) {
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

async function handleGetRequest (req, res) {
    try {
        const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        const newOrders = await BMI.find({ user: userId });
        res.status(200).json({ newOrders });
    } catch(error) {
        console.error(error);
        res.status(403).send('error');
    }
}

async function handleDeleteRequest(req, res) {
    try {
        const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        await BMI.deleteMany({ user: { $eq: userId } })
        .sort({ createdAt: 'desc' });
        res.status(203).send();
    } catch(error) {
        console.error(error);
        return res.status(500).send('Error deleting Last Order');
    }
}
