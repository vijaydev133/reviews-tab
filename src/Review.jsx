import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  function handlePrev() {
    setIndex((index) => (index === 0 ? people.length - 1 : index - 1));
  }

  function handleNext() {
    setIndex((index) => (index === people.length - 1 ? 0 : index + 1));
  }

  function handleRandomReview() {
    let max = people.length - 1;
    let min = 0;
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setIndex(randomNumber);
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={handlePrev} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={handleNext} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={handleRandomReview} className="random-btn">
        surprise me
      </button>
    </article>
  );
};

export default Review;
