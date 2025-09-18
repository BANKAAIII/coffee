import React, { useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import{AnimatePresence, motion} from "framer-motion"
import clsx from 'clsx';
import { useState } from 'react';


const NavBar = ({sideBar,setSideBar}) => {
  
  //state variable for window height and width
  const [windowSize,setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  //Add an event listener to update the width and height dynamically.
  useEffect(
    ()=>{
      const handleReSize = () => { 
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }
      window.addEventListener("resize",handleReSize);
      return () => window.removeEventListener("resize",handleReSize)
    },
    []);

  //Conditional styling of Navbar container
 const containerStyle = clsx(
  "top-0 left-0 bg-amber-300/10 text-amber-50 z-10 px-4 sm:px-6 md:px-8",
  {
    //small screens
    "w-[70%] h-15 rounded-xl mt-6 flex justify-center items-center text-3xl": windowSize.width < 640 || windowSize.height < 500,
    //large screens
    "h-20 w-[73%] mt-10 rounded-2xl flex justify-between items-center text-3xl ": windowSize.width >= 1024,
    // medium screens
    "h-16 w-[70%] mt-8 rounded-2xl flex items-center text-3xl ": windowSize.width >= 640 && windowSize.width < 1024
  }
);

  return (
    <nav className=" flex flex-col items-center ">
        <div className={containerStyle}>
          
               <motion.div
                  initial={{opacity:0,y:-100}}
                animate={{opacity:1,y:0}}
                transition={{ 
                  type:"spring",
                  delay:0.2,
                  stiffness:100,
                  damping:15 }} 
                  
                  className=" w-full flex justify-center md:justify-between items-center ">
                <h1 className=" uppercase font-semibold">
                    <span className=" text-amber-300 pr-1">CODER</span>
                    COFFEE.
                </h1>
                {/* menu section */}
                <GiHamburgerMenu className="hidden lg:block md:block text-4xl cursor-pointer"
                
                    onClick={
                        
                        ()=>
                            setSideBar(!sideBar)
                        }>
                    
                </GiHamburgerMenu>

               </motion.div>
              
            </div>
      
        
    </nav>
  )
}

export default NavBar
