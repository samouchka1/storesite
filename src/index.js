import React, { 
  // useState 
} from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { 
  grey, 
  // blue 
} from '@mui/material/colors';
// import CssBaseline from '@mui/material/CssBaseline';
import { ParallaxProvider } from 'react-scroll-parallax';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer';

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[100],
    },
    secondary: {
      main: '#11cb5f',
    },
    common: {
      black: grey[800]
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
          <Footer />
        </Router>
      </ParallaxProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
