
    "use client"
  
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "/components/Form"
 
const EditAskket = () => { 
  const router = useRouter();
  const searchParams = useSearchParams(); 
  const askketId = searchParams.get("id");  

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ askket: "", tag: "",  });


  useEffect(() => {
   const getAskketDetails = async () => {
     const response = await fetch(`/api/askket/${askketId}`)
     const data = await response.json();  

    setPost({
       askket: data.askket,
       tag: data.tag,
    }) 
   } 

   if(askketId) getAskketDetails()
 }, [askketId])

   
   const updateAskket = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

   if(!askketId) return alert("Askket ID not found")

     try { 
      const response = await fetch(`/api/askket/${askketId}`, {
        method: "PATCH",  
        body: JSON.stringify({ 
          askket: post.askket,
          tag: post.tag
        }),
      })

      if(response.ok) {
        router.push("/"); 
      }
     } catch (error) {
       console.log(error);
     } finally {
      setIsSubmitting(false)
     }

   };
 
  return (
      <Form 
        type="Edit"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={updateAskket}
        />
   
    ) 
   }
 
export default EditAskket;