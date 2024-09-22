import Feed from "../components/Feed"


const Home = () => {
   return (
     <section className="w-full flex-center flex-col">
       <h1 className="head_text text-center">
         Explore & Stake
         <br className="max-md:hidden" />
         <span className="amber-cyan-green_gradient
         text-center">AI-Effective Askket</span>
       </h1>
       <p className="desc text-center">
       Askket is an open-source artificial intelligence(AI) 
       programming that makes it easier to discover, produce, and 
       distribute a creative efficiencies in the modern world.
       </p>
 
       <Feed />
 
     </section>
   )
 }
 
 export default Home
 