import mongoose from "mongoose";

const { ObjectId, Number } = mongoose.Schema.Types;

const CalorieSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: "User"
    },
    newCal: {
        type: Number
    } 
  }, {
    timestamps: true
  }
);

export default mongoose.models.Calorie || mongoose.model("Calorie", CalorieSchema);
