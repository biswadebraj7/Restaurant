import React from 'react'

const Button = ({title}) => {
  return (
    <div className=' py-4 mx-auto'>
        <button className=' w-48 h-14 font-bold text-lg text-center text-[#0A1425]  bg-[#FEBF00]'>{title}</button>
      
    </div>
  )
}

export default Button
