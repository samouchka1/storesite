import React from 'react';
import { 
    Box, 
    Button, 
    Container,
    Link,
    Typography,
    Paper,
} from '@mui/material';
import { swiperImages } from '../data/SwiperImages';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, FreeMode, Autoplay } from "swiper";

import '../App.css'; //for navigation arrow color
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import "swiper/css/effect-fade";


const componentStyles ={
    backgroundColor : 'primary.main', //background color
    border: 'solid 1px #b2b2b2',
    margin: '1rem 0',
    padding: '1rem 0',
}


const CarouselSwiper = () => {
  return (
    <Container maxWidth={false} sx={{p: '0'}}>
        <Box sx={componentStyles}>
            <Swiper 
                // slidesPerView={2}
                // spaceBetween={10}
                breakpoints={{
                    600: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    // 800: {
                    //   slidesPerView: 2,
                    //   spaceBetween: 0,
                    // },
                }}
                loop={true}
                navigation={true}
                freeMode={true}
                effect={"fade"}
                autoplay={{ delay : 4000, disableOnInteraction: false }}
                modules={[EffectFade, FreeMode, Navigation, Autoplay]}
            >
                {swiperImages.map((photo) => (
                    <SwiperSlide key={photo.id}>
                        <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: {md: 'row', xs: 'column'}}}>
                            <Link href="#abc" sx={{textDecoration: 'none'}}>
                                <Box component="img"
                                    src={process.env.PUBLIC_URL + '/images/carouselSwiper/' + photo.image} 
                                    alt={photo.label}
                                    sx={{width: '100%', display: 'block', borderRadius: '4px', height: {md:'78vh', xs: '40vh'}}}
                                />
                                {/* <Paper elevation={2} sx={{textAlign: 'center'}}>
                                    <Typography variant="h6">
                                        {photo.label}
                                    </Typography>
                                </Paper> */}
                            </Link>
                            <Paper
                                elevation={2}
                                sx={{
                                    position: 'relative',
                                        // bottom: '75%',
                                        // right: {
                                        //     md: '20%',
                                        //     sm: '15%',
                                        //     xs: '10%'
                                        // },
                                    width: {
                                        md: '8rem',
                                        xs: '100%'
                                    },
                                    height: {md:'78vh', xs: '8vh'},
                                    textAlign: 'center',
                                    display: 'flex',
                                    flexDirection: {md: 'column', xs: 'row'},
                                    alignItems: 'center',
                                    padding: {md: '0 1rem', xs: '0'}
                                }}
                            >
                                <Paper sx={{display: 'flex', flexDirection:'column', m: { md: '1rem 0 0', xs: '0'}}}>
                                    <Typography 
                                        variant="outlined"
                                        sx={{
                                            fontSize: {
                                                md: '1.3rem',
                                                xs: '1rem'
                                            },
                                            color: 'text.primary',
                                            fontWeight: 600,
                                            m: {md: '.5rem 0', xs: '.35rem'}
                                        }}
                                    >
                                        ${photo.price}
                                    </Typography>
                                    <Button 
                                        sx={{
                                            margin: '0',
                                            textAlign: 'center',
                                            color: 'text.primary',
                                            backgroundColor: '#e4e4e4',
                                            '&:hover': {
                                                backgroundColor: '#d5d5d5'
                                            },
                                            p: {md: '.70rem .25rem', xs: '.25rem'},
                                            fontSize: {
                                                md: '.85rem',
                                                xs: '.75rem'
                                            }
                                        }} 
                                    >
                                        Add&nbsp;to&nbsp;Cart
                                    </Button>
                                </Paper>

                                <Box sx={{width:{xs: '100%'},margin: {md: '1rem .15rem', xs:'0'}}}>
                                    <Typography variant="h6" 
                                        sx={{ 
                                            fontFamily: 'DM Serif Display', 
                                            m: {md: '2rem 0', xs: '0'}, 
                                            p: '0 .25rem', 
                                            fontSize: {md: '1.2rem', xs: '1rem'}
                                        }}
                                    >
                                        {photo.label}
                                    </Typography>
                                    <Typography 
                                        sx={{
                                            color: 'text.secondary', 
                                            textAlign: 'left', 
                                            p: '1rem .5rem', 
                                            display: {md: 'block', xs: 'none'},
                                            overflowY: 'auto'
                                        }}
                                    >
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam corporis consequatur possimus distinctio aliquid.
                                    </Typography>
                                </Box>
                            </Paper>
                        </Box>
                        
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    </Container>
  )
}

export default CarouselSwiper