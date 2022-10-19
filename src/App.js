import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import GridLayout from './components/GridLayout';
import CarouselSwiper from './components/CarouselSwiper';
import CarouselImg from './components/Carousel';
import Footer from './components/Footer';
import ThreeColumns from './components/ThreeColumns';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CarouselSwiper />
      <CarouselImg />
      <GridLayout />
      <ThreeColumns />
      <Footer />
    </div>
  );
}

export default App;
