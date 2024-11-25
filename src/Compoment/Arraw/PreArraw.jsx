import React from 'react'
import previmg from "../../assets/images/arraw/prearraw.png"
const PreArraw = ({onClick}) => {
  return (
    <div className=' absolute -bottom-24 right-56 lg:right-20 lg:-top-[150px] ' onClick={onClick}>
      <img src={previmg} alt="" />
    </div>
  )
}

export default PreArraw
