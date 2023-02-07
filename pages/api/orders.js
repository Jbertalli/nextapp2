import Progress from "../../models/Progress";
import jwt from "jsonwebtoken";
import connectDb from "../../utils/connectDb";

connectDb();

export default async (req, res) => {
    try {
        const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        const orders = await Progress.find({ user: userId });
        res.status(200).json({ orders });
    } catch(error) {
        console.error(error);
        res.status(403).send('error');
    }
}
