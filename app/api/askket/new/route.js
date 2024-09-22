import Askket from "/models/askket"
import { connectToDB } from "/utils/database"

export const POST = async (req) => {
   const { userId, askket, tag } = await req.json();


   try {
      await connectToDB();
      const newAskket = new Askket({ 
      creator: userId,  
      askket, 
      tag
      }) 

      await newAskket.save();

      return new Response(JSON.stringify(newAskket), { status: 201 })
   } catch (error) {
      return new Response("Failed to create a new askket", { status: 500 }) 
   }
} 