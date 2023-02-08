import examples from '../../public/examples.json';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) => {
  res.status(200).json(examples);
}
