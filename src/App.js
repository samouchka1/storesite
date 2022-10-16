import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import GridLayout from './components/GridLayout';
import CarouselImg from './components/Carousel';
import CarouselHero from './components/CarouselHero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CarouselHero />
      <GridLayout />
      <CarouselImg />
      <Footer />
    </div>
  );
}

export default App;
