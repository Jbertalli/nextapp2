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
};

async function handlePostRequest(req, res) {
    const { newBMI, user } = req.body;
    try {
        const bmi = await new Progress({
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
        const orders = await Progress.find({ _id: { $ne: newBMI }})
        .sort({ createdAt: 'desc' });
        res.status(200).json(orders);
    } catch(error) {
        console.error(error);
        res.status(403).send('error');
    }
}

async function handlePutRequest(req, res) {
    const { body_mass_index } = req.body;
    try {
        const bmi = await Progress.findOneAndUpdate({ body_mass_index });
        return res.status(200).json({ bmi })
    } catch(error) {
        console.error(error);
        return res.status(500).send("Error updating BMI");
    }
}

async function handleDeleteRequest(req, res) {
    const [ body_mass_index ] = req.body;
    try {
        await Progress.findOneAndDelete([ body_mass_index ]);
        res.status(204).end();
    } catch(error) {
        console.error(error);
        return res.status(500).send("Error deleting BMI history");
    }
}
