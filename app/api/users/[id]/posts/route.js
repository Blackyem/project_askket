      
import Askket from "/models/askket"
import { connectToDB } from "/utils/database"


export const GET = async (request,{params}) => {
   try {
      await connectToDB();

     
      const askkets = await Askket.find({creator: params.id}).populate ("creator");

      return new Response(JSON.stringify(askkets) , {
      status: 200 })
    } catch (error) {
      return new Response("Failed to fetch all askkets", { status: 500 })   
    }
  }