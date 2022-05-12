import Progress from '../../models/Progress';
import connectDb from '../../utils/connectDb';

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

async function handlePostRequest(req, res) {
    const [ caloric_intake ] = req.body;
    try {
        const cal = await new Progress({
            caloric_intake
        }).save();
        res.status(201).json(cal);
        console.log({ cal });
    } catch(error) {
        console.error(error);
        res.status(500).send("Server updating caloric intake");
    }
} 

async function handleDeleteRequest(req, res) {
    const [ caloric_intake ] = req.body;
    try {
        await Progress.findOneAndDelete([ caloric_intake ]);
        res.status(204).end();
    } catch(error) {
        console.error(error);
        return res.status(500).send("Error deleting calorie intake history");
    }
}
                        