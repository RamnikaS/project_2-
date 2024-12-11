import React from 'react';

const Banner = ({title,subtitle,linkText,linkHref}) => (
  <section >
    <div>
      <h2>{subtitle}</h2>
      <h1>{title}  </h1>
      <a href="https://globalnews.ca/tag/pet-wellness/" >
        Learn More
      </a>
    </div>
    <img src="./Dog landing Page-02.jpg" alt="Dog Jasper"/>
  </section>
);

export default Banner;
