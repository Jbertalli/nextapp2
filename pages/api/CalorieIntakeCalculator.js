import connectDb from '../../utils/connectDb';
// import isInt from 'validator/lib/isInt';

connectDb();
                        
// export default async (req, res) => {
//     try {
//         //validation
//         if (!isInt(Age,{ min: 0, max: 120 })) {
//             return res.status(422).send("Age must be between 0 and 120 years old");
//         } else if (!isInt(Feet,{ min: 0, max: 8 })) {
//             return res.status(422).send("Height must be between 0 and 8 feet");
//         } else if (!isInt(Inches,{ min: 0, max: 11 })) {
//             return res.status(422).send("Height (in) must be between 0 and 11 inches");
//         } else if (!isInt(Pounds,{ min: 0, max: 800 })) {
//             return res.status(422).send("Weight must be between 0 and 800 pounds");
//         } else if (!isInt(Centimeters,{ min: 0, max: 270 })) {
//             return res.status(422).send("Height must be between 0 and 270 centimeters");
//         } else if (!isInt(Kilograms,{ min: 0, max: 360 })) {
//             return res.status(422).send("Weight must be between 0 and 360 kilograms");
//         }
//     }
              
// validator.isInt(Age,{ min: 0, max: 120 });