import User from '../../models/User';

export default async (req, res) => {
    switch(req.method) {
        case "POST":
            await handlePostRequest(req, res);
            break;
        case "GET":
            await handleGetRequest(req, res);
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
}

async function handleGetRequest(req, res) {
    const { _id } = req.query;
    const examples = await User.findOne({ _id });
    res.status(200).json(examples);
}

async function handleDeleteRequest(req, res) {
    const { _id } = req.query;
    await User.findOneAndDelete({ _id });
    res.status(204).json({})
}