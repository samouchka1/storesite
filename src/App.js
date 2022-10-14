import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import GridLayout from './components/GridLayout';
import ImageCarousel from './components/Carousel';
// import CarouselNew from './components/CarouselNew';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <GridLayout />
      <ImageCarousel />
      {/* <CarouselNew /> */}
      <Footer />
    </div>
  );
}

export default App;
