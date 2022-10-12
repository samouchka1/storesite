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
import ModalMenu from './ModalMenu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const pages = [
  {
    name: 'What\'s New',
    path: '#new'
  },
  {
    name: 'Men',
    path: '#men'
  },
  {
    name: 'Women',
    path: '#women'
  },
  {
    name: 'Casual',
    path: '#casual'
  },
  {
    name: 'Outdoor',
    path: '#outdoor'
  },
  {
    name: 'Athletic',
    path: '#athletic'
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
  // padding: {
  //   md: '0 5rem 0 0',
  //   sm: '0 1.5rem 0 0',
  //   xs: '0 1rem 0 0'
  // },
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

  //TEST
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //TEST

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
          <Button sx={{color: '#535353'}}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <ShoppingCartIcon fontSize="large" sx={{color: '#535353'}} />
          </Button>
          <Popover
            id="basic-menu"
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button'
            }}
            marginThreshold={0}
          >
            <List>
              <ListItem>
                <Typography>TEST</Typography>
              </ListItem>
            </List>
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