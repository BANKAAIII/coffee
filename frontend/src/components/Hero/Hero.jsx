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
        <section className="
                            min-h-[600px]
                            md:min-h-[720px] 
                            w-full
                            overflow-x-hidden">   {/* used to define sections of a page  */}

            <div className="container"></div>
             {/* Navbar section */}
            <NavBar sideBar={sideBar} setSideBar={setSideBar}/>

             {/* Hero section */}
             <div className='
                             grid  min-h-[850px]
                             grid-cols-1 
                             md:grid-cols-3  
                             place-items-center ' >

              {/* text section 1 */}
              <div className=" 
                              relative text-[#f1dabf] p-4  space-y-20
                              mt-[50px]
                              xl:mt-[75px] 
                              md:mt-[200px] ">
                <motion.h1
                
                initial={{opacity: 0,y: -100}}
                animate={{opacity: 100, y:0}}
                transition={{
                  type:"spring",
                  delay:0.4,
                  damping:9,
                  stiffness:100
                }}
                className=" text-3xl md:text-4xl xl:text-5xl font-bold leading-tight 
                            translate-x-4 -translate-y-9 
                            sm:ml-10 
                            md:ml-10 ">Blvck <br></br>Tumbler</motion.h1>
                
                
                <motion.div
                
                initial={{opacity: 0,y:100}}
                animate={{opacity: 100, y:0}}
                transition={{
                  type:"spring",
                  delay:1,
                  damping:10,
                  stiffness:100
                }}

                className=" relative z-10 
                             space-y-2 xl:space-y-6 -top-4 right-2
                             md:top-0 flex flex-col items-center justify-center m-8">

                     <h1 className="text-xl xl:text-2xl  " >Black Lifestyle Lovers</h1>
                  <h1 className="text-sm opacity-55 leading-loose">Lorem ipsum dolor sit,amet consectetur adipisicing elit.<br></br>
                      Delectus aspernatur,cumque eos neque dolorem architecto,<br></br>
                       deserunt quis voluptatibus in quisquam quia ducimus</h1>
                
                 <div className="absolute  flex 
                                 -top-17 -right-4 w-[80%] h-[70%] bg-gray-700/25
                                 md:-top-5  md:-left-2  "></div>
                </motion.div>
              </div>

              {/* hero Image */}
              <div className="relative z-40" >
                
                {/* transperent title in the bg */}
                <div className="absolute 
                                -top-5 left-[100px]
                                md:top-10  md:left-[180px]">
                  <motion.h1 
                  
                  initial={{opacity:0,x:-100}}
                animate={{opacity:100,x:50}}
                transition={{ 
                  type:"spring",
                  delay:0.9,
                  stiffness:100,
                  damping:8 }} 
                  className="text-[140px]  text-[#1a1f25]/50 scale-120 font-bold leading-none 
                              sm:text-[120px] sm:scale-150">Blvck<br></br>Tumbler</motion.h1>
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
                className=" absolute z-10 h-[200px] w-[200px] border-18 rounded-full  xl:border-24 border-orange-500
                             top-10 right-[50%] xl:right-[40%]
                             md:top-20  md:-right-10 md:w-[200px] md:h-[200px]  md:border-20" ></motion.div>
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
                     className="relative z-20  
                                -left-[180px] w-[290px] h-[480px]
                                md:-left-0 md:w-[280px] md:h-[550px] xl:w-[320px] xl:h-[700px] mb-8 md:mb-20  img-shadow1"
                     ></motion.img>

             
              </div>
              
              {/* text section 2 */}
              <div className="flex flex-col w-full xl:w-[260px] text-[#f1dabf] -mt-[50px] mb-[50px] md:mb-0 md:mt-[200px] space-x-100 space-y-15 md:pt-50 p-4">
               <div className='container flex justify-center md:justify-start '>
                 <motion.h1 
                initial={{opacity:0}}
                whileInView={{opacity:100}}
                transition={{ 
                  type:"spring",
                  delay:0.9,
                  stiffness:100,
                  damping:8
                }}
                className="text-3xl xl:text-5xl font-bold  ">Design</ motion.h1>
               </div>
               
                <div className="relative z-5 -top-5 text-center md:text-start">

                  <motion.h1 
                  initial={{opacity:0,x:100}}
                whileInView={{opacity:100,x:0}}
                transition={{ 
                  type:"spring",
                  delay:0.9,
                  stiffness:100,
                  damping:8 }} 
                  className="text-xl xl:text-2xl ">first line of the design paragraph</motion.h1>

                  <motion.h1 
                  
                  initial={{opacity:0,x:100}}
                whileInView={{opacity:100,x:0}}
                transition={{ 
                  type:"spring",
                  delay:0.9,
                  stiffness:100,
                  damping:8 }} className="text-sm opacity-55  xl:leading-loose">
                    first line of design <br></br>
                    second line of design
                  </motion.h1>
                  <div className="absolute flex w-full h-[90%] -top-5 md:-top-5 left-[90px] md:-left-5   bg-gray-900/50"></div>
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
                 className=" absolute top-0 right-0 z-10 w-[15%] h-full bg-gradient-to-b from-amber-400/50 to-orange-500/80 ">

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
