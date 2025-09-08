import React from 'react'
import worldMap from "../../assets/world-map.png"
import Inputbox from './components/Inputbox'
import InputButton from './components/InputButton'
import { spring } from 'framer-motion'
import {motion} from "framer-motion";



const ShopSearch = () => {
  return (
    <div className="grid grid-cols-2 container max-w-full pt-35 place-items-center ">
        <div className=" p-5  text-center ">
            <motion.div 
            initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{
                type:"spring", delay:1, stiffness:100, damping:7 
            }}
            className="text-7xl font-bold text-gray-800 items-start">
                Buy our products from <br></br> anywhere!
            </motion.div>
            <motion.div 
             initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{
                type:"spring", delay:1.5, stiffness:100, damping:10 
            }}
            className="flex gap-5 pt-15 pb-2" >
                <Inputbox name={"Name"} className={"w-40"} />
                <Inputbox name={"Email"} className={"w-100"} />
            </motion.div>

            <motion.div 
             initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{
                type:"spring", delay:2, stiffness:100, damping:20
            }}className="flex gap-5 p-1" >
                <Inputbox name={"Country"} className={"w-80"} />
                <Inputbox name={"ZipCode"} className={"w-60"} />
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
            className={"w-145 h-18 rounded-xl bg-amber-300/90 hover:bg-amber-400 hover:shadow-2xl "}
            />
           </motion.div>
             
      </div>
      
      <img src={worldMap} className=' w-200 h-100 bg-gray-700/10 rounded-4xl p-10 shadow-2xl '></img>
    </div>
  ) 
}

export default ShopSearch
 