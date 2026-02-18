import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, easeInOut, motion } from "framer-motion";

import coffee1 from "../../assets/coffee1.png"
import coffee2 from "../../assets/coffee3.png"
import cff1 from "../../assets/cf1.png"
import cff2 from "../../assets/cff2.png"
import coffeeBeans from "../../assets/coffeeBeans.png"
import cake from "../../assets/cake.png"
import sandwich from "../../assets/sandwich.png"
import forward from "../../assets/forward.png"
import cake1 from "../../assets/cake1.png"
import cake2 from "../../assets/cake2.png"
import cake3 from "../../assets/cake3.png"

import sandwich1 from "../../assets/sandwich1.png"
import sandwich2 from "../../assets/sandwich2.png"
import sandwich3 from "../../assets/sandwich3.png"
import SlideToConfirm from '../slider';


const sandwichData = [
  { id: 0, img: sandwich1, title: "Club Sandwich", subtitle: "1 lorem ipsum...", price: "Rs 300" },
  { id: 1, img: sandwich2, title: "Ham Sandwich", subtitle: "2 lorem ipsum...", price: "Rs 280" },
  { id: 2, img: sandwich3, title: "Veggie Sandwich", subtitle: "3 lorem ipsum...", price: "Rs 400" },
];

const cakeData = [
  { id: 0, img: cake1, title: "Dutch Chocolate", subtitle: "1 lorem ipsum...", price: "Rs 300" },
  { id: 1, img: cake2, title: "Almond Cream", subtitle: "2 lorem ipsum...", price: "Rs 280" },
  { id: 2, img: cake3, title: "Strawberry Cake", subtitle: "3 lorem ipsum...", price: "Rs 400" },
];
const coffeeData = [
  { id: 0, img: coffee1, title: "Cold Coffee", subtitle: "1 lorem ipsum...", price: "Rs 300" },
  { id: 1, img: coffee2, title: "Black Coffee", subtitle: "2 lorem ipsum...", price: "Rs 280" },
  { id: 2, img: coffee1, title: "Espresso", subtitle: "3 lorem ipsum...", price: "Rs 400" },
  { id: 3, img: cff1, title: "Cappuccino", subtitle: "4 lorem ipsum...", price: "Rs 350" },
  { id: 4, img: cff2, title: "Latte", subtitle: "5 lorem ipsum...", price: "Rs 350" },
];

const variants = {
  normal: { rotateY: 0, scale: 1 },
  pressed: { rotateY: 180, scale: 0.96 },
};

export default function Services() {
  const [category, setCategory] = useState(1); 
  const [index, setIndex] = useState(0);
  const [press, setPress] = useState(false);

  // billing 
  const [billingMode, setBillingMode] = useState(false);

  const activeData =
    category === 1 ? coffeeData :
    category === 2 ? cakeData :
    sandwichData;

  useEffect(() => {
    setIndex(0);
  }, [category]);

  function browse(menuSize, inc) {
    setIndex((prev) =>
      inc ? (prev === menuSize - 1 ? 0 : prev + 1)
          : (prev === 0 ? menuSize - 1 : prev - 1)
    );
  }

  const [cart,setCart]=useState([]);
  const foundItem = cart.find((item) => item.id === activeData[index].id);
  return (
    <div className="container w-full mx-auto mt-4">

      
      <div className="grid grid-cols-3 h-[50px] w-[60%] mx-auto mt-10 rounded-2xl overflow-hidden">

        <button 
          onClick={() => setCategory(1)} 
          className={`${category===1 ? "bg-amber-300/60":"bg-amber-100/50"} flex items-center justify-center`}>
          <span className="hidden md:block">Coffee</span>
          <img src={coffeeBeans} className="w-6 md:hidden" />
        </button>
        <button 
          onClick={() => setCategory(2)} 
          className={`${category===2 ? "bg-amber-300/60":"bg-amber-100/50"} flex items-center justify-center`}>
          <span className="hidden md:block">Cakes</span>
          <img src={cake} className="w-6 md:hidden" />
        </button>
        <button 
          onClick={() => setCategory(3)} 
          className={`${category===3 ? "bg-amber-300/60":"bg-amber-100/50"} flex items-center justify-center`}>
          <span className="hidden md:block">Sandwiches</span>
          <img src={sandwich} className="w-6 md:hidden" />
        </button>
      </div>

      {/* MOBILE CAROUSEL */}
      <div className="block md:hidden relative w-full h-[400px] flex items-center justify-center">
        <motion.div
          variants={variants}
          initial="normal"
          animate={press ? "pressed" : "normal"}
          onTapStart={() => setPress(true)}
          onTap={() => setPress(false)}
          onTapCancel={() => setPress(false)}
          className="w-[70%] h-[300px] bg-white shadow-2xl rounded-2xl flex items-center justify-center select-none"
        >
          <AnimatePresence mode="wait">
            {!press && (
              <motion.div key={index} initial={{opacity:0}} animate={{opacity:1}} className="flex flex-col items-center">
                <img src={activeData[index].img} className="w-32" />
                <h3 className="mt-4 font-bold">{activeData[index].title}</h3>
               <div className="flex flex-row gap-1" >
                
                <button 
                className="mt-2 bg-amber-200/70 px-4 py-1 rounded-full"
                
                >{activeData[index].price}</button>
                {billingMode && (() => {
                  const found = cart.find(i => i.id === activeData[index]?.id);
                  return found ? (
                    <div className="mt-2 bg-amber-200/70 px-4 py-1 rounded-full">
                      {found.quantity}
                    </div>
                  ) : null;
                })()}
               </div>
               
              </motion.div>
            )}
            {press && (
              <motion.div key={index+"back"} initial={{opacity:0}} animate={{opacity:1,rotateY:180}} className="p-4 text-center ">
                {activeData[index].subtitle}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* CONTROLS */}
        <button onClick={() => browse(activeData.length, false)} className=" absolute left-4">
          <img src={forward} className="w-10 rotate-180" />
        </button>
        <button onClick={() => browse(activeData.length, true)} className="absolute right-4">
          <img src={forward} className="w-10" />
        </button>
      </div>

      <SlideToConfirm
      onConfirm={()=>{}}
      billing={billingMode}
      setBilling={setBillingMode}
      payload={cart}
      setPayload={setCart}
      activeData={activeData[index]}
      />
      

      {/* DESKTOP GRID */}
      <div className="hidden md:grid grid-cols-3 gap-10 mt-10">
        {activeData.map(item => (
          <div key={item.id} className="text-center">
            <img src={item.img} className="w-40 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-500">{item.subtitle}</p>
            <span className="inline-block mt-2 bg-amber-200/70 px-4 py-1 rounded-full">{item.price}</span>
          </div>
        ))}
      </div>

    </div>
  );
}