import React from 'react'
import Container from '../share/Container'
import headers from "../../assets/images/header/headers.png"
import topimg from "../../assets/images/header/top.png"
import footimg from "../../assets/images/header/foot.png"
import Button from '../share/Button'
const Header = () => {
  return (
    <div className='w-full py-28 mx-auto bg-[#B52B1D] min-h-screen'>
        <div>
            <Container>
                <div className=' relative   grid lg:grid-cols-2 grid-cols-1 '>
                    <div className='  ' >
                        <div className=' first:pl-0 lg:p-6 p-0 lg:absolute left-0 lg:-top-0 top-0   lg:mt-20    lg:bg-gradient-to-br to-[#BD1F17] from-[#BD1F17]   z-30  '>
                        <h3 className=' font-bold lg:text-[100px] text-[45px] lg:leading-[130px] text-white'>Taste the authentic</h3>
                        <h3 className=' font-bold lg:text-[100px] text-[45px]   lg:leading-[130px]  text-white'>Saudi cuisine</h3>

                        </div>
                        <div className=' lg:absolute left-0 lg:top-96 top-0 py-6'>
                            
                        <p className=' max-w-md font-normal text-2xl py-2 text-[#FFFFFF]'>Among the best Saudi chefs in the world, serving you something beyond flavor. </p>
                         <Button title={"Explore Menu"} />
                        </div>


                    </div>
                    <div className=' relative'>
                        <img className=' absolute -right-8 -top-12 z-10 my-3' src={topimg} alt="" />
                        <img src={headers} alt="" className='lg:w-[750px] w-[390px]' />
                        <img className=' bg-[#FEBF00] w-32 h-32 rounded-full absolute -right-16 -bottom-10 z-10 my-3' src={footimg} alt="" />
                    </div>

                </div>
            </Container>
        </div>
      
    </div>
  )
}

export default Header
