import React from 'react'
import {motion} from "framer-motion"
import { BsFacebook, BsGithub, BsGoogle, BsInstagram, BsPhone, BsX } from 'react-icons/bs'
import creditCard from "../../assets/credit.png"


const Footer = () => {
  return (
    <div className='relative w-full h-[320px] md:h-100 bg-amber-400 flex  justify-center gap-50 '>
      <div className='hidden 
                       md:block' >
        {/* Partition 1 */}

        {/* Title 1 */}
       <div className="text-4xl text-amber-50 uppercase font-sans font-bold pt-8">
        coder Cafe
       </div>
       {/* Content 1 */}
       <div className='text-2xl text-amber-50 font-sans pb-10 pt-10'>
            Lorem ipsum dolor sit amet consectetur<br></br>
            adipisicing elit. Eum ea ratione quidem libero,<br></br>
             praesentium ab atque? Quidem maxime, numquam dolores
       </div>
       <a className='text-xl text-amber-50 font-sans flex items-baseline'
          href="+91 9004361469"
            >
                <BsPhone /><span className="w-2"></span>
                +91 9004361469</a>
      </div>

      {/* Partition 2 */}

      {/* Title 2 */}
      <div className='hidden 
                       md:block'>
        <div className="text-4xl text-amber-50 uppercase font-sans font-bold pt-8" >
        quick links
      </div>
      {/* Content 2 */}
      <div className='text-2xl text-amber-50 font-sans pb-10 pt-10 flex flex-row gap-20 ' >
        <div>
             <a href={""} className='text-xl text-amber-50 font-sans flex items-baseline pb-3'>Home</a>
          <a href={""} className='text-xl text-amber-50 font-sans flex items-baseline pb-3'>About Us</a>
             <a href={""} className='text-xl text-amber-50 font-sans flex items-baseline pb-3'>Contact Policy</a>
        </div>
        <div>
             <a href={""} className='text-xl text-amber-50 font-sans flex items-baseline pb-3'>Home</a>
          <a href={""} className='text-xl text-amber-50 font-sans flex items-baseline pb-3'>About Us</a>
             <a href={""} className='text-xl text-amber-50 font-sans flex items-baseline pb-3'>Contact Policy</a>
        </div>

      </div>
      </div>
      
      <div>
         {/* Title 3 */}
        <div className="text-2xl md:text-4xl text-amber-50 uppercase font-sans font-bold pt-8">follow us</div>
        {/* Content 3 */}

        <div className='text-xl text-amber-50 font-sans flex items-baseline gap-3 md:gap-5 pt-5 md:pt-10 '>
            <a href='https://x.com/Ammmeya'><BsX size={50}/></a>
            <a href='https://www.instagram.com/ameywarang/'><BsInstagram size={50}/></a>
            <a href='https://github.com/BANKAAIII'> <BsGithub size={50}/> </a>
        </div>
        <div className="text-2xl text-amber-50 font-sans flex items-baseline  gap-5 pt-5 md:pt-10 pb-5">
            We accept
        </div>
        <img src={creditCard} className='w-80 h-10
                                         sm:w-70 sm:h-10'></img>
                                          
      </div>
     
    </div>
  )
}

export default Footer

