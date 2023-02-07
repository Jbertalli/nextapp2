import Progress from '../../models/Progress';
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
}

async function handlePostRequest(req, res) {
    const { newBF, user } = req.body;
    try {
        const bf = await new Progress({
            user,
            newBF
        }).save();
        res.status(201).json(bf);
        console.log({ bf });
    } catch(error) {
        console.error(error);
        res.status(500).send("Sever error while updating Body Fat Percentage");
    }
}

async function handleGetRequest(req, res) {
    const { newBF } = req.body;
    try {
        const orders = await Progress.find({ _id: { $ne: newBF }})
        .sort({ createdAt: 'desc' });
        res.status(200).json(orders);
    } catch(error) {
        console.error(error);
        res.status(403).send('error');
    }
}

async function handleDeleteRequest(req, res) {
    const [ body_fat_percent ] = req.body;
    try {
        await Progress.findOneAndDelete([ body_fat_percent ]);
        res.status(204).end();
    } catch(error) {
        console.error(error);
        res.status(500).send("Error deleting Body Fat % history");
    }
}
