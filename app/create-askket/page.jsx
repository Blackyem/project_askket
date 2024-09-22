 "use client"

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "/components/Form"
 
const CreateAskket = () => {
  const router = useRouter();
  const { data: session } = useSession(); 

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({ askket: "", tag: "", });
  
   const createAskket = async (e) => {
    e.preventDefault();
    setSubmitting(true);

     try { 
      const response = await fetch("/api/askket/new", {
        method: "POST",  
        body: JSON.stringify({ 
          askket: post.askket,
          userId: session?.user.id,
          tag: post.tag
        }),
      });

      if(response.ok) {
        router.push("/"); 
      }
     } catch (error) {
       console.log(error);
     } finally {
      setSubmitting(false)
     }

   };
 
  return (
    <Form 
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createAskket}
    />
  ); 
};
 
export default CreateAskket;
 