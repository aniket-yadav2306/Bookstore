import React from "react";
import "./About.css";
import backgroundImg from "../assets/books-bg.jpg.jpg"; // make sure path is correct

const About = () => {
  return (
    <section
      className="about-section"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="about-text-container">
        <h1>
          About <span>bookStore</span>
        </h1>
        <p>
          Welcome to <strong>bookStore</strong> – your digital companion for endless reading
          adventures. Whether you're a casual reader or a book enthusiast, we offer both{" "}
          <strong>free books</strong> and <strong>premium content</strong> to cater to all your
          reading needs.
        </p>
        <p>
          Our platform empowers readers to explore vast genres, connect with book lovers, and stay
          inspired by curated recommendations. With our subscription model, gain access to exclusive
          titles, author interviews, and early releases.
        </p>
        <p>Join our growing community and start your reading journey with us today!</p>
      </div>
    </section>
  );
};

export default About;
