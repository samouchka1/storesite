import React from 'react';
import {
    AppBar,
    Container,
    Link,
    List,
    ListItem,
    Toolbar,
    Tooltip,
    Typography,
    Box
} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RedditIcon from '@mui/icons-material/Reddit';

const socialMedia = [
    {
        name: 'Twitter',
        icon: <TwitterIcon fontSize="large" sx={{color: '#535353'}} />,
        url: 'https://twitter.com/i/flow/login'
    },
    {
        name: 'Youtube',
        icon: <YouTubeIcon fontSize="large" sx={{color: '#535353'}} />,
        url: 'https://www.youtube.com/'
    },
    {
        name: 'Reddit',
        icon: <RedditIcon fontSize="large" sx={{color: '#535353'}} />,
        url: 'https://www.reddit.com/'
    }
]

//STYLES

const footerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    backgroundColor : '#f4f4f4',
    boxShadow: 'none',
}

const footerTitleStyles = {
    fontSize: {
        md: '28px',
        xs: '25px'
    },
    fontFamily: '\'Noto Sans Display\', sans-serif',
    fontWeight: '600'
}

const footerLinkStyles = {
    textDecoration: 'none',
    color: '#464646'
}

const footerSectionStyles = {
    padding: '1rem',
}

const signatureStyles = {
    margin: '3rem 0 1rem',
    fontSize: '12px',
    caretColor: 'transparent'
}

const Footer = () => {
  return (
    <Container maxWidth={false} sx={{margin: '1rem 0 4rem'}}>
        <Box sx={{backgroundColor : '#f4f4f4', border: 'solid 1px #b2b2b2'}}>
            <div>
            <AppBar sx={footerStyles}>
                <Toolbar>
                    <List sx={{display: 'flex'}}>
                        {socialMedia.map( link => (
                            <ListItem key={link} sx={{ margin: '0 .5rem'}}>
                            <Tooltip title={link.name}>
                                <Link 
                                    alt={link.name}
                                    href={link.url}
                                    target="_blank"
                                >
                                    {link.icon}
                                </Link>
                            </Tooltip>
                            </ListItem>
                        ) )}
                    </List>
                </Toolbar>
            </AppBar>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Box sx={footerSectionStyles}>
                    <Typography variant="body1">
                        Customer Service
                    </Typography>
                    <Typography variant="subtitle2">
                        <List>
                            <ListItem>
                                <Link href="#abc" sx={footerLinkStyles}>Contact Us</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#abc" sx={footerLinkStyles}>Help</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#abc" sx={footerLinkStyles}>Shipping Policy</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#abc" sx={footerLinkStyles}>Return Policy</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#abc" sx={footerLinkStyles}>Discounts</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#abc" sx={footerLinkStyles}>Feedback</Link>
                            </ListItem>
                        </List>
                    </Typography>
                </Box>
                <Box sx={footerSectionStyles}>
                    <Typography variant="body1">
                        Popular Pages
                    </Typography>
                    <Typography variant="subtitle2">
                        <List>
                            <ListItem>
                                <Link href="#abc" sx={footerLinkStyles}>Mens</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#abc" sx={footerLinkStyles}>Womens</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#abc" sx={footerLinkStyles}>Childrens</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#abc" sx={footerLinkStyles}>Ahtletic</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#abc" sx={footerLinkStyles}>Outdoor</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#abc" sx={footerLinkStyles}>Casual</Link>
                            </ListItem>
                        </List>
                    </Typography>
                </Box>
            </Box>
            
            </div>
            <Box sx={{textAlign: 'center', margin: '1rem 0', color: '#2f2f2f'}}>
                <Typography sx={footerTitleStyles}>StoreSite</Typography>
                <Typography sx={{fontSize: '15px'}}>1234 Cool St, GreatCity, State</Typography>
                <Typography sx={signatureStyles}>
                    &copy; {new Date().getFullYear()} samouchka
                </Typography>
            </Box>
        </Box>

    </Container>
  )
}

export default Footer;
