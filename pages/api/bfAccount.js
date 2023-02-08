import BF from '../../models/BF';
import jwt from 'jsonwebtoken';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) => {
    try {
        const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        const newBF = await BF.find({ user: userId })
        .sort({ createdAt: 'asc' });
        res.status(200).json({ newBF });
    } catch(error) {
        console.log(error);
        res.status(403).send('Error retrieving BF');
    }
}
