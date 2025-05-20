import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Cards from "./Cards";

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const filtered = res.data.filter((item) => item.category === "Free");
        setBook(filtered);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    getBook();
  }, []);

  const settings = {
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
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-20 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Free Offered Courses</h1>
        <p className="text-gray-600 text-base leading-relaxed">
          "A reader lives a thousand lives before he dies. The man who never reads lives only one."
          <br />
          <span className="text-sm text-gray-500 italic">— George R.R. Martin</span>
        </p>
      </div>

      <Slider {...settings}>
        {book.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
}

export default Freebook;
