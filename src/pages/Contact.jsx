import React from 'react'
import Container from '../Compoment/share/Container'
import { Link } from 'react-router-dom'
import Button from '../Compoment/share/Button'

const Contact = () => {
  return (
    <div id='book' className='py-28'>
      <div>
        <Container>
          <article>
            <li className=' list-none'> <span className='  px-2  bg-[#BD1F17]'></span> <Link to={'/'} className=' pl-3 font-bold text-xl text-[#BD1F17]'>Book Now</Link> </li>
            <h1 className=' font-bold text-6xl text-white text-left py-4'>Book Your Table</h1>
            <p className=' max-w-md font-normal text-base text-[#F7F8F9;]'>
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
            </p>

            <form action="" className=' py-4 max-w-md'>
            <div className=' flex justify-start gap-4 items-center mt-4'>
            <input
          type="text"
          placeholder="Your Name * "
          className="input input-bordered input-ghost w-full max-w-md font-normal text-sm text-[#E5E7EB]" />
   <input
          type="text"
          placeholder="Your Email * "
          className="input input-bordered input-ghost w-full max-w-md font-normal text-sm text-[#E5E7EB]" />
   
            </div>
            <div className=' flex justify-start gap-4 items-center mt-4'>
            
   <input
          type="date"
          placeholder="Reservation DateYour Email * "
          className="input input-bordered input-ghost w-full max-w-md font-normal text-sm text-[#E5E7EB]" />
          <input
          type="number"
          placeholder="Total People "
          className="input input-bordered input-ghost w-full max-w-md font-normal text-sm text-[#E5E7EB]" />
   
            </div>
            <div className=' mt-4 form-control w-full'>
            <textarea
  placeholder="Message"
  className="textarea font-normal text-sm text-white textarea-bordered textarea-ghost textarea-lg w-full max-w-lg"></textarea>
            </div>
            <Button title={"Book Now"}></Button>
                
            </form>
          </article>


        </Container>
        
      </div>
      
    </div>
  )
}

export default Contact
