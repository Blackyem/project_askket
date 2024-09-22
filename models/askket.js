import  { Schema, model, models } from "mongoose";

const AskketSchema = new Schema ({
  creator: {
   type: Schema.Types.ObjectId,
   ref: "User",
  }, 
   askket: {
      type: String, 
      required: [ true, "Askket is required" ],
   },
   tag: {
      type: String,
      required: [ true, "Tag is required" ],
   }
});

const Askket = models.Askket || model("Askket", AskketSchema);

export default Askket; 