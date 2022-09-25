import React from 'react';
import {
    AppBar,
    Container,
    Link,
    List,
    ListItem,
    Toolbar,
    Tooltip,
    //Typography
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
    backgroundColor : '#f4f4f4', //background color
    border: 'solid 1px #b2b2b2',
    boxShadow: 'none',
}

const Footer = () => {
  return (
    <Container maxWidth={false} sx={{margin: '1rem 0 4rem'}}>
        <AppBar sx={footerStyles}>
            <Toolbar>
                <List sx={{display: 'flex'}}>
                    {socialMedia.map( link => (
                        <ListItem key={link} sx={{ margin: '0 1rem'}}>
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

    </Container>
  )
}

export default Footer;
