import React, { useState } from 'react';

const Categories = ({ categories }) => {
  // useState hook to manage the visibility of the images
  const [showCategories, setShowCategories] = useState(false);

  // Toggle the state to show or hide categories
  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <section>
      <h3>Explore 45+ Pet Categories</h3>
      {/* Conditionally render the images based on showCategories state */}
      <div>
        {showCategories && (
          <>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJouKzHN5Hbvgem0D19pI-6qCfjWkDZ7Qc6A&s"
              alt="Cat"
            />
            <img
              src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg"
              alt="Dog"
            />
            <img
              src="https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=1200"
              alt="Fish"
            />
            <img
              src="https://www.cdc.gov/healthy-pets/media/images/2024/04/GettyImages-598175960-cute-dog-headshot.jpg"
              alt="Bird"
            />
            <img
              src="https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?cs=srgb&dl=pexels-pixabay-160846.jpg&fm=jpg"
              alt="Rabbit"
            />
          </>
        )}
      </div>
      <div>
        {/* Button to toggle the showCategories state */}
        <button onClick={toggleCategories}>
          {showCategories ? 'Hide Categories' : 'Show Categories'}
        </button>
      </div>
    </section>
  );
};

export default Categories;

