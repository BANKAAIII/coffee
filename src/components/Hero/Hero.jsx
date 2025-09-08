import React, { useState } from 'react'
import BgImage from "../../assets/bg-slate.png";
import Coffee from "../../assets/black.png"
import NavBar from '../NavBar/NavBar';
import {motion} from "framer-motion";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { AnimatePresence } from 'framer-motion';

const bgImage={
  backgroundImage : `url(${BgImage})`,
  backgroundSize  : "cover",
  backgroundPosition : "center",
  backgroundRepeat: "no-repeat"

}

const Hero = () => {
  const [sideBar,setSideBar] = useState(false);
  return (
    <main style={bgImage} className="relative">  {/* container for main content of the page , used by seo and all */}
        <section className="min-h-[720px] w-full">   {/* used to define sections of a page  */}
            <div className="container"></div>
             {/* Navbar section */}
            <NavBar sideBar={sideBar} setSideBar={setSideBar}/>

             {/* Hero section */}
             <div className='grid grid-cols-1 md:grid-cols-3  place-items-center min-h-[850px]' >

              {/* text section 1 */}
              <div className="relative text-[#f1dabf] mt-[300px] md:mt-[200px] space-y-20 p-4">
                <motion.h1
                
                initial={{opacity: 0,y: -100}}
                animate={{opacity: 100, y:0}}
                transition={{
                  type:"spring",
                  delay:0.4,
                  damping:9,
                  stiffness:100
                }}
                className="text-7xl font-bold leading-tight ml-10 ">Blvck <br></br>Tumbler</motion.h1>
                
                
                <motion.div
                
                initial={{opacity: 0,y:100}}
                animate={{opacity: 100, y:0}}
                transition={{
                  type:"spring",
                  delay:1,
                  damping:10,
                  stiffness:100
                }}

                className="relative z-10 space-y-4">
                  <h1 className=" text-2xl " >Black Lifestyle Lovers</h1>
                  <h1 className="text-sm opacity-55 leading-loose">Lorem ipsum dolor sit,amet consectetur adipisicing elit.<br></br>
                      Delectus aspernatur,cumque eos neque dolorem architecto,<br></br>
                       deserunt quis voluptatibus in quisquam quia ducimus</h1>
                 <div className="absolute -top-5 -left-2 w-[250px] h-[180px] bg-gray-700/25 "></div>
                </motion.div>
              </div>
              {/* hero Image */}
              <div className="relative z-40" >
                <div className="absolute top-10 left-[180px]">
                  <motion.h1 
                  
                  initial={{opacity:0,x:-100}}
                animate={{opacity:100,x:50}}
                transition={{ 
                  type:"spring",
                  delay:0.9,
                  stiffness:100,
                  damping:8 }} 
                  className="text-[140px]  text-[#1a1f25]/50 scale-150 font-bold leading-none">Blvck<br></br>Tumbler</motion.h1>
                </div>
                 {/* Orange ring */}
                <motion.div
                  initial={{opacity:0,scale:0}}
                animate={{opacity:100,scale:1}}
                transition={{ 
                  type:"spring",
                  delay:1.5,
                  stiffness:100,
                  damping:12 }} 
                className=" absolute top-20 -right-10 z-10 w-[220px] h-[220px] rounded-full border-25 border-orange-500" ></motion.div>
                <motion.img
                
                initial={{opacity:0,scale:0}}
                animate={{opacity:100,scale:1}}
                transition={{
                  type:"spring",
                  stiffness:50,
                  damping:10,
                  delay:1.05
                }}  

                src={Coffee}
                     className="relative z-20 w-[320px] mb-20 h-[700px] img-shadow1"
                     ></motion.img>

             
              </div>
              
              {/* text section 2 */}
              <div className="text-[#f1dabf] mt-[300px] md:mt-[200px] space-x-100 space-y-15 pt-50 p-4">
                <motion.h1 
                initial={{opacity:0}}
                animate={{opacity:100}}
                transition={{ 
                  type:"spring",
                  delay:0.9,
                  stiffness:100,
                  damping:8
                }}
                className="text-7xl font-bold">Design</ motion.h1>
                <div className="relative z-5">

                  <motion.h1 
                  initial={{opacity:0,x:100}}
                animate={{opacity:100,x:0}}
                transition={{ 
                  type:"spring",
                  delay:0.9,
                  stiffness:100,
                  damping:8 }} 
                  className="text-2xl">first line of the design paragraph</motion.h1>

                  <motion.h1 
                  
                  initial={{opacity:0,x:100}}
                animate={{opacity:100,x:0}}
                transition={{ 
                  type:"spring",
                  delay:0.9,
                  stiffness:100,
                  damping:8 }} className="text-sm opacity-55 leading-loose">
                    first line of design <br></br>
                    second line of design
                  </motion.h1>
                  <div className="absolute -top-5 -left-5 w-65 h-30  bg-gray-900/50"></div>
                </div>
              </div>

              {/* sideBar */}
            <AnimatePresence>
              {
                sideBar && (

                 <motion.div
                 key={sideBar}
                 initial={{opacity:0,x:20}}
                animate={{opacity:100,x:0}}
                exit={{opacity:0,x:20}}
                transition={{ 
                  type:"spring",
                  delay:0.9,
                  stiffness:100,
                  damping:8 }}
                 className=" absolute top-0 right-0 z-10 w-60 h-full bg-gradient-to-b from-amber-400/50 to-orange-500/80 ">

                  <div className="w-full h-full flex flex-col justify-center items-center gap-6">
                    
                    <motion.div
                    initial={{opacity:0,y:100}}
                animate={{opacity:100,y:0}}
                transition={{ 
                  type:"spring",
                  delay:1.8,
                  stiffness:90,
                  damping:16 }}
                   className="inline-block rounded-full border p-4 cursor-pointer border-amber-50">
                      <FaX className="text-3xl"></FaX>
                    </motion.div>

                    <motion.div initial={{opacity:0,y:100}}
                animate={{opacity:100,y:0}}
                transition={{ 
                  type:"spring",
                  delay:1.7,
                  stiffness:90,
                  damping:16 }}
                  className="inline-block rounded-full border p-4 cursor-pointer border-amber-50" >
                      <FaInstagram className="text-3xl"></FaInstagram>
                    </motion.div>

                    <motion.div
                    initial={{opacity:0,y:100}}
                animate={{opacity:100,y:0}}
                transition={{ 
                  type:"spring",
                  delay:1.6,
                  stiffness:90,
                  damping:16 }} className="inline-block rounded-full border p-4 cursor-pointer border-amber-50" >
                      <FaFacebook className="text-3xl"></FaFacebook>
                    </motion.div>

                    {/* line */}
                    <motion.div
                    initial={{opacity:0}}
                animate={{opacity:100}}
                transition={{ 
                  type:"spring",
                  delay:1.3,
                  stiffness:100,
                  damping:8 }}
                   className="w-20 h-0.5 bg-amber-50" ></motion.div>
                  </div>

                  </motion.div> 
                )
              }
              </AnimatePresence>
               
             </div>
            
        </section> 
    </main>
  )}

export default Hero
