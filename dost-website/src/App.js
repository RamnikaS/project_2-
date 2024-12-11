import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Categories from './components/Categories';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
               <Banner 
  title="A PET-FIRST APPROACH TO WELLNESS FOR MORE NEWS"
  subtitle="Available in select states"
  linkText="Learn More"
  linkHref="https://globalnews.ca/tag/pet-wellness/" 
/>

                <Categories />
                <Services />
                <Reviews />
                <Subscribe />
              </>
            }
          />
          {/* <Route path="/categories" element={<Categories />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/subscribe" element={<Subscribe />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);
const categories = [
  { name: 'Cat', image: 'https://encrypted-tbn0.gstatic.com/.../cat.jpg' },
  { name: 'Dog', image: 'https://cdn.pixabay.com/.../dog.jpg' },
  { name: 'Fish', image: 'https://static.scientificamerican.com/.../fish.jpg' },
  { name: 'Bird', image: 'https://www.cdc.gov/.../bird.jpg' },
  { name: 'Rabbit', image: 'https://images.pexels.com/.../rabbit.jpg' },
];

// Use in App.js
<Categories categories={categories} />
const reviews = [
  { image: 'https://encrypted-tbn0.gstatic.com/...', text: 'Excellent advice on pet food!' },
  { image: 'https://cdn.pixabay.com/...', text: 'Great grooming services!' },
];

// Use in App.js
<Reviews reviews={reviews} />

export default App;
