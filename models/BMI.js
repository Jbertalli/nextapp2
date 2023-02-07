import mongoose from "mongoose";

const { ObjectId, Number } = mongoose.Schema.Types;

const BMISchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: "User"
    },
    newBMI: {
        type: Number
    } 
  }, {
    timestamps: true
  }
);

export default mongoose.models.BMI || mongoose.model("BMI", BMISchema);
