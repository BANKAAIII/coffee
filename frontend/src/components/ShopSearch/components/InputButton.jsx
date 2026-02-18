import React from 'react'

const inputButton = ({onClick,label,className}) => {
  return<button 
      onClick={onClick}
      className={`${className}`}
      >
    {label}
      </button>

  
}

export default inputButton
