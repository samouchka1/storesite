import React, {useState} from 'react';
import { HashLink } from 'react-router-hash-link';
import {
    Button,
    Popover,
    ListItem,
    Typography,
    Link
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

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

const popLinkStyles = {
    textDecoration: 'none', 
    color: '#171717',
    padding: '1rem'
}

const hashLinks = pages.filter(hash => hash.path.includes('#')); //filter hashlinks
const links = pages.filter(link => link.path.includes('https'));

const PopoverMenu = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    return (
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MenuIcon sx={{display: { md: 'none', xs: 'block'}, color: '#535353'}} />
        </Button>
          <Popover
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            sx={{display: { md: 'none', xs: 'block'}}}
          >
            {hashLinks.map((page) => (    //hashlinks
              <ListItem key={page} sx={{padding: '0 .55rem'}}>
                <Typography noWrap>
                    <HashLink
                      style={popLinkStyles}
                      scroll={(element) => element.scrollIntoView({ behavior: 'smooth' })} //scroll to view
                      to={page.path}
                    >
                      <Typography>
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
                    style={popLinkStyles}
                    href={page.path}
                    target="_blank"
                  >
                    <Typography>
                      {page.name}
                    </Typography>
                  </Link>
              </Typography>
            </ListItem>
            ))}
          </Popover>
      </div>
    )
  }


  export default PopoverMenu;