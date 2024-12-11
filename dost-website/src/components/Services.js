import React from 'react';

const Services = () => (
  <section >
    <h2 >Our Services</h2>
    <div>
      <div >
        <img
          src="https://helvik.s3.amazonaws.com/queen-creek/images/pet-pharmacy.jpg"
          alt="Pharmacy Icon"
        />
        <h3>Pharmacy</h3>
        <p>
          Providing essential medications to keep your pet healthy and safe
          from allergies.<br /> ADDITIONAL HELP
        </p>
        <a href="https://thepetpharmacist.ca/">
          Explore
        </a>
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
        <a href="https://www.jklgrooming.com/dog_grooming_charts" >
          Explore
        </a>
      </div>
    </div>
  </section>
);

export default Services;
