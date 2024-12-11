import React, { useState } from 'react';

const Reviews = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((currentIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex(
      (currentIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <section>
      <div>
        <img src={reviews[currentIndex].image} alt="Customer" />
        <h3>Customer Reviews</h3>
        <p>{reviews[currentIndex].text}</p>
        <div>
          <button onClick={prevReview}>&lt;</button>
          <button onClick={nextReview}>&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
