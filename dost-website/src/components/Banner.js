import React from 'react';

const Banner = ({ title, description, linkText, linkUrl, imgSrc }) => (
  <section>
    <div>
      <h2>{title}</h2>
      <h1>
        {description}
      </h1>
      <a href={linkUrl}>{linkText}</a>
    </div>
    <img src="/Dog landing Page-02.jpg"
 alt="Dog Jasper" />
  </section>
);

export default Banner;

