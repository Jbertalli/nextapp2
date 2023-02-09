import mongoose from "mongoose";

const { ObjectId, String } = mongoose.Schema.Types;

const ImageSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: "User"
    },
    mediaPreview: {
        type: String
    } 
  }, {
    timestamps: true
  }
);

export default mongoose.models.Image || mongoose.model("Image", ImageSchema);
