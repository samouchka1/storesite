import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
import { pages } from '../data/pages';
import ModalMenu from './ModalMenu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../App.css'; //for logo spin, underline effect

const cartItems = [
  {
    id: 1,
    name: 'Men\'s casual shirt',
    color: 'Blue',
    price: 19.99,
    quantity: 1,
    thumbnail: 'cart-mens-shirt.jpg'
  },
  {
    id: 2,
    name: 'Women\'s outdoor pants',
    color: 'Green',
    price: 24.99,
    quantity: 2,
    thumbnail: 'cart-womens-pants.jpg'
  }
]


//===STYLES===

const navBar = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems:'center',
  justifyContent: 'space-between',
  height: 'auto',
  backgroundColor : '#f4f4f4', //background color
  border: 'solid 1px #b2b2b2',
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
  color: '#171717', //color
  fontSize : '1.15rem',
  margin: {
    md: '0 .5rem',
    sm: '0',
    xs: '0'
  },
}

const hashLinks = pages.filter(hash => hash.path.includes('#')); //filter hashlinks
const links = pages.filter(link => link.path.includes('https'));

const NavBar = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //SHOPPING CART ROUTE
  let history = useNavigate();
  const handleRoute = () => history.push('/cart'); //not workign

  //SHOPPING CART
  const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
  <Container maxWidth={false}>
      <AppBar sx={navBar} id="top">
        <Toolbar disableGutters>

          <ModalMenu />  {/*<<<  MODAL MENU */}

          <List sx={navContent}>

            {hashLinks.map((page) => (    //hashlinks
                <ListItem key={page} sx={{padding: '0 .55rem'}}>
                  <Typography noWrap>
                      <HashLink
                        style={{textDecoration: 'none'}}
                        scroll={(element) => element.scrollIntoView({ behavior: 'smooth' })} //scroll to view
                        to={page.path}
                      >
                        <Typography sx={navLinks} className="hover-underline-animation">
                          {page.name}
                        </Typography>
                      </HashLink>
                  </Typography>
                </ListItem>
              ))}

            {links.map((page) => (    //links
              <ListItem key={page}>
                <Typography noWrap>
                    <a
                      sx={{textDecoration: 'none'}}
                      href={page.path}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Typography sx={navLinks} className="hover-underline-animation">
                        {page.name}
                      </Typography>
                    </a>
                </Typography>
              </ListItem>
            ))}
          </List>
        </Toolbar>

        <Box component="div" sx={{display: 'flex'}}>
          <Button 
            sx={{color: '#535353'}}
            onClick={handleClick}
          >
            <Tooltip title="Shopping Cart">
              <ShoppingCartIcon sx={{color: '#535353', fontSize: { md: '2rem', xs: '1.7rem'}, caretColor: 'transparent'}} />
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
                    src={process.env.PUBLIC_URL + '/images/' + item.thumbnail}
                    height="50px"
                    width="auto"
                  />
                  <Box component="div" sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography sx={{fontWeight: 'bold'}}>{item.name}</Typography>
                    <Typography>{item.color}</Typography>
                    <Typography>${item.price}</Typography>
                    
                    <Typography>Qty: {item.quantity}</Typography>
                  </Box>
                </ListItem>
              ))}
            </List>
            
            <Box component="div" sx={{textAlign: 'center', borderTop: 'solid 1px #808080'}}>
              <Typography>Total: ${total}</Typography>
              <Button 
                sx={{color: '#535353'}}
                onClick={handleRoute}  //HANDLEROUTE
              >   
                  {/* <HashLink
                    style={{textDecoration: 'none'}}
                    scroll={(element) => element.scrollIntoView({ behavior: 'smooth' })}
                    to="#cart"
                    onClick={handleClose}
                  > */}
                  <Link to="/cart" 
                    onClick={handleClose} 
                    target="_blank" rel="noopener" 
                    style={{textDecoration: 'none', color: '#535353'}}
                  >
                    <Typography variant="subtitle2">Check out</Typography>
                  </Link>
                  {/* </HashLink> */}
              </Button>
            </Box>

          </Popover>

          <Tooltip title="StoreSite">
            <a href="#abc" sx={{textDecoration: 'none'}}>
              <Box 
                className="App-logo"
                component="img"
                height="2.5rem"
                src={process.env.PUBLIC_URL + '/images/modern-logo.png'} 
                alt="StoreSite Logo"
              />
            </a>
          </Tooltip>
        </Box>
      </AppBar>
    </Container>
  );
};

export default NavBar;