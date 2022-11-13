import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParallaxProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
        <Footer />
      </Router>
    </ParallaxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
