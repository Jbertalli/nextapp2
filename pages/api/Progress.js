import Progress from '../../components/Progress';
import jwt from 'jsonwebtoken';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) => {
    try {
        const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        const progress = await Progress.find({ user: userId })
        .sort({ createdAt: 'desc' })
        .populate({
            path: 'progress.BMI', 
            model: 'Progress'
        }, {
            path: 'progress.Body_Fat_Percent',
            model: 'Progress'
        })
        res.status(200).json({ progress });
    } catch(error) {
        console.error(error);
        res.status(403).send("Please login again");
    }
}
