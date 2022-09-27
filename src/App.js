import React from 'react';
import './App.css';
import Navbar from './Navbar';
import GridLayout from './GridLayout';
import ImageCarousel from './Carousel';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <GridLayout />
      <ImageCarousel />
      <Footer />
    </div>
  );
}

export default App;
