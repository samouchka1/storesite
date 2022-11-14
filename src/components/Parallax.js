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

// const parallaxImage = process.env.PUBLIC_URL + '/images/parallax/parallax-image.jpg'
// const parallaxImageTablet = process.env.PUBLIC_URL + '/images/parallax/parallax-image-tablet.jpg'
// const parallaxImageMobile = process.env.PUBLIC_URL + '/images/parallax/parallax-image-mobile.jpg'

const parallaxTextStyle = {
    position: 'relative',
    top: '46%',
    left: {
        md: '10%',
        xs: '0%'
    },
    backgroundColor:'#1f1f1f42',  
    fontWeight: '700', 
    width: '36rem',
    borderRadius: '4px'
}

const Parallax = () => {
  return (
    <Container maxWidth={false} sx={{marginBottom: '1rem'}}>
        <ParallaxBanner 
            // style={{ aspectRatio: '2 / 1' }}
            className="parallax-image"
        >
            <ParallaxBannerLayer speed={-20}>
                <Box
                    component="img"
                    alt="parallax"
                    src={process.env.PUBLIC_URL + '/images/parallax/parallax-image.jpg'}
                    // src={{
                    //     md: process.env.PUBLIC_URL + '/images/parallax/parallax-image.jpg',
                    //     sm: process.env.PUBLIC_URL + '/images/parallax/parallax-image-tablet.jpg',
                    //     xs: process.env.PUBLIC_URL + '/images/parallax/parallax-image.jpg-mobile'
                    // }}
                    // sx={{backgroundImage: {
                    //     md: `url(${parallaxImage})`,
                    //     sm: `url(${parallaxImageTablet})`,
                    //     xs: `url(${parallaxImageMobile})`
                    // }}}
                />
            </ParallaxBannerLayer>
            <ParallaxBannerLayer speed={-10}>
                <Box component="div" sx={parallaxTextStyle}>
                    <Link href="#styles" sx={{textDecoration: 'none', color: '#cacaca'}}>
                        <Typography 
                            sx={{fontSize: { md: '1.5rem', xs: '1rem'}, margin: { md: '0 1rem', xs: '0 .5rem'}}}
                        >
                            Browse our
                        </Typography>
                        <Typography sx={{fontSize: { md: '4.2rem', sm:'3rem',  xs: '2rem'}}}>
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