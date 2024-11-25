import React, { useState } from 'react'
import Container from './Container'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/icon/log.png'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen]= useState(false)
    const links=<>
    <li className=' gap-2'>
        <NavLink to={"/"} className=" font-medium text-base text-[#FFFFFF]">Home</NavLink>
    </li>
    <li className=' gap-2'>
        <NavLink to={'/about'} className=" font-medium text-base text-[#FFFFFF]">About</NavLink>
    </li>
    <li className=' gap-2'>
        <NavLink className=" font-medium text-base text-[#FFFFFF]">Portfolio</NavLink>
    </li>
    <li className=' gap-2'>
        <NavLink className=" font-medium text-base text-[#FFFFFF]">Clients</NavLink>
    </li>
    <li className=' gap-2'>
        <NavLink className=" font-medium text-base text-[#FFFFFF]">Blog</NavLink>
    </li>
    <li className=' gap-2'>
        <NavLink to={"/contact"} className=" font-medium text-base text-[#FFFFFF]">Contact</NavLink>
    </li>
    
    
   
    </>
  return (
    <div className=' w-full py-12 mx-auto bg-[#B52B1D]' id='headers'>
      <div>
        <Container>

        <nav className= '  w-full flex  justify-between items-center mx-auto gap-60 '>
          <div> 
            <Link className=' font-normal text-3xl flex items-center justify-start gap-2 text-white '><img src={logo} alt="" />Restaurant</Link>
            
          </div>
          <div className=' md:hidden' onClick={ ()=>setIsOpen(!isOpen)}>
            <span> { isOpen && isOpen ? <IoMdClose className=' text-white'  size={32} />:<FaBars size={32} className=' text-white' /> }</span>

          </div>
          <ul className={`md:flex   md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[1] left-0 w-full lg:bg-transparent bg-[#1f1e1d]  gap-6 md:w-auto md:pl-0 pl-8 transition-all duration-500 ease-in ${isOpen ? 'top-32 bg-[] ':'top-[-490px]'}`}>
       {links}
       <NavLink to={'/'} className=" lg:float-end float-start lg:ml-2 mt-2 text-base font-bold text-[#0A1425] bg-[#FEBF00] py-3  px-6">Book a table</NavLink>
          </ul>


        </nav>

        </Container>
      </div>
    </div>
  )
}

export default Navbar
