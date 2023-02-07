import mongoose from "mongoose";

const { ObjectId, Number, Array } = mongoose.Schema.Types;     //ObjectId is special - allows us to reference other documents - ObjectId allows us to populate all data base on only ObjectId

//Progress created whenever new User is created
const ProgressSchema = new mongoose.Schema({
    user: {                                                    //link user model with progress model
        type: ObjectId,
        ref: "User"                                            //what mongoose model are we referencing for ObjectId (grab model name from bottom of mongoose model)  
    },
    // caloric_intake: {
    //     type: Array
    // }, 
    // body_mass_index: {
    //     type: Array
    // },
    // newBMI: {
    //     type: Number
    // },
    // body_fat_percent: {
    //     type: Array
    // }, 
    goal_list: {
        type: Array
    }, 
    mediaUrl: {
        type: String
    }   
  }, {
    timestamps: true
}
);

export default mongoose.models.Progress || mongoose.model("Progress", ProgressSchema);
