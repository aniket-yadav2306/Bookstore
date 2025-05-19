import React, { useEffect, useState } from 'react';

import Cards from './Cards';
import axios from "axios";
import { Link } from 'react-router-dom';

function Course() {
  const[book,setBook]=useState([])
  useEffect(()=>{
   const getBook=async()=>{
    try {
     const res = await axios.get("http://localhost:4001/book")
     console.log(res.data);
     setBook(res.data)
     
    } catch (error) {
      console.log(error);
      
    }
   }
   getBook();
  },[])
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">

        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl font-semibold md:text-4xl'>
            we're delighted to have you <span className='text-pink-500'>here! :)</span>
          </h1>
          <p className='mt-12'>
            <strong>Title:</strong> The Switch<br />
            Lena flipped the dusty switch in the attic.<br />
            Nothing happened.<br />
            But far away, a forgotten lighthouse blinked to life — and a lost ship found its way home.
          </p>
         <Link to="/">
          <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
            Back
          </button>
         </Link>
        </div>

        {/* ✅ Corrected Grid Layout for Cards */}
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>

      </div>
    </>
  );
}

export default Course;
