import React, { useState } from 'react';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const reviews = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa94mTNTVWxgkIpAv6qFWni_WOmGr4UYZfPw&s",
      text: "The staff at Pet-First provided excellent advice on pet food. Highly recommended!"
    },
    {
      img: "https://example.com/review2.jpg",
      text: "My dog loves the products here, and the service is always amazing!"
    },
    {
      img: "https://example.com/review3.jpg",
      text: "Great service, fast delivery, and my cat loves the food!"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);  // Loop back to first review
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);  // Loop back to last review
  };

  return (
    <section>
      <div>
        <img src={reviews[currentReview].img} alt="Customer" />
        <h3>Customer Reviews</h3>
        <p>{reviews[currentReview].text}</p>
        <div>
          <button onClick={prevReview}>&lt;</button>
          <button onClick={nextReview}>&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;


