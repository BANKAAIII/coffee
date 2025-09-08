import React from 'react'
import {easeInOut, motion} from "framer-motion";
import coffee1 from "../../assets/coffee1.png"
import coffee2 from "../../assets/coffee3.png"

const coffeeData =[
    {
        id:1,
        img:coffee1,
        title:"Cold Coffee",
        subtitle:"lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price:"Rs 300"
    },
    {
        id:2,
        img:coffee2,
        title:"Black Coffee",
        subtitle:"lorem ipsum dolor sit amet, consectetur adipiscing elit.",
         price:"Rs 280"
    },
    {
        id:3,
        img:coffee1,
        title:"Espresso",
        subtitle:"lorem ipsum dolor sit amet, consectetur adipiscing elit.",
         price:"Rs 400"
    }
]

const Services = () => {
  return (
    <div className="container w-screen mx-auto  mt-4" >
       <motion.div 
       initial={{opacity:0,y:-20}}
       whileInView={{opacity:100,y:0}}
       transition={{
        type:"decay",
        delay:0.5,
        stiffness:30,
        damping:30
       }}
       className="w-full text-4xl pt-6 font-bold text-gray-800 gap-1 space-y-2 mx-2 text-center">
        FRESH
        <span className=" text-amber-400 "> AND TASTY </span>
       .
       </motion.div>
       <motion.div
       type="spring"
       initial={{opacity:0,scale:0}}
       whileInView={{opacity:1,scale:1}}
         transition={{
        type:"spring",
        delay:0.1,
        duration:1,
        stiffness:60,
        damping:40
       }}
       className="text-gray-800/70 w-full text-2xl text-center">
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
       Eos reprehenderit eum ducimus,<br></br> 
       distinctio cum eaque totam voluptatem ex dolorem fuga.</motion.div>

       {/* Coffee SEction */} 
       <div className="relative grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-20 ">
           {coffeeData.map( (coffee)=>( 
            <div>
                <motion.img
                initial={{opacity:0,scale:0}}
                whileInView={{opacity:1,scale:1}}
                tramsition={{
                    type:"spring",
                    delay:0.5,
                    ease:easeInOut,
                    stiffness:20,
                    damping:10,
                   

                }}
                className='relative z-10 size-[500px] img-shadow-2 hover:scale-110 duration-300 ease-in-out' src={coffee.img}/>
                <div className='text-center space-y-2  '>
                    <h1 className="relative z-15 text-4xl pt-7 text-amber-300  font-semibold ">
                        {coffee.title}
                    </h1>
                    <h1 className="pb-2 text-2xl leading-tight text-gray-800/60  font-light " >
                        {coffee.subtitle}<br></br>
                       
                    </h1>
                     <span  className=" text-xl font-bold text-gray-950 w-10 h-5 hover:bg-amber-300/30  p-1.5 rounded-2xl ">
                           
                        {coffee.price}
                    
                        </span>
                </div>
            </div>
                
        ) 
        
         )}
       </div>

       </div>
  )
}

export default Services
