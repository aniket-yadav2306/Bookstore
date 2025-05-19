import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";




import Cards from "./Cards";

function Freebook({item}) {
  const[book,setBook]=useState([])
  useEffect(()=>{
   const getBook=async()=>{
    try {
     const res = await axios.get("https://bookstore-in2o.onrender.com/book")
     console.log(res.data);
     setBook(res.data.filter((data) => data.category === "Free"))
     
    } catch (error) {
      console.log(error);
      
    }
   }
   getBook();
  },[])
  
   var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
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
        },
      },
    ],
};
 

  return(

  <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
       <div>
         <h1 className="font-semibold text-xl pb-2">Free Offered Courses 
        </h1>
        <p>
    "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."
</p>
       </div>
    
    <div>
      <Slider {...settings}>
  {book.map((item) => (
    <div key={item.id} className="px-3"> {/* Spacing between slides */}
      <Cards item={item} />
    </div>
  ))}
</Slider>

    </div>
    </div>
  </>
  )
}

export default Freebook;
