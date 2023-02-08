import BMI from '../../models/BMI';
import jwt from 'jsonwebtoken';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) => {
    try {
        const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        const newBMI = await BMI.find({ user: userId })
        .sort({ createdAt: 'asc' });
        res.status(200).json({ newBMI });
    } catch(error) {
        console.log(error);
        res.status(403).send('Error retrieving BMI');
    }
}
