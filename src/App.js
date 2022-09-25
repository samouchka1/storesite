import React from 'react';
import './App.css';
import Navbar from './Navbar';
import GridLayout from './GridLayout';
// import Accordion from './Accordion';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <GridLayout />
      {/* <Accordion /> */}
      <Footer />
    </div>
  );
}

export default App;
