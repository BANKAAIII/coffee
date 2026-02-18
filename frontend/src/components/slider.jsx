import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function SlideToConfirm({
  onConfirm,
  payload,
  setPayload,
  activeData,
  billing,
  setBilling
}) {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const [confirmed, setConfirmed] = useState(false);

  // Reset slider when active item changes 
  useEffect(() => {
    setConfirmed(false);
  }, [activeData?.id]);

  function billingMode(setBilling,payload){
    if (payload.length !== 0 ){
      setBilling(true);
    }else if (payload.length === 0) {
      setBilling(false);
    }
  }

  function handleDragEnd(event, info) {
    if (!containerRef.current || !sliderRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const sliderWidth = sliderRef.current.offsetWidth;
    const maxX = containerWidth - sliderWidth;

    // If dragged close enough to the end → confirm
    if (info.offset.x >= maxX - 10) {
      setConfirmed(true);
      if (onConfirm) onConfirm(activeData);
    }
  }

  const maxX =
    containerRef.current && sliderRef.current
      ? containerRef.current.offsetWidth - sliderRef.current.offsetWidth
      : 0;

  return (
    <div className="flex w-full justify-center md:hidden gap-5 select-none">
      {/* Slide track */}
      <div
        ref={containerRef}
        className="relative w-[220px] h-[50px] rounded-2xl shadow-2xl bg-amber-50 overflow-hidden"
      >
        {/* Track label */}
        <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-500 pointer-events-none">
          Slide to confirm
        </div>

        {/* Slider */}
        <motion.div
          ref={sliderRef}
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0}
          onDragEnd={handleDragEnd}
          animate={confirmed ? { x: maxX } : { x: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute left-0 top-0 h-full aspect-square bg-red-500/40 rounded-2xl cursor-grab active:cursor-grabbing flex items-center justify-center"
        >
          ▶
        </motion.div>
      </div>

      {/* Quantity control */}
      <div className="w-[90px] rounded-2xl h-[50px] bg-amber-100 shadow-2xl grid grid-cols-2">
        <button
          className="flex w-full h-full rounded-tl-2xl rounded-bl-2xl text-2xl items-center justify-center"
          onClick={async() => {
            billingMode(setBilling,payload);
            setPayload((prev) =>
              prev.map((item) =>
                item.id === activeData.id
                  ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                  : {...item,quantity:1}
              )
            );
          alert(billing);

          }}
        >
          −
        </button>

        <button
          className="flex w-full h-full rounded-tr-2xl rounded-br-2xl text-2xl items-center justify-center"
          onClick={() => {
            setPayload((prev) => {
              const exists = prev.find((item) => item.id === activeData.id);
              if (!exists) {
                return [...prev, { ...activeData, quantity: 1 }];
              }
              return prev.map((item) =>
                item.id === activeData.id
                  ? { ...item, quantity: item.quantity + 1 }
                  :{...item, quantity:1}
              );
            });
            
            alert(billing);
          
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}