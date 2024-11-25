import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from '../share/Container';
import item from "../../assets/images/foods/food1.png"
import cutleft from "../../assets/images/icon/12.png"
import cutright from "../../assets/images/icon/221.png"
import NextArraw from "../Arraw/NextArraw";
import PreArraw from "../Arraw/PreArraw";
import icon from "../../assets/images/icon/icon.svg"


const Customer = () => {
  const [isdata, setData]= useState([])
  fetch("customer.json")
  .then((res)=>res.json())
  .then((data)=>setData(data))
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArraw />,
    prevArrow: <PreArraw />,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className=' w-full py-28 mx-auto relative bg-white'>
            <img src={cutright} alt="" className=" absolute left-0 hidden lg:block" />
            <img src={cutleft} alt="" className=" absolute right-0  bottom-4 hidden lg:block" />
     

      <div>
        <Container>
        <div className=" w-full">
          <div className='  flex items-center justify-start gap-2   pb-6'>
            <span className=" w-[10px] h-[10px] bg-[#BD1F17]"></span> <p className="font-bold text-xl text-[#BD1F17]">Crispy, Every Bite Taste</p>
          </div>
          <h4 className=" max-w-6xl text-[#181818] font-bold uppercase text-[60px] leading-[60px]">What Some of my Customers Say</h4>


          </div>
         
        <div className="slider-container ">
      <Slider {...settings} className="pt-24">
      {
      isdata.map((post)=> <article key={post.id} className=" w-full  ">
      <div className="w-full  grid lg:grid-cols-2 grid-cols-1 items-center p-0   ">
   <div className="p-20 bg-[#FEBF00] w-full relative">
   <img src={icon} alt="" className=" absolute left-0 bottom-8" />
      <span className=" font-normal text-[#0A1425] text-6xl">“</span>
      <p  className=" font-normal lg:text-xl sm:text-lg text-[#0A1425]">{post.para}</p>
      <div className=" flex justify-between items-center pt-28">
        <div>
          <span className=" font-bold text-lg text-[#0A1425]">{post.name}</span>
          <p className=" font-normal text-sm text-[#333333]">{post.role}</p>
        </div>
        <img src={post.profile} alt="" />
      </div>
      <div className="mt-4  flex justify-center items-center">
      <div className=" border-2 border-[#0A1425] w-3/4 ">
      </div>
      <div className=" border-4 w-3/12 border-[#BD1F17]">

      </div>
      </div>
      
   </div>
     
      <div>
      <iframe className="w-full mx-auto " height={"515px"} src="https://www.youtube.com/embed/NFl9Ltp5FeY?si=qPd1C-pGogaW6zkH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      </div>
      </article>)
      
      }
  
       
      </Slider>
    </div>

        </Container>
      </div>
      
    </div>
  )
}

export default Customer
