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
  const [categoriesData] = React.useState([
    { imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJouKzHN5Hbvgem0D19pI-6qCfjWkDZ7Qc6A&s", altText: "Cat" },
    { imageUrl: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg", altText: "Dog" },
    { imageUrl: "https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=1200", altText: "Fish" },
    { imageUrl: "https://www.cdc.gov/healthy-pets/media/images/2024/04/GettyImages-598175960-cute-dog-headshot.jpg", altText: "Bird" },
    { imageUrl: "https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?cs=srgb&dl=pexels-pixabay-160846.jpg&fm=jpg", altText: "Rabbit" }
  ]);

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <Categories categories={categoriesData} />
                  <Services />
                  <Reviews />
                  <Subscribe />
                </>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;