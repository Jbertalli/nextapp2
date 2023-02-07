import mongoose from "mongoose";

const { ObjectId, Number } = mongoose.Schema.Types;

const BFSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: "User"
    },
    newBF: {
        type: Number
    } 
  }, {
    timestamps: true
  }
);

export default mongoose.models.BF || mongoose.model("BF", BFSchema);
