import React from 'react';
import { HashLink } from 'react-router-hash-link';
import {
  AppBar,
  Container,
  Toolbar, 
  Typography,
  List,
  ListItem,
  Link
} from '@mui/material';

const pages = [
  {
    name: 'About',
    path: '#about'
  },
  {
    name: 'Services',
    path: '#services'
  },
  {
    name: 'Contact',
    path: '#contact'
  }
]

//===STYLES===

const navBar = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems:'center',
  justifyContent: {
    md: 'right',
    sm: 'right',
    xs: 'space-around'
  },
  height: 'auto',
  backgroundColor : '#f4f4f4', //background color
  width: '100%',
  margin: '1rem 0',
  padding: {
    md: '0 5rem 0 0',
    sm: '0 1.5rem 0 0',
    xs: '0'
  },
  border: 'solid 1px #b2b2b2',
  boxShadow: 'none'
}

const navLinks = {
  textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    },
  color: '#171717', //color
  fontSize : {
    xs: '.9rem',
    md: '1rem'
  },
  margin: {
    md: '0 .5rem',
    sm: '0',
    xs: '0'
  }
}


const NavBar = () => {

  const hashLinks = pages.filter(hash => hash.path.includes('#')); //filter hashlinks
  const links = pages.filter(link => link.path.includes('https'));
  
  return (
  <Container maxWidth={false} sx={{justifyContent: 'center'}}>
      <AppBar sx={navBar}>
        <Toolbar disableGutters>
          <List sx={{ display: 'flex'}}>

            {hashLinks.map((page) => ( //hashlinks
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

            {links.map((page) => ( //links
              <ListItem key={page}>
              <Typography noWrap>
                  <Link
                    style={{textDecoration: 'none'}}
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
      </AppBar>
    </Container>
  );
};

export default NavBar;