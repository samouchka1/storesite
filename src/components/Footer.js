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
        icon: <TwitterIcon fontSize="large" />,
        url: 'https://twitter.com/i/flow/login'
    },
    {
        name: 'Youtube',
        icon: <YouTubeIcon fontSize="large" />,
        url: 'https://www.youtube.com/'
    },
    {
        name: 'Reddit',
        icon: <RedditIcon fontSize="large" />,
        url: 'https://www.reddit.com/'
    }
]
const customerService = [
    {
        name: 'Contact Us',
        href: '#abc'
    },
    {
        name: 'Help',
        href: '#abc'
    },
    {
        name: 'Shipping Policy',
        href: '#abc'
    },
    {
        name: 'Return Policy',
        href: '#abc'
    },
    {
        name: 'Discounts',
        href: '#abc'
    },
    {
        name: 'Feedback',
        href: '#abc'
    }
    
]

const popularPages =[
    {
        name: 'Mens',
        href: '#abc'
    },
    {
        name: 'Womens',
        href: '#abc'
    },
    {
        name: 'Childrens',
        href: '#abc'
    },
    {
        name: 'Athletic',
        href: '#abc'
    },
    {
        name: 'Outdoor',
        href: '#abc'
    },
    {
        name: 'Casual',
        href: '#abc'
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
    fontSize: {
        md: '.9rem',
        xs: '.8rem'
    },
    lineHeight: '.25',
    textDecoration: 'none',
    color: '#464646'
}

const footerSectionStyles = {
    // width: '100%',
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
        <Box sx={{backgroundColor : '#f4f4f4', border: 'solid 1px #b2b2b2', margin: '0 auto'}}>
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
                                    sx={{color: '#535353'}}
                                >
                                    {link.icon}
                                </Link>
                            </Tooltip>
                            </ListItem>
                        ))}
                    </List>
                </Toolbar>
            </AppBar>

            {/* SECTION */}
            <Box sx={{display: 'flex', justifyContent: 'space-between', width: {md: '50%', xs:'100%'}, margin: '0 auto'}}>
                <Box sx={footerSectionStyles}>
                    <Typography variant="body2">
                        Customer Service
                    </Typography>
                    <Typography variant="subtitle2">
                        <List>
                            {customerService.map((link) => (
                                <ListItem key={link}>
                                    <Link href={link.href} sx={footerLinkStyles}>{link.name}</Link>
                                </ListItem>
                            ))}
                        </List>
                    </Typography>
                </Box>
                <Box sx={footerSectionStyles}>
                    <Typography variant="body2">
                        Popular Pages
                    </Typography>
                    <Typography variant="subtitle2">
                        <List>
                            {popularPages.map((link) => (
                                <ListItem key={link}>
                                    <Link href={link.href} sx={footerLinkStyles}>{link.name}</Link>
                                </ListItem>
                            ))}
                        </List>
                    </Typography>
                </Box>
            </Box>
            
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
