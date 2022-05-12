import Progress from '../../models/Progress';
import connectDb from '../../utils/connectDb';
// import jwt from 'jsonwebtoken';

connectDb();

export default async (req, res) => {
    switch(req.method) {
        case "GET":
            await handleGetRequest(req, res);
            break;
        case "POST":
            await handlePostRequest(req, res);
            break;
        case "DELETE":
            await handleDeleteRequest(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
};

// async function handleGetRequest(req, res) {
//     const { _id } = req.query;
//     const progress = await Progress.findOne({ _id });
//     res.status(200).json(progress);
// }

// async function handleGetRequest(req, res) {
//     if (!("authorization" in req.headers)) {
//         return res.status(401).send("No authorization token");
//     }
//     try {
//         const { userId } = jwt.verify(
//             req.headers.authorization,
//             process.env.JWT_SECRET
//         );
//         const goal = await Progress.findOne({ user: userId }).populate({
//             path: goals.goal_list,
//             model: "Progress"
//         });
//         res.status(200).json()
//     } catch(error) {
//         console.error(error);
//         res.status(403).send("Please login again");
//     }
// }

async function handlePostRequest(req, res) {
    const [ goal_list ] = req.body;                                          //grab goal_list from request body as an array (or object)
    try {
        const goal = await new Progress({
            goal_list
        }).save();
        res.status(201).json(goal);
        console.log({ goal });
    } catch(error) {
        console.error(error);
        res.status(500).send("Server error while adding goal");
    }
}

async function handleDeleteRequest(req, res) {
    const [ goal_list ] = req.body;
    try {
        // 1) Delete Progress by id
        await Progress.findOneAndDelete([ goal_list ]);
        res.status(204).end();
    } catch(error) {
        console.error(error);
        return res.status(500).send("Error deleting goal");
    }
}
