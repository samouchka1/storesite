import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import GridCardLayout from './components/GridCardLayout';
import CarouselSwiper from './components/CarouselSwiper';
import ThreeColumns from './components/ThreeColumns';
import Parallax from './components/Parallax';
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer';
import {
  ThemeProvider,
  // useTheme,
  createTheme,
} from '@mui/material/styles';
import { IconButton, Tooltip } from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';

// import { cartItems } from './data/cartItems';


const ColorModeContext = React.createContext({
  toggleColorMode: () => {} 
});


const App = () => {

  const [mode, setMode] = useState('light');

  const [navigation, setNavigation] = useState('new');

  const [shoppingCart, setShoppingCart] = useState(false)

  const [qty, setQty] = useState(1);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
          ? {
              // palette values for light mode
              primary: {
                main: '#eaeaea',
              }
            }
          : {
              // palette values for dark mode
              primary: {
                main: '#071041dc',
              }
            })
        },
      }),
    [mode],
  );

  //Body background color on DarkMode
  mode === 'light' ? document.body.style.backgroundColor = '#fff' : document.body.style.backgroundColor = '#000';

  const DarkMode = () => {
    return (
      <Tooltip title="set Dark / Light mode">
        <IconButton 
          onClick={colorMode.toggleColorMode} 
          color="text.primary"
        >
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Tooltip>
    )
  }



  return (
    <div className="App">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Navbar DarkMode={DarkMode} setNavigation={setNavigation} setShoppingCart={setShoppingCart} mode={mode} qty={qty} setQty={setQty} />
          <CarouselSwiper />
          <GridCardLayout navigation={navigation}/>
          <Parallax />
          <ThreeColumns />
          <ShoppingCart shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} qty={qty} setQty={setQty} mode={mode}/>
          <Footer />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
