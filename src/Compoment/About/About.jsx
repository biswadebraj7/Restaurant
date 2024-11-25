import React, { useState } from 'react'
import Container from '../share/Container'
import packages from "../../assets/images/icon/icon1.png"
import medal from "../../assets/images/icon/icon2.png"
import bag from "../../assets/images/icon/icon3.png";
import aboutphoto from "../../assets/images/icon/Frame 1707478071.png";
import { NavLink } from 'react-router-dom'


const About = () => {

    const [toggle, settoggle]= useState(1)
    const toggleUpdate=(id)=>{
        settoggle(id)
     
    }
  return (
    <div className=' py-28 mx-auto w-full relative bg-white'>
        <img src={aboutphoto} alt="" className=' absolute bottom-32 right-0 hidden lg:block' />
        <div>
             
            <Container>
                <article className=' grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6'>
                    <div id='about' className=' '>
                        <div className=' m-7 w-[240px] h-36 bg-white p-6 rounded-lg'>
                            <div className=' w-full flex items-center justify-start  gap-4'>
                             
                                <span className=' text-center py-7 px-6  font-bold text-2xl border-2 border-[#FEBF00]  rounded-full'>50+</span>
                              
                                <h4 className=' font-semibold text-base text-[#181818]'>Market 
                                Experiences</h4>

                            </div>


                        </div>
                   
                    </div>

                    <section>
                        <ul className=' flex justify-start items-center gap-6'>
                            <li><button className={toggle===1 ? "p-4 bg-[#B52B1D] font-medium text-sm text-[#FFFFFF]":"font-medium text-sm text-[#333333]"}   onClick={()=>toggleUpdate(1)}>About</button> </li>
                            <li><button className={toggle===2 ? "p-4 bg-[#B52B1D] font-medium text-sm text-[#FFFFFF]":"font-medium text-sm text-[#333333]"}   onClick={()=>toggleUpdate(2)}>Experience</button> </li>
                            <li><button className={toggle===3 ? "p-4 bg-[#B52B1D] font-medium text-sm text-[#FFFFFF]":"font-medium text-sm text-[#333333]"}   onClick={()=>toggleUpdate(3)}>Contact</button> </li>


                        </ul>

                       <div className=' w-full mx-auto'>

                       <article className={toggle ===1 ?`show-content` : `content`} >
                        
                            <h1 className=' font-bold text-4xl text-[#181818] text-left pt-8 uppercase'>Exceptional culinary </h1>
                            <h1 className=' font-bold text-[30px] text-[#181818] text-left uppercase '>experience and delicious food </h1>
                        <p className=' font-normal text-base py-5 text-[#333333]  max-w-lg text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                        <div className=' pt-4 flex items-center justify-start gap-3'>
                        <NavLink className={" font-bold text-lg text-center text-[#0A1425] py-4 px-6 bg-[#FEBF00]"} to={'/'}>About More</NavLink>
                            <p className=' font-bold text-lg'>+88 3426 739 485</p>
                        </div>

                        </article>
                        <article className={toggle ===2 ?`show-content` : `content`} >
                            <h1 className=' font-bold text-4xl text-[#181818] text-left pt-8 uppercase'>Exceptional culinary </h1>
                            <h1 className=' font-bold text-[30px] text-[#181818] text-left uppercase '>experience and delicious food </h1>
                        <p className=' font-normal text-base py-5 text-[#333333]  max-w-lg text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                        <div className=' pt-4 flex items-center justify-start gap-3'>
                        <NavLink className={" font-bold text-lg text-center text-[#0A1425] py-4 px-6 bg-[#FEBF00]"} to={'/'}>About More</NavLink>
                            <p className=' font-bold text-lg'>+88 3426 739 485</p>
                        </div>

                        </article>
                        <article className={toggle ===3 ?`show-content` : `content`} >
                            <h1 className=' font-bold text-4xl text-[#181818] text-left pt-8 uppercase'>Exceptional culinary </h1>
                            <h1 className=' font-bold text-[30px] text-[#181818] text-left uppercase '>experience and delicious food </h1>
                        <p className=' font-normal text-base py-5 text-[#333333]  max-w-lg text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                        <div className=' pt-4 flex items-center justify-start gap-3'>
                        <NavLink className={" font-bold text-lg text-center text-[#0A1425] py-4 px-6 bg-[#FEBF00]"} to={'/'}>About More</NavLink>
                            <p className=' font-bold text-lg text-[#333333]'>+88 3426 739 485</p>
                        </div>

                        </article>
                        
                        
                       </div>
                   </section>
    

                </article>
                <section className=' mx-auto pt-24 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                <div className=' flex justify-start items-center gap-2'>
                        <img src={packages} alt="" />
                        <div>
                            <h6 className='text-[#0A1425] text-center font-bold text-3xl'>fast delivery</h6>
                            <p className=' font-normal text-xl text-[#0A1425]'>Within 30 minutes</p>
                        </div>
                    </div>
                    <div className=' flex justify-start  items-center gap-2'>
                        <img src={medal} alt="" />
                        <div>
                            <h6 className='text-[#0A1425] text-center font-bold text-3xl'>absolute dining</h6>
                            <p className=' font-normal text-xl text-[#0A1425]'>Best buffet restaurant</p>
                        </div>
                    </div>
                    <div className=' flex justify-start  items-center gap-2'>
                        <img src={bag} alt="" />
                        <div>
                            <h6 className='text-[#0A1425] text-center font-bold text-3xl'>pickup delivery</h6>
                            <p className=' font-normal text-xl text-[#0A1425]'>Grab your food order</p>
                        </div>
                    </div>
                    

                </section>

            </Container>

        </div>
      
    </div>
  )
}

export default About
