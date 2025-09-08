import React from 'react'

const inputbox = ({name,onClick,value,className}) => {
  return (
   <div>
    <input 
    onClick={onClick}
    placeholder={name}
    value={value}
    className={`border-2 hover:border-3 bg-gray-600/15 border-gray-600  h-20 rounded-2xl text-3xl px-4 py-2 ${className}`}
    ></input>
   </div>
  )
}

export default inputbox
