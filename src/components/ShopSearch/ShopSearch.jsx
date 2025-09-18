import React from 'react'
import worldMap from "../../assets/world-map.png"
import Inputbox from './components/Inputbox'
import InputButton from './components/InputButton'
import { spring } from 'framer-motion'
import {motion} from "framer-motion";



const ShopSearch = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 container max-w-full pt-35 place-items-center ">
        <div className=" p-5 -mt-20 text-center ">
            <motion.div 
            initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{
                type:"spring", delay:1, stiffness:100, damping:7 
            }}
            className="text-5xl md:text-7xl font-bold text-gray-800 items-start">
                Buy our products from <br></br> anywhere!
            </motion.div>
            <motion.div 
             initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{
                type:"spring", delay:1.5, stiffness:100, damping:10 
            }}
            className="flex gap-5 pt-15 pb-2" >
                <Inputbox name={"Name"} className={"w-30 md:w-40"} />
                <Inputbox name={"Email"} className={"w-80 md:w-100"} />
            </motion.div>

            <motion.div 
             initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{
                type:"spring", delay:2, stiffness:100, damping:20
            }}className="flex gap-5 p-1" >
                <Inputbox name={"Country"} className={"w-60 md:w-80"} />
                <Inputbox name={"ZipCode"} className={"w-50 md:w-60"} />
            </motion.div>

           <motion.div 
            initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{
                type:"spring", delay:2.5, stiffness:100, damping:15
            }}className="flex items-center pt-4">
             <InputButton
            label="Enter"
            onClick={()=>{}}
            className={" md:w-145 md:h-18 w-116 h-15 rounded-xl bg-amber-300/90 hover:bg-amber-400 hover:shadow-2xl "}
            />
           </motion.div>
             
      </div>
      
      <img src={worldMap} className='hidden md:block w-200 h-100 bg-gray-700/10 rounded-4xl p-10 shadow-2xl '></img>
    </div>
  ) 
}

export default ShopSearch
 