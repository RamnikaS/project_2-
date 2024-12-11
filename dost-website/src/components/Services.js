import React, { useState } from 'react';

const Services = () => {
  const [showPharmacy, setShowPharmacy] = useState(false);
  const [showGrooming, setShowGrooming] = useState(false);

  return (
    <section>
      <h2>Our Services</h2>
      <div>
        <div>
          <img
            src="https://helvik.s3.amazonaws.com/queen-creek/images/pet-pharmacy.jpg"
            alt="Pharmacy Icon"
          />
          <h3>Pharmacy</h3>
          <p>
            Providing essential medications to keep your pet healthy and safe
            from allergies.<br /> ADDITIONAL HELP
          </p>
          <button onClick={() => setShowPharmacy(!showPharmacy)}>
            {showPharmacy ? 'Hide Details' : 'Show Details'}
          </button>
          {showPharmacy && (
            <p>Learn more about the pharmacy services we offer...</p>
          )}
          <a href="https://thepetpharmacist.ca/">Explore</a>
        </div>
        <div>
          <img
            src="https://nowtoronto.com/wp-content/uploads/2021/06/Dog-getting-groomed.jpg"
            alt="Grooming Icon"
          />
          <h3>Breed-specific Grooming</h3>
          <p>
            Custom haircuts tailored to your pet's breed to prevent skin issues
            and matting.
          </p>
          <button onClick={() => setShowGrooming(!showGrooming)}>
            {showGrooming ? 'Hide Details' : 'Show Details'}
          </button>
          {showGrooming && (
            <p>Explore grooming options for your pet's breed...</p>
          )}
          <a href="https://www.jklgrooming.com/dog_grooming_charts">Explore</a>
        </div>
      </div>
    </section>
  );
};

export default Services;

