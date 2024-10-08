  "use client"
 
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";


const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => { 
      const response = await getProviders();
      setProviders(response);
      
    } 
      setUpProviders();

  }, []); 


  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image 
          src="/assets/images/tumbIcon.svg"
          alt="Askket Logo"
          width={30}
          height={30}
          className="object-contain"
        />
         <p>Askket</p> 
      </Link>

       
        {/* Desktop Navigation */}
      <div className=" sm:flex hidden">
        {session?.user ?  (
           <div className="flex gap-3 md:gap-5">
             <Link className="blue_btn" href="/create-askket">
               Create Post
             </Link>

             <button type="button" className="outline_btn" onClick={signOut} >
               SignOut  
             </button>

               <Link href="/profile">
                 < Image
                   src={ session?.user.image }
                   width={37}
                   height={37}
                   className="rounded-full"
                   alt="profile"
                 />
               </Link>

           </div>
        ):  (
         <>
          {providers &&
            Object.values(providers).map((provider) => (
             <button
              type="button"
              key={providers.name}
              onClick={() => signIn(provider.id)}
              className="green_btn"
             >
               Sign In
             </button>
            ))}
         </>
        )}
      </div>

       {/* Mobile Navigation */}

      <div className="sm:hidden flex relative ">
         {session?.user ? (
           <div className="flex">
          < Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropDown(!toggleDropDown)} 
            />
               
            { toggleDropDown && (
              <div className="dropdown">
                <Link
                 href="/profile"
                 className="dropdown_link mt-5 w-full profile_btn"
                 onClick={() => setToggleDropDown(false)}
                >
                 My Profile
                </Link>

                <Link
                 href="/create-askket"
                 className="dropdown_link mt-5 w-full createEfficient_btn"
                 onClick={() => setToggleDropDown(false)}
                >
                 Create Efficiency
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropDown(false);
                    signOut();
                  }}
                  className="mt-5 w-full outline_btn"
                >
                  Sign Out
                </button>
              </div>
            )}   

           </div>
         ): (
          <>
          {providers &&
            Object.values(providers).map((provider) => (
             <button
              type="button"
              key={providers.name}
              onClick={() => signIn(provider.id)}
              className="green_btn"
             >
               Sign In
             </button>
            ))}
         </>
         )}
      </div>

    </nav>
  ) 
}

export default Nav
