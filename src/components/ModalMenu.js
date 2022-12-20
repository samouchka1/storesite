import React, {useState} from 'react';
import { HashLink } from 'react-router-hash-link';
import {
    Button,
    Modal,
    ListItem,
    Typography,
    Box,
    // Fade
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

const ModalMenuStyles = {
    position: 'absolute',
    top: '10%',
    width: '100%',
    bgcolor: 'background.paper', //bgcolor
    border: 'solid 1px #b2b2b2', //border color
    boxShadow: 24,
    padding: '1rem'
  };

const ModalLinkStyles = {
    fontSize : '1.15rem',
    color: 'text.primary',
    padding: '.5rem 0'
}

const ModalMenu =({setNavigation}) => {

    const pages = [
        {
          name: 'What\'s New',
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
        }
      ]

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <Button onClick={handleOpen} sx={{display: { md: 'none', xs: 'block' }, color: 'text.primary'}}>
                {open ? <ClearIcon sx={{color: 'text.primary'}} /> : <MenuIcon sx={{color: 'text.primary'}} />}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                sx={{display: { md: 'none', xs: 'block'}}}
                // disableScrollLock
            >
            {/* <Fade in={open}> */}
                <Box sx={ModalMenuStyles}>
                    {pages.map((page) => (    //hashlinks
                        <ListItem key={page}>
                            <Typography noWrap sx={{}}>
                                <HashLink
                                    style={{textDecoration: 'none'}}
                                    scroll={(element) => element.scrollIntoView({ behavior: 'smooth' })} //scroll to view
                                    to={page.path}
                                >
                                <Typography sx={ModalLinkStyles}>
                                    {page.name}
                                </Typography>
                                </HashLink>
                            </Typography>
                        </ListItem>
                    ))}
                </Box>
            {/* </Fade> */}
            </Modal>
      </Box>
    )
}

export default ModalMenu;
