import Image from '../../models/Image';
import connectDb from '../../utils/connectDb';
import jwt from 'jsonwebtoken';

connectDb();

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '8mb'
        }
    }
}

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
    const { mediaPreview, user } = req.body;
    try {
        const image = await new Image({
            user,
            mediaPreview
        }).save();
        res.status(201).json({ image });
        console.log({ image });
    } catch(error) {
        console.error(error);
        res.status(500).send("Server error while updating Image");
    }
}

async function handleGetRequest(req, res) {
    const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);    
    try {
        const image = await Image.findOne({ user: userId })
        .sort({ createdAt: 'desc' });
        res.status(200).json(image);
    } catch(error) {
        console.error(error);
        res.status(403).send('error');
    }
}

async function handleDeleteRequest(req, res) {
    try {
        const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        await Image.findOneAndDelete({ user: { $eq: userId } })
        .sort({ createdAt: 'desc' });
        res.status(203).send();
    } catch(error) {
        console.error(error);
        return res.status(500).send('Error deleting Last Order');
    }
}
