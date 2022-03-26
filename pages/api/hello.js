//import User from '../../models/User';
import examples from '../../public/examples.json';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) => {
  // const examples = await User.find();
  res.status(200).json(examples);
  //console.log(req.method);
}
