import React from 'react'
import AppStore from "../../assets/app_store.png";
import PlayStore from "../../assets/play_store.png";
import CoverCoffee from "../../assets/coffee-cover.png";
import {motion} from "framer-motion"

const BannerStyle ={
  backgroundImage: `url(${CoverCoffee})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: 400,
  width: 1800,
};


const AppBanner = () => {
  return (
    <div className='flex justify-center'>
        <div className='w-full  flex justify-center my-14 overflow-hidden'>
    <div
  style={BannerStyle}
  className="relative z-10 w-[1800px] h-[400px] rounded-2xl overflow-hidden"
>
  <div className="absolute bottom-6 left-75 md:bottom-5 md:left-[70%] space-y-2">
    
    <motion.div
    initial={{opacity:0,x:100}}
    whileInView={{opacity:1,x:0}}
    transition={{
        type:"spring",
        delay:0.5,
        stiffness:60,
        damping:10
    }}
    className="hidden md:block font-bold text-3xl md:text-5xl font-serif">
      Download the app
    </motion.div>

    <motion.div
    initial={{opacity:0,x:100}}
    whileInView={{opacity:1,x:0}}
    transition={{
        type:"spring",
        delay:0.7,
        stiffness:60,
        damping:10
    }}
     className="hidden md:block z-20 text-2xl text-gray-800 font-serif">
      Lorem ipsum dolor sit amet consedolor <br />
      sit amet consectetur adipisicing elit. Officiis
    </motion.div>
     

    <div className=' flex flex-col md:flex-row gap-1 md:gap-8 '>
        <motion.img
    initial={{opacity:0,x:100}}
    whileInView={{opacity:1,x:0}}
    transition={{
        type:"spring",
        delay:0.9,
        stiffness:60,
        damping:10
    }} src={PlayStore} className=' w-50 h-20'></motion.img>

        <motion.img
    initial={{opacity:0,x:100}}
    whileInView={{opacity:1,x:0}}
    transition={{
        type:"spring",
        delay:1,
        stiffness:60,
        damping:10
    }}img src={AppStore} className='w-50 h-20'></motion.img>
    </div>

  </div>
</div>

    </div>
    </div>
  )
}

export default AppBanner;
