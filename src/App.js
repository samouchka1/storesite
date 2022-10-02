import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import GridLayout from './components/GridLayout';
import ImageCarousel from './components/Carousel';
import Footer from './components/Footer.js';

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
