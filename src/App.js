import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import GridLayout from './components/GridLayout';
import CarouselImg from './components/Carousel';
import CarouselHero from './components/CarouselHero';
import Footer from './components/Footer';
import ThreeColumns from './components/ThreeColumns';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CarouselHero />
      <CarouselImg />
      <GridLayout />
      <ThreeColumns />
      <Footer />
    </div>
  );
}

export default App;
