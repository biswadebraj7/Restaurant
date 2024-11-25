import React from 'react'

const Container = ({children}) => {
  return (
    <div className=' mx-auto max-w-[1320px] lg:px-20 md:px-10 sm:px-4 px-8 '>
      {children}
    </div>
  )
}

export default Container
