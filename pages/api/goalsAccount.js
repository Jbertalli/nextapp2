import Goal from '../../models/Goal';
import jwt from 'jsonwebtoken';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) => {
    try {
        const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        const newGoal = await Goal.find({ user: userId })
        .sort({ createdAt: 'asc' });
        res.status(200).json({ newGoal });
    } catch(error) {
        console.log(error);
        res.status(403).send('Error retrieving BMI');
    }
}
