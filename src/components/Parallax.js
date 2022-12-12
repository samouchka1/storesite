import React from 'react'
import {
    Container,
    Box,
    Typography,
    Link
} from '@mui/material';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
// import { Slide } from "react-awesome-reveal";
import '../App.css';

const parallaxImage = process.env.PUBLIC_URL + '/images/parallax/parallax-image.jpg'
const parallaxImageTablet = process.env.PUBLIC_URL + '/images/parallax/parallax-image-tablet.jpg'
const parallaxImageMobile = process.env.PUBLIC_URL + '/images/parallax/parallax-image-mobile.jpg'

const parallaxTextStyle = {
    position: 'relative',
    top: {
        md: '46%',
        sm: '30%',
        xs: '40%'
    },
    left: {
        md: '10%',
        xs: '0%'
    },
    backgroundColor:'#1f1f1f42',  
    fontWeight: '700', 
    width: {
        md: '36rem',
        sm: '25rem',
        xs: '17rem'
    },
    borderRadius: '4px'
}

const Parallax = () => {
  return (
    <Container maxWidth={false} sx={{marginBottom: '1rem'}}>
        <ParallaxBanner 
            // style={{ aspectRatio: '2 / 1' }}
            className="parallax-image"
        >
            <ParallaxBannerLayer speed={-30}>
                <Box
                    component="img"
                    alt="parallax"
                    sx={{content: {
                        md: `url(${parallaxImage})`,
                        sm: `url(${parallaxImageTablet})`,
                        xs: `url(${parallaxImageMobile})`
                    }}}
                />
            </ParallaxBannerLayer>
            <ParallaxBannerLayer speed={-20}>
                <Box component="div" sx={parallaxTextStyle}>
                    <Link href="#styles" sx={{textDecoration: 'none', color: '#cacaca'}}>
                        <Typography 
                            sx={{fontSize: { md: '1.5rem', xs: '1rem'}, margin: { md: '0 1rem', xs: '0 .5rem'}}}
                        >
                            Browse our
                        </Typography>
                        <Typography sx={{fontSize: { md: '4.2rem', sm:'3rem',  xs: '2rem'}, fontFamily: 'DM Serif Display'}}>
                            Seasonal Styles
                        </Typography>
                    </Link>
                </Box>
            </ParallaxBannerLayer>
        </ParallaxBanner>
    </Container>
  )
}

export default Parallax