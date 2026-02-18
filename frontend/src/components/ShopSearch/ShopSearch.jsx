import React from 'react'
import worldMap from "../../assets/world-map.png"
import Inputbox from './components/Inputbox'
import InputButton from './components/InputButton'
import { spring } from 'framer-motion'
import {motion} from "framer-motion";



const ShopSearch = () => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 container min-w-full  place-items-center pt-5
                    md:pt-6">
        <div className=" pt-4 flex flex-col justify-center items-center text-center ">
            <motion.div 
            initial={{opacity:0,y:100}}
            animate={{opacity:1,y:0}}
            transition={{
                type:"spring", delay:0.3, stiffness:100, damping:7 
            }}
            className="text-3xl md:text-4xl font-bold text-gray-800  items-start ">
                Buy our products from <br></br> anywhere!
            </motion.div>
            <motion.div 
             initial={{opacity:0,y:100}}
            animate={{opacity:1,y:0}}
            transition={{
                type:"spring", delay:0.6, stiffness:100, damping:10 
            }}
            className="flex gap-2 pt-10 md:pt-15 pb-2  items-center justify-center">
                <Inputbox name={"Name"} className='h-[50px] w-[100px] md:h-[60px] md:w-30 '  />
                <Inputbox name={"Email"} className=" h-[50px] w-[170px] md:h-[60px] md:w-60 " />
            </motion.div>

            <motion.div 
             initial={{opacity:0,y:100}}
            animate={{opacity:1,y:0}}
            transition={{
                type:"spring", delay:0.9, stiffness:100, damping:20
            }}className="flex gap-2 p-1 items-center justify-center " >
                <Inputbox name={"Country"} className="h-[50px] w-[150px] md:h-[60px] md:w-30 " />
                <Inputbox name={"ZipCode"} className="h-[50px] w-[120px] md:h-[60px] md:w-30 " />
            </motion.div>

           <motion.div 
            initial={{opacity:0,y:100}}
            animate={{opacity:1,y:0}}
            transition={{
                type:"spring", delay:1.2, stiffness:100, damping:15
            }}className="flex items-center pt-4 items-center justify-center">
             <InputButton
            label="Enter"
            onClick={()=>{}}
            className={"w-[180px] font-semibold shadow-2xl h-[50px] md:w-145 md:h-18 rounded-3xl md:rounded-xl bg-amber-300/90 hover:bg-amber-400 hover:shadow-2xl "}
            />
           </motion.div>
             
      </div>
      
      <img src={worldMap} className=' hidden sm:block w-200 h-100 bg-gray-700/10 rounded-4xl p-10 shadow-2xl '></img>
    </div>
  ) 
}

export default ShopSearch
 