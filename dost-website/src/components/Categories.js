import React from 'react';

const Categories = ({ categories }) => (
  <section>
    <h3>Explore 45+ Pet Categories</h3>
    <div>
      {categories.map((category, index) => (
        <img
          key={index}
          src={category.imageUrl}
          alt={category.altText}
        />
      ))}
    </div>
    <div>
      <button>Show/Hide Categories</button>
    </div>
  </section>
);

export default Categories;
