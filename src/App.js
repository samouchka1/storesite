import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import GridLayout from './components/GridLayout';
// import CarouselNuka from './components/CarouselNuka';
import CarouselSwiper from './components/CarouselSwiper';
import CarouselImg from './components/Carousel';
// import CarouselHero from './components/CarouselHero';
import Footer from './components/Footer';
import ThreeColumns from './components/ThreeColumns';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CarouselSwiper />
      {/* <CarouselNuka /> */}
      {/* <CarouselHero /> */}
      <CarouselImg />
      <GridLayout />
      <ThreeColumns />
      <Footer />
    </div>
  );
}

export default App;
