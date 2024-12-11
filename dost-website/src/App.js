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

const App = () => {
  const navLinks = [
    { path: '/', text: 'Home' },
    { path: '/medicare', text: 'Medicare' },
    { path: '/blog', text: 'Blog' },
    { path: '/signup', text: 'Sign Up' }
  ];

  const footerLinks = [
    { path: '/about', text: 'About' },
    { path: '/projects', text: 'Projects' },
    { path: '/services', text: 'Services' },
    { path: '/clients', text: 'Clients' },
    { path: '/blog', text: 'Blog' },
    { path: '/contact', text: 'Contact' }
  ];

  const categories = [
    { name: 'Cat', imgUrl: 'https://example.com/cat.jpg' },
    { name: 'Dog', imgUrl: 'https://example.com/dog.jpg' },
    { name: 'Fish', imgUrl: 'https://example.com/fish.jpg' },
    { name: 'Bird', imgUrl: 'https://example.com/bird.jpg' },
    { name: 'Rabbit', imgUrl: 'https://example.com/rabbit.jpg' }
  ];

  const reviews = [
    { img: 'https://example.com/review1.jpg', text: "Great products and service!" },
    { img: 'https://example.com/review2.jpg', text: "My pet loves the food!" }
  ];

  return (
    <Router>
      <div className="app">
        <Header navLinks={navLinks} />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner 
                    title="A PET-FIRST APPROACH TO WELLNESS" 
                    description="For More News"
                    linkText="Learn More"
                    linkUrl="https://globalnews.ca/tag/pet-wellness/"
                    imgSrc="./Dog landing Page-02.jpg"
                  />
                  <Categories categories={categories} />
                  <Services />
                  <Reviews reviews={reviews} />
                  <Subscribe placeholderText="Enter your email" buttonText="Subscribe" />
                </>
              }
            />
          </Routes>
        </main>
        <Footer footerLinks={footerLinks} />
      </div>
    </Router>
  );
};

export default App;
