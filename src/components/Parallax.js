import React from 'react'
import {
    Container,
    Box,
    // Typography
} from '@mui/material';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
// import { Slide } from "react-awesome-reveal";

const Parallax = () => {
  return (
    <Container maxWidth={false} sx={{marginBottom: '1rem'}}>
        <ParallaxBanner style={{ aspectRatio: '2 / 1' }}>
            <ParallaxBannerLayer speed={-20}>
                <Box
                    component="img"
                    alt="parallax"
                    src={process.env.PUBLIC_URL + '/images/carouselSwiper/casual-coat.jpg'}
                    // height="100vh"
                    // width="auto"
                />
            </ParallaxBannerLayer>
        </ParallaxBanner>
    </Container>
  )
}

export default Parallax