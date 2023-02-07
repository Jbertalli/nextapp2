import connectDb from '../../utils/connectDb';
import User from '../../models/User';                               //import User mongoose model to interact with it in api
import Progress from '../../models/Progress';
import bcrypt from 'bcrypt';                                        //hash password
import jwt from 'jsonwebtoken';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';

connectDb();

export default async (req, res) => {
    const { name, email, password } = req.body;                      //from ...user in pages payload (which has req.body)
    try {
        // 1) Validate name/email/password 
        if (!isLength(name, { min: 3, max: 20 })) {
            return res.status(422).send("Name must be 3-20 characters long")
        } else if (!isLength(password, { min: 5 })) {
            return res.status(422).send("Password must be at least 5 characters long")
        } else if (!isEmail(email)) {
            return res.status(422).send("Email must be valid")
        }
        // 2) Check to see if the user already exists in the db (based on email as filter)
        const user = await User.findOne({ email });
        if (user) {
            res.status(422).send(`User already exists with email ${email}`);
        }
        // 3) if not, hash their password
        const hash = await bcrypt.hash(password, 10);                //pass in password from req.body and determine SALT rounds
        // 4) create user
        const newUser = await new User({
            name,
            email,
            password: hash
        }).save();
        console.log({newUser});
        // 5) create Progress Tracker for new user
        // await new Progress({ user: newUser._id }).save();
        // 6) create token for new user
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: '7d'
        })
        // 7) send back token
        res.status(201).json(token);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error signing up user");
    }
}
