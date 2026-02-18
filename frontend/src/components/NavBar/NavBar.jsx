import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import{AnimatePresence, motion} from "framer-motion"

const NavBar = ({sideBar,setSideBar}) => {
  return (
    <nav className=" flex flex-col min-w-full items-center pt-8">
        <div className=" top-0 left-0 p-2 md:p-4 rounded-2xl min-w-[60%] xl:min-w-[40%]  bg-amber-300/10  text-amber-50 z-10 ">
            <div className="container flex items-center w-full h-full justify-between" >
               
               <motion.div
                  initial={{opacity:0,y:-100}}
                animate={{opacity:100,y:0}}
                transition={{ 
                  type:"spring",
                  delay:0.2,
                  stiffness:100,
                  damping:15 }} 
                  
                  className="flex w-full justify-center md:justify-between items-center ">
                <h1 className="sm:text-md md:text-xl xl:text-3xl uppercase font-semibold">
                    <span className="  text-amber-300 pr-1">CODER</span>
                    COFFEE.
                </h1>
                {/* menu section */}
                <GiHamburgerMenu className="hidden md:block text-2xl xl:text-4xl cursor-pointer"
                
                    onClick={
                        
                        ()=>
                            setSideBar(!sideBar)
                        }>
                    
                </GiHamburgerMenu>

               </motion.div>
              
            </div>
        </div>
    </nav>
  )
}

export default NavBar
