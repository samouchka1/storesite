import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import GridCardLayout from './components/GridCardLayout';
import CarouselSwiper from './components/CarouselSwiper';
import Footer from './components/Footer';
import ThreeColumns from './components/ThreeColumns';
import Parallax from './components/Parallax';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CarouselSwiper />
      <GridCardLayout />
      <Parallax />
      <ThreeColumns />
      <Footer />
    </div>
  );
}

export default App;
