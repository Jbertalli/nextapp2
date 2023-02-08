import Calorie from '../../models/Calorie';
import jwt from 'jsonwebtoken';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) => {
    try {
        const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        const newCalorie = await Calorie.find({ user: userId })
        .sort({ createdAt: 'asc' });
        res.status(200).json({ newCalorie });
    } catch(error) {
        console.log(error);
        res.status(403).send('Error retrieving BMI');
    }
}
