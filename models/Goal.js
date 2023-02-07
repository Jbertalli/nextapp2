import mongoose from "mongoose";

const { ObjectId, String } = mongoose.Schema.Types;

const GoalSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: "User"
    },
    newGoal: {
        type: String
    } 
  }, {
    timestamps: true
  }
);

export default mongoose.models.Goal || mongoose.model("Goal", GoalSchema);
