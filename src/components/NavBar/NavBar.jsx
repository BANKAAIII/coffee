import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import{AnimatePresence, motion} from "framer-motion"

const NavBar = ({sideBar,setSideBar}) => {
  return (
    <nav className=" flex flex-col items-center pt-8">
        <div className=" top-0 left-0 h-20 rounded-2xl w-[70%] md:w-400 p-4 bg-amber-300/10 pt-6 text-amber-50 z-10 ">
            <div className="container" >
               
               <motion.div
                  initial={{opacity:0,y:-100}}
                animate={{opacity:100,y:0}}
                transition={{ 
                  type:"spring",
                  delay:0.2,
                  stiffness:100,
                  damping:15 }} 
                  
                  className="flex justify-between items-center ">
                <h1 className="text-3xl uppercase font-semibold">
                    <span className=" text-amber-300 pr-1">CODER</span>
                    COFFEE.
                </h1>
                {/* menu section */}
                <GiHamburgerMenu className="text-4xl cursor-pointer"
                
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
