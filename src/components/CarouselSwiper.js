import React from 'react';
import { 
    Box, 
    // Button, 
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

// const labelButtonStyles = {
//     position: 'relative',
//     bottom: '80%',
//     right: {
//         md: '25%',
//         xs: '40%'
//     },
//     display: 'inline-block',
//     margin: '0',
//     textAlign: 'center',
//     color: '#535353',
//     border: '#535353 1px solid',
//     backgroundColor: '#e4e4e4',
//     '&:hover': {
//         backgroundColor: '#d5d5d5'
//     },
//     padding: {
//         md: '20px',
//         xs: '10px'
//     },
// }

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
                            {/* <Button sx={labelButtonStyles} variant="outlined">Add&nbsp;to&nbsp;Cart</Button> */}
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    </Container>
  )
}

export default CarouselSwiper