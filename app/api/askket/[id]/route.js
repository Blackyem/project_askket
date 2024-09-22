
import Askket from "/models/askket";
import { connectToDB } from "/utils/database";


// GET (read)
export const GET = async (request, { params }) => {
   try {
      await connectToDB();

      const askket = await Askket.findById(params.id).populate ("creator");
      if(!askket) return new Response("Askket not found", { status: 404 });

      return new Response(JSON.stringify(askket) , {
      status: 200 })
    } catch (error) {
      return new Response("Internal Server Error", { status: 500 })   
    }
  }

// PATCH (update)
export const PATCH = async (request, { params }) => {
   const { askket, tag } = await request.json();

   try {
      await connectToDB();

      const existingAskket = await Askket.findById(params.id);

      if(!existingAskket) return new Response("Askket not found", { status: 404 })

       existingAskket.askket = askket;
       existingAskket.tag = tag; 
       
       await existingAskket.save();

       return new Response(JSON.stringify(existingAskket), { status: 200 });
      } catch (error) {
       return new Response( "Failed to update askket", { status: 500 });
      
   }
}

// DELETE (delete)
export const DELETE = async (request, { params }) => {
  try {
   await connectToDB();

   await Askket.findByIdAndDelete(params.id);

   return new Response("Askket is deleted successfully", { status: 200 })
} catch (error) {
   return new Response("Failed to delete Askket", { status: 500 })
   
  }
}