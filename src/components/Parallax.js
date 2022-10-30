import React from 'react'
import {
    Container,
    // Box,
    // Typography
} from '@mui/material';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
// import { Slide } from "react-awesome-reveal";

const Parallax = () => {
  return (
    <Container maxWidth={false}>
        <ParallaxBanner style={{ aspectRatio: '2 / 1' }}>
            <ParallaxBannerLayer image={process.env.PUBLIC_URL + '/images/carouselSwiper/casual-coat.jpg'} speed={-40} />
            
            {/* <ParallaxBannerLayer speed={10}>
                <Box
                    sx={{backgroundColor: '#727d8a', borderRadius: '50%', height: '100px', width: '100px'}}
                />
            </ParallaxBannerLayer> */}
        </ParallaxBanner>
    </Container>
  )
}

export default Parallax