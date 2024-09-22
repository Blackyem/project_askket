import mongoose from "mongoose";


let isConneted = false; //track the connection status//


export const connectToDB =  async ()  => {
  mongoose.set("strictQuery", true);

  if(isConneted) {
    console.log("MongoDB is connected")
    return;
  }
   
  try {  
    await mongoose.connect(process.env.MONGODB_URI, {
       dbName: "askket_efficient",
       useNewUrlParser: true,
       useUnifiedTopology: true, 
    }) 
 
    isConneted = true;

    console.log("MongoDB connected")
  } catch (error) {
    console.log(error); 
  }
}