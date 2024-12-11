import React, { useState } from 'react';

const Categories = ({ categories }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <section>
      <h3>Explore {categories.length}+ Pet Categories</h3>
      <div style={{ display: isVisible ? 'block' : 'none' }}>
        {categories.map((category, index) => (
          <img key={index} src={category.image} alt={category.name} />
        ))}
      </div>
      <div>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? 'Hide Categories' : 'Show Categories'}
        </button>
      </div>
    </section>
  );
};

export default Categories;
