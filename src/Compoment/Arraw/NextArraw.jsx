import React from 'react'
import nextimg from "../../assets/images/arraw/nextarraw.png"

const NextArraw = ({onClick}) => {
  return (
    <div className=' absolute  -bottom-24 right-28 lg:right-0 lg:-top-[150px]  ' onClick={onClick}>
    <img src={nextimg} alt="" />

  </div>
  )
}

export default NextArraw
