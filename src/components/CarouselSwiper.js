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
import { Navigation, FreeMode, Autoplay } from "swiper";

import '../App.css'; //for navigation arrow color
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';


const componentStyles ={
    backgroundColor : 'primary.main', //background color
    border: 'solid 1px #b2b2b2',
    margin: '1rem 0',
    padding: '1rem 0'
}


const CarouselSwiper = () => {
  return (
    <Container maxWidth={false}>
        <Box sx={componentStyles}>
            <Swiper 
                // slidesPerView={2}
                // spaceBetween={10}
                breakpoints={{
                    600: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    800: {
                      slidesPerView: 2,
                      spaceBetween: 0,
                    },
                }}
                loop={true}
                navigation={true}
                freeMode={true}
                autoplay={{ delay : 2600, disableOnInteraction: false }}
                modules={[FreeMode, Navigation, Autoplay]}
            >
                {swiperImages.map((photo) => (
                    <SwiperSlide key={photo.id} component="div" style={{display: 'flex'}}>
                        <Link href="#abc" sx={{textDecoration: 'none'}}>
                            <Box component="img"
                                src={process.env.PUBLIC_URL + '/images/carouselSwiper/' + photo.image} 
                                alt={photo.label}
                                sx={{width: '100%', height: {md:'75vh', xs: '40vh'}}}
                            />
                            <Paper elevation={2} sx={{textAlign: 'center'}}>
                                <Typography variant="h6">
                                    {photo.label}
                                </Typography>
                            </Paper>

                            <Paper
                                elevation={4}
                                sx={{
                                    position: 'absolute',
                                        bottom: '75%',
                                        right: {
                                            md: '20%',
                                            sm: '15%',
                                            xs: '10%'
                                        },
                                    width: {
                                        md: '8rem',
                                        xs: '8rem'
                                    },
                                    textAlign: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <Typography 
                                    variant="outlined"
                                    sx={{
                                        fontSize: {
                                            md: '1.3rem',
                                            xs: '.85rem'
                                        },
                                        color: 'text.primary',
                                        fontWeight: 600,
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
                                        padding: '10px 5px',
                                        fontSize: {
                                            md: '.85rem',
                                            xs: '.75rem'
                                        }
                                    }} 
                                >
                                    Add&nbsp;to&nbsp;Cart
                                </Button>
                            </Paper>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    </Container>
  )
}

export default CarouselSwiper