import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
          📖 "Books are more than ink on paper; they are portals to other worlds, conversations with minds long gone, and a sanctuary for the curious soul.
They whisper truths the world forgets, hold wisdom in silence, and bring comfort in solitude.
With every page turned, a new universe unfolds — one that challenges, transforms, and heals.
Books teach us empathy by letting us live lives we’ve never known,
and courage by showing us characters who faced the dark and kept walking.
They are timeless mentors, patient teachers, and loyal companions.
Whether cradled in a child’s hands or worn by a scholar’s years,
each book carries the power to ignite imagination and preserve history.
In the quiet company of books, we find the loudest echoes of truth.
To read is not just to learn — it is to live more fully."
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;