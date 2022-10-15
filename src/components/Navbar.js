import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import {
  AppBar,
  Container,
  Toolbar, 
  Typography,
  List,
  ListItem,
  Link,
  Box,
  Tooltip,
  Button,
  Popover,
} from '@mui/material';
import { pages } from '../data/pages';
import ModalMenu from './ModalMenu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

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
    '&:hover': {
      textDecoration: 'underline'
    },
  color: '#171717', //color
  fontSize : '1rem',
  margin: {
    md: '0 .5rem',
    sm: '0',
    xs: '0'
  }
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

  //SHOPPING CART
  const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  // const [counter, setCounter] = useState(0);
  // const increase = () => {
  //   setCounter(count => count + 1);
  // };
  // const decrease = () => {
  //   setCounter(count => count - 1);
  // };
 


  return (
  <Container maxWidth={false}>
      <AppBar sx={navBar}>
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
                        <Typography sx={navLinks}>
                          {page.name}
                        </Typography>
                      </HashLink>
                  </Typography>
                </ListItem>
              ))}

            {links.map((page) => (    //links
              <ListItem key={page}>
                <Typography noWrap>
                    <Link
                      sx={{textDecoration: 'none'}}
                      href={page.path}
                      target="_blank"
                    >
                      <Typography sx={navLinks}>
                        {page.name}
                      </Typography>
                    </Link>
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
            <ShoppingCartIcon fontSize="large" sx={{color: '#535353'}} />
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
                    {/* <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Button onClick={increase} sx={{color: '#535353'}}>
                          <AddIcon sx={{color: '#535353'}} />
                        </Button>
                        <div>
                          <Typography>Qty: {item.quantity}</Typography>
                        </div>
                        <Button onclick={decrease} sx={{color: '#535353'}}>
                          <RemoveIcon sx={{color: '#535353'}} />
                        </Button>
                    </Box> */}
                  </Box>
                </ListItem>
              ))}
            </List>
            
            <Box component="div" sx={{textAlign: 'center', borderTop: 'solid 1px #808080'}}>
              <Typography>Total: ${total}</Typography>
              <Button sx={{color: '#535353'}}>
                  <Typography variant="subtitle2">Check out</Typography>
              </Button>
            </Box>

          </Popover>

          <Tooltip title="StoreSite">
            <Link href="#abc" sx={{textDecoration: 'none'}}>
              <Box 
                component="img"
                height="2.5rem"
                src={process.env.PUBLIC_URL + '/images/modern-logo.png'} 
                alt="StoreSite Logo"
              />
            </Link>
          </Tooltip>
        </Box>
      </AppBar>
    </Container>
  );
};

export default NavBar;