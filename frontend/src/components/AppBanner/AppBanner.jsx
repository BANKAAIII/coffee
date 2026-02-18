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

const AppStoreStyle={
     backgroundImage: `url(${AppStore})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: 70,
  width:200,
}

const PlayStoreStyle={
     backgroundImage: `url(${PlayStore})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: 30,
  width: 40,
}

const AppBanner = () => {
  return (
    <div className='flex justify-center'>
        <div className='w-full  flex justify-center mx-4 my-14 overflow-hidden'>
    <div
  style={BannerStyle}
  className="relative z-10 container 
              w-200px h-[300px] rounded-xl
              sm:w-[1800px] sm:h-[400px] 
              sm:rounded-2xl overflow-hidden"
>
  <div className="absolute flex flex-col bottom-10 
                  right- space-y-4
                  md:right-40 md:space-y-2">
    
    {/* banner title */}
    <motion.div
    initial={{opacity:0,x:100}}
    animate={{opacity:1,x:0}}
    transition={{
        type:"spring",
        delay:0.5,
        stiffness:60,
        damping:10
    }}
    className="font-bold 
                text-4xl px-2
                md:text-5xl font-serif ">
      Download <span className='hidden sm:block'>the app</span>
    </motion.div>

    <motion.div
    initial={{opacity:0,x:100}}
    animate={{opacity:1,x:0}}
    transition={{
        type:"spring",
        delay:0.7,
        stiffness:60,
        damping:10
    }}
     className="z-20 text-xl px-3 text-gray-800 font-serif">
      Lorem ipsum dolor sit amet consedolor <br />
      sit amet consectetur adipisicing elit. Officiis
    </motion.div>
     

    <div className=' flex flex-row gap-3 '>
        <motion.img
    initial={{opacity:0,x:100}}
    animate={{opacity:1,x:0}}
    transition={{
        type:"spring",
        delay:0.9,
        stiffness:60,
        damping:10
    }} src={PlayStore} className='w-37 h-15  
                                  md:w-50 md:h-20 
                                  '></motion.img>
        <motion.img
    initial={{opacity:0,x:100}}
    animate={{opacity:1,x:0}}
    transition={{
        type:"spring",
        delay:1,
        stiffness:60,
        damping:10
    }}img src={AppStore} className='w-37 h-15  
                                  md:w-50 md:h-20 '></motion.img>
    </div>

  </div>
</div>

    </div>
    </div>
  )
}

export default AppBanner;
