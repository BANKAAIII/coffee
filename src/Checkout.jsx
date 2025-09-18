import React from 'react'
import blueWallpaper from "./assets/blueWallpaper.jpg"
import rangoli from "./assets/rangoli.png"
import {easeIn, motion} from "framer-motion"

const bgWall={
  backgroundImage:`url(${blueWallpaper})`,
  backgroundSize:"cover"
}

const Checkout = (  ) => {
  return (
    <div className="flex items-center justify-center">
      <img src={blueWallpaper} className=" relative z-10 w-screen h-screen" />
      
          <motion.img

          initial={{opacity:0,scale:0}}
          animate={{opacity:1,scale:1,rotate:360}}
          transition={{
            opacity:{duration:1,delay:0.5},
            scale:{duration:1,delay:0.5},
            duration:7,
            delay:0.5,
            repeat:Infinity,
            ease:"linear",
            
          }}

          src={rangoli}
          className='w-200 h-200 absolute z-20'
          ></motion.img>
          <motion.img 
          initial={{opacity:0,scale:0}}
          animate={{opacity:1,scale:1}}
          transition={{
            opacity:{duration:1,delay:0.5},
            scale:{duration:1,delay:0.5},
            duration:7,
            delay:0.5,
            repeat:Infinity,
            ease:"linear",
            
          }}
            src={blueWallpaper}
            className='z-30 w-300 h-30 rounded-full absolute'
          ></motion.img>
          <motion.div
          initial={{opacity:0,scale:0}}
          animate={{opacity:1,scale:1}}
          transition={{
            opacity:{duration:1,delay:0.5},
            scale:{duration:1,delay:0.5},
            duration:7,
            delay:0.5,
            repeat:Infinity,
            ease:"linear",
            
          }}
            className='z-40 w-300 h-30 rounded-full  absolute font-serif text-center text-8xl text-amber-300'
          >Amazon Great Indian Sale</motion.div>
    </div>
  )
}

export default Checkout
