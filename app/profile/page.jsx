   "use client";
   
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "/components/profile"

const MyProfile = () => {
   const { data: session } = useSession();
   const router = useRouter();
   const [myPosts, setMyPosts] = useState([]);


   useEffect(() => {
      const fetchPosts = async () => {
        const response = await fetch(`/api/users/${session?.user.id}/posts`);
        const data =  await response.json();
  
        setMyPosts(data);
      }    
     
                
       if(session?.user.id) fetchPosts();
    }, [session?.user.id]); 
  
  const handleEdit = (post) => { 
    router.push(`/update-askket?id=${post._id}`);
  }; 
 
  const handleDelete =  async (post) => {
    const hasConfirmed = confirm("Are you sure you want to  delete this askket?");

    if(hasConfirmed) {
      try {  
        await fetch(`/api/askket/${post._id.toString()}`, {
          method: "DELETE"
        });

        const filteredPosts = myPosts.filter((item) => item._id !== post._id ); 

        setMyPosts(filteredPosts) 
      } catch (error) {
        console.log(error) 
      } 
    }
  }  


  return (
     <Profile
       name="My"
       desc="Welcome to your profile page..."
       data={myPosts}
       handleEdit={handleEdit}
       handleDelete={handleDelete} 
     />
  )
}
 
export default MyProfile




