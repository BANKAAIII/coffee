import React, { useState } from 'react'
import {easeInOut, motion} from "framer-motion";
import coffee1 from "../../assets/coffee1.png"
import coffee2 from "../../assets/coffee3.png"
import forward from "../../assets/forward.png"
import back from "../../assets/backeard.png"


const classNameData = " top-50 left-60 absolute z-[9999] w-10 h-10 bg-gray-600 rounded-full"

const coffeeData =[
    {
        id:1,
        img:coffee1,
        title:"Cold Coffee",
        subtitle:"lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price:"300"
    },
    {
        id:2,
        img:coffee2,
        title:"Black Coffee",
        subtitle:"lorem ipsum dolor sit amet, consectetur adipiscing elit.",
         price:"280"
    },
    {
        id:3,
        img:coffee1,
        title:"Espresso",
        subtitle:"lorem ipsum dolor sit amet, consectetur adipiscing elit.",
         price:"400"
    }
]

const Services = () => {

    const [activeId,setActiveId] = useState(false);
    const [coffeeId,setCoffeeId] = useState(1);

  return (
    <div className="container w-full mx-auto  mt-4" >
       <motion.div 
       initial={{opacity:0,y:-20}}
       whileInView={{opacity:100,y:0}}
       transition={{
        type:"decay",
        delay:0.5,
        stiffness:30,
        damping:30
       }}
       className="w-full text-4xl pt-6 font-bold text-gray-800 gap-1 space-y-2  text-center">
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
       className="text-gray-800/70 w-full text-xl md:text-2xl pl-2 md:pl-0 text-start md:text-center">
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
       Eos reprehenderit eum ducimus,<br></br> 
       distinctio cum eaque totam voluptatem ex dolorem fuga.</motion.div>

       {/* Coffee SEction md-lg */} 
       <div className=" relative grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-20 -mt-30 md:-mt-0 ">
           {coffeeData.map( (coffee)=>( 
            <div>
                {/* medium to lg screens */}
                <div className='hidden md:relative md:z-10 md:inline-block md:mx-auto scale-70 md:w-[500px]'>
                    <motion.img
                onClick={()=>{setActiveId(coffee.id)}}
                initial={{opacity:0,scale:0}}
                whileInView={{opacity:1,scale:1}}
                transition={{
                    type:"spring",
                    delay:0.5,
                    ease:easeInOut,
                    stiffness:20,
                    damping:10,
                   

                }}
                className='relative z-40 size-[500px] img-shadow-2 hover:scale-110 duration-300 ease-in-out' src={coffee.img}/>
                
                </div>
                <div className='hidden md:flex md:flex-col md:items-center md:text-center md:space-y-2  '>
                    <h1 className=" text-4xl pt-7 text-amber-300  font-semibold ">
                        {coffee.title}
                    </h1>
                    <h1 className="pb-2 text-2xl leading-tight text-gray-800/60  font-light " >
                        {coffee.subtitle}<br></br>
                       
                    </h1>
                     <span  className="md:flex md:flex-row text-xl font-bold text-gray-950 w-auto h-auto hover:bg-amber-300/30  p-1.5 rounded-2xl ">
                         Rs.  
                        {coffee.price}
                    
                        </span>
                </div>
            </div>
                
        ) 
        
         )}
       </div>
{/* Coffee Section small screen */}
<div className="w-full flex justify-center md:hidden">
  <div className="grid grid-cols-[20%_60%_20%] h-[500px] w-full sm:w-[80%] sm:mt-20 ">

    {/* back button */}
    <div className=" justify-center items-center flex ">
        <button 
        className='relative flex justify-center items-center w-25 h-25 bg-amber-300 shadow-2xl shadow-gray-300 hover:shadow-gray-900 rounded-full'
        onClick={()=>{
            
            setCoffeeId(coffeeId=== 1?1:coffeeId-1)
        }} >
             <img className='absolute h-17 w-17 font-bold'
        src={back} ></img>
        </button>
       
    </div>

    {/* image */}
    <div>

       <img
       key={coffeeId}
       src={ coffeeData.find((coffee)=>coffee.id===coffeeId).img }
       className='mt-6 img-shadow-2'
       />
       <div className='text-4xl font-serif font-bold text-gray-800 text-center '>
       {coffeeData.find((coffee) => coffee.id === coffeeId)?.title}
       </div>

    </div>

     {/* forward button */}    
     <div className=" justify-center items-center flex ">
        <button 
        className='relative flex justify-center items-center z-20 w-25 h-25 bg-amber-300 shadow-2xl shadow-gray-300 hover:shadow-gray-900 rounded-full'
        onClick={()=>{
            
       
            setCoffeeId(coffeeId === coffeeData.length? coffeeData.length : coffeeId+1)
        }} >
             <img
        src={forward}
        className='absolute z-30 w-10 h-10' 
        ></img>
        </button>
       
    </div>

  </div>
</div>

       

       </div>
  )
}

export default Services
