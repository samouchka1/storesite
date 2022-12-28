import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {
  AppBar,
  Container,
  Toolbar, 
  Typography,
  List,
  ListItem,
  // Link,
  Box,
  Tooltip,
  Button,
  Popover,
} from '@mui/material';
// import ModalMenu from './ModalMenu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import '../App.css';
import { cartItems, total } from '../data/cartItems';
import { Fade } from "react-awesome-reveal";

//===STYLES===

const navBar = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems:'center',
  justifyContent: 'space-between',
  height: 'auto',
  backgroundColor : 'primary.main', //background color
  border: 'solid 1px #b2b2b2', //border color
  width: '100%',
  margin: '1rem 0',
  padding: {
    md: '0 5rem 0 0',
    sm: '0 1.5rem 0 0',
    xs: '0 1rem 0 0'
  },
  boxShadow: 'none'
}

const navContent = {
  display: {
    md: 'flex',
    xs: 'none'
  }
}

const navLinks = {
  textDecoration: 'none',
  color: 'text.primary', //color
  fontSize : '1.15rem',
  fontFamily: 'DM Serif Display',
  margin: {
    md: '0 .5rem',
    sm: '0',
    xs: '0'
  },
}

const NavBar = ({DarkMode, setNavigation, mode, setShoppingCart, qty, setQty}) => {  

  const pages = [
    {
      name: 'What\'s\u00A0New',
      path: '#grid',
      method: () => setNavigation('new')
    },
    {
      name: 'Men',
      path: '#grid',
      method: () => setNavigation('men')
    },
    {
      name: 'Women',
      path: '#grid',
      method: () => setNavigation('women')
    },
    {
      name: 'Casual',
      path: '#grid',
      method: () => setNavigation('casual')
    },
    {
      name: 'Outdoor',
      path: '#grid',
      method: () => setNavigation('outdoor')
    },
    {
      name: 'Athletic',
      path: '#grid',
      method: () => setNavigation('athletic')
    },
    {
      name: 'Seasonal\u00A0Styles',
      path: '#seasonal',
      method: null
    }
  ]
  

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl2, setAnchorEl2] = useState(null);
  const openNav = Boolean(anchorEl2);
  const handleClickNav = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleCloseNav = () => {
    setAnchorEl2(null);
  };

  const handleAdd = () => {
    setQty(qty + 1)
};

const handleRemove = () => {
    setQty(qty - 1)
};

  return (
  <Container maxWidth={false} id="#top">
      <AppBar sx={navBar}>
        <Toolbar disableGutters>

          {/* ==== NAVIGATION ON MOBILE === */}
          <Button 
            sx={{color: 'text.primary', display:{md: 'none', xs: 'block'}}}
            onClick={handleClickNav}
          >
            {openNav ? <ClearIcon sx={{color: 'text.primary'}} /> : <MenuIcon sx={{color: 'text.primary'}} />}
          </Button>
          <Popover
            anchorEl={anchorEl2}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}}
            open={openNav}
            onClose={handleCloseNav}
          >
            <Box sx={{ padding: '1.75rem'}}>
                {pages.map((page) => (    //hashlinks
                    <ListItem key={page} sx={{padding: '1rem 0'}}>
                      <Fade cascade delay={50} damping={0.15}>
                        <Box>
                            <HashLink
                                style={{textDecoration: 'none'}}
                                scroll={(element) => element.scrollIntoView({ behavior: 'smooth' })} //scroll to view
                                to={page.path}
                                onClick={page.method}
                            >
                              <Typography 
                                className="hover-underline-animation" //optional on mobile
                                sx={{
                                  color: 'text.primary',
                                  fontSize: '1.1rem',
                                  fontFamily: 'DM Serif Display'
                                }}
                                onClick={handleCloseNav}
                              >
                                  {page.name}
                              </Typography>
                            </HashLink>
                        </Box>
                      </Fade>
                    </ListItem>
                ))}
            </Box>
          </Popover>
        {/* === END  NAVIGATION ON MOBILE === */}

          <List sx={navContent}>

            {pages.map((page) => (    //hashlinks
                <ListItem key={page} sx={{padding: '0 .55rem'}}>
                  <Box>
                      <HashLink
                        style={{textDecoration: 'none'}}
                        scroll={(element) => element.scrollIntoView({ behavior: 'smooth' })} //scroll to view
                        to={page.path}
                        onClick={page.method}
                      >
                        <Typography sx={navLinks} className="hover-underline-animation">
                          {page.name}
                        </Typography>
                      </HashLink>
                  </Box>
                </ListItem>
              ))}
          </List>
        </Toolbar>

        <Box component="div" sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <Button 
            sx={{color: 'text.primary'}}
            onClick={handleClick}
          >
            <Tooltip title="Shopping Cart">
              <ShoppingCartIcon sx={{color: 'text.primary', fontSize: { md: '2rem', xs: '1.7rem'}, caretColor: 'transparent'}} />
            </Tooltip>
          </Button>
          
            <Popover
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}}
              open={open}
              onClose={handleClose}
            >
              <List>
                {cartItems.map((item) => (
                  <ListItem key={item} sx={{margin: '.5rem 0'}}>
                    <Box
                      component="img"
                      src={process.env.PUBLIC_URL + '/images/products/' + item.image}
                      height="60px"
                      width="auto"
                    />
                    <Box component="div" sx={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                      <Typography sx={{fontWeight: 'bold', width: '200px'}}>{item.name}</Typography>
                      <Typography>{item.color}</Typography>
                      <Typography>${item.price}</Typography>
                      <Typography>{qty}</Typography>
                      
                      <Box sx={{display: 'flex', margin: '0 auto'}}>

                          <Button variant="outlined"
                              sx={{color: 'text.primary'}}
                              onClick={handleAdd}
                          >
                              <AddIcon />
                          </Button> 

                          <Button variant="outlined"
                              sx={{color: 'text.primary'}}
                              onClick={handleRemove}
                          >
                              <RemoveIcon />
                          </Button>
                      </Box>
                    </Box>
                  </ListItem>
                ))}
              </List>
              
              <Box component="div" sx={{textAlign: 'center', borderTop: 'solid 1px #808080'}}>
                <Typography sx={{fontWeight: '600'}}>Subtotal: ${total}</Typography>
                <Button sx={{color: 'text.primary'}}>  
                  <HashLink
                    style={{textDecoration: 'none'}}
                    scroll={(element) => element.scrollIntoView({ behavior: 'smooth' })} //scroll to view
                    to='#cart'
                    onClick={()=> { handleClose(); setShoppingCart(true)}}
                  >
                    <Typography sx={{color: 'text.primary'}}>Check out</Typography>
                  </HashLink>
                </Button>
              </Box>

            </Popover>
          
          <Typography sx={{fontFamily: 'DM Serif Display', fontSize: { md: '1.15rem', xs:'1rem'}, margin: '0 1rem 0 0'}}>
            StoreSite
          </Typography>

          <Tooltip title="StoreSite">
            <a href="#abc" sx={{textDecoration: 'none', color: `${ mode === 'light' ? '#000000de' : '#fff'}`}}>
              <Box 
                className="App-logo"
                component="img"
                height="2.5rem"
                src={process.env.PUBLIC_URL + '/images/modern-logo.png'} 
                alt="StoreSite Logo"
              />
            </a>
          </Tooltip>
          
          {/* <DarkMode /> */}
        </Box>
      </AppBar>
    </Container>
  );
};

export default NavBar;