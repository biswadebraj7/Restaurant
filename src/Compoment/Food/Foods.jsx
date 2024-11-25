import { useEffect, useState } from "react";
import NextArraw from "../Arraw/NextArraw";
import PreArraw from "../Arraw/PreArraw";
import Container from "../share/Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import item1 from '../../assets/images/foods/food.png'
const Foods = () => {
  const [item, setItem]= useState([]);

  var settings = {
    dots: false,
   
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArraw />,
    prevArrow: <PreArraw />,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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
  useEffect(()=>{
    fetch('Items.json')
  .then((res)=>res.json())
  .then((data)=> setItem(data))

  },[])

 
  return (
    <div className=' w-full py-28 mx-auto  relative bg-[#FBF7F2]'>
      <img src={item1} alt="" className=" absolute left-0 top-56 hidden lg:block" />
      <div>
        <Container>
          <div>
          <div className='  flex items-center justify-start gap-2  '>
            <span className=" w-[10px] h-[10px] bg-[#BD1F17]"></span> <p className="font-bold text-xl text-[#BD1F17]">Crispy, Every Bite Taste</p>
          </div>
          <h1 className=" text-[#181818] font-bold text-6xl py-3 uppercase">POPULAR FOOD ITEMS</h1>

          </div>
          
          <Slider {...settings} className="  py-12 w-full ">
          {
      item.map((post)=> <article key={ post.key} className=" " >
        <div className=" rounded-md first:ml-0 mx-4   p-6 min-h-full bg-[#FFFFFF]  shadow-md">
        <img src={post.image} className=" mx-auto" alt="" />
        <div className=" mx-auto border-4 bg-[#BD1F17] w-[57px] my-2 border-[#BD1F17]">

        </div>
        <p className=" font-bold text-2xl text-center text-[#0A1425]">{post.name}</p>
        <p className=" font-normal text-center text-[#0A1425] text-base py-2">{post.para}</p>
        </div>
      </article>)
         
     }
     
          </Slider>
            
        </Container>
     
      </div>
      
    </div>
  )
}

export default Foods
