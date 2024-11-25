import React from 'react'
import Container from '../Compoment/share/Container'
import { MdOutlineWatchLater } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  return (
   
       <footer  id='footer' className='py-28 mx-auto min-h-screen'>
       <div className=' '>
            <Container>
              <div className=' mx-auto'>
                <h1 className=' font-bold lg:text-4xl text-3xl text-center text-white uppercase'>We ready to have you the best dining experiences</h1>
              </div>
             <article className=' py-36 grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 mx-auto items-center' >
              
                <nav  className=' '>
                <span className=' text-center mx-auto flex items-center justify-center pb-6'><MdOutlineWatchLater size={24} className='text-center text-[#FEBF00]' /> </span>
                  <p className=' text-center font-bold  text-2xl text-white'>Opening hours</p>
                  <p className=' py-6 text-center font-normal  text-base text-white'>Monday - Sunday <br />
                  9:00 AM to 11:30 PM</p>
                  </nav>
                  <nav  className=''>
                  <span className=' text-center mx-auto flex items-center justify-center pb-6'><FiPhoneCall size={24} className='text-center text-[#FEBF00]' /> </span>
                  <p className=' text-center font-bold  text-2xl text-white'>LET'S TALK</p>
                  <p className=' py-6 text-center font-normal  text-base text-white'>
                  Phone: 1-800-222-4545 <br />Fax: 1-800-222-4545
                  </p>
                  </nav>
                  <nav  className=' '>
                  <span className=' text-center mx-auto flex items-center justify-center pb-6'><MdOutlineEmail size={24} className='text-center text-[#FEBF00]' /> </span>
                  <p className=' text-center font-bold  text-2xl text-white'>BOOK A TABLE</p>
                  <p className='py-6 text-center font-normal  text-base text-white'>
                  Email: demo@website.com <br /> Support: support@website.com
                  </p>
                  
                  </nav>
                  <nav  className=' '>
                  <span className=' text-center mx-auto flex items-center justify-center pb-6'><SlLocationPin size={24} className='text-center text-[#FEBF00]' /> </span>
                  <p className=' text-center font-bold  text-2xl text-white'>Our Address</p>
                  <p className=' py-6 text-center font-normal  text-base text-white'>
                  123 Stree New York City , United <br /> States Of America.
                  </p>
                  </nav>
                 

              

             </article>

             <div className=' mx-auto'>
              <ul className=' flex justify-center gap-4 items-center pb-6'>
                <li className=' p-4  border-2 border-[#E5E7EB] rounded-full'> 
                  <Link to={'/'}>
                
                <FaFacebookF size={24} className=' text-white '  />

                </Link > </li>
                <li className=' p-4  border-2 border-[#E5E7EB] rounded-full'>
                  <Link to={'/'}>
                
                <FaXTwitter size={24} className=' text-white ' />
                </Link> </li>
                <li className=' p-4  border-2 border-[#E5E7EB] rounded-full'>
                  <Link to={'/'}>
                <FaInstagramSquare size={24} className=' text-white ' />

                </Link> </li>
                <li className=' p-4  border-2 border-[#E5E7EB] rounded-full'>
                  <Link to={'/'}>
                <FaLinkedin size={24} className=' text-white  ' />

                </Link> </li>
                
              </ul>
              <small className=' flex justify-center items-center mx-auto text-white font-normal text-base text-center py-6'>© 2023 All Rights Reserved </small>

             </div>
                
            </Container>
        </div>
       </footer>

        
      
   
  )
}

export default Footer
