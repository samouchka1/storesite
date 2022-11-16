import React, {useState} from 'react';
import { HashLink } from 'react-router-hash-link';
import {
    Button,
    Modal,
    ListItem,
    Typography,
    Link,
    Box,
    // Fade
} from '@mui/material';
import { pages } from '../data/pages';
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

const hashLinks = pages.filter(hash => hash.path.includes('#')); //filter hashlinks
const links = pages.filter(link => link.path.includes('https'));

const ModalMenu =() => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <Button onClick={handleOpen} sx={{display: { md: 'none', xs: 'block' }, color: '#535353'}}>
                {open ? <ClearIcon sx={{color: '#535353'}} /> : <MenuIcon sx={{color: '#535353'}} />}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                sx={{display: { md: 'none', xs: 'block'}}}
                // disableScrollLock
            >
            {/* <Fade in={open}> */}
                <Box sx={ModalMenuStyles}>
                    {hashLinks.map((page) => (    //hashlinks
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

                    {links.map((page) => (    //links
                        <ListItem key={page}>
                        <Typography noWrap>
                            <Link
                                style={ModalLinkStyles}
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
                </Box>
            {/* </Fade> */}
            </Modal>
      </Box>
    )
}

export default ModalMenu;
