import React from 'react';
import { 
    Box, 
    Container,
    Link,
    Typography, 
} from '@mui/material';
import { swiperImages } from '../data/SwiperImages';
// import { photos } from '../data/photos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from "swiper";

import '../App.css'; //for navigation arrow color
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/free-mode";


const componentStyles ={
    backgroundColor : '#f4f4f4', //background color
    border: 'solid 1px #b2b2b2',
    margin: '1rem 0',
    padding: '1rem 0'
}

const labelStyles = {
    width: '99%',
    textAlign: 'center',
    textDecoration: 'none', 
    '&:hover': {
        textDecoration: 'none'
    },
    position: 'relative', 
    color: 'white', 
    fontSize: '17px', 
    padding: '.25rem', 
    backgroundColor: '#2e2e2ebc', 
    borderRadius: '4px'
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
                modules={[FreeMode, Navigation]}
            >
                {swiperImages.map((photo) => (
                    <SwiperSlide key={photo.id} component="div" style={{display: 'flex'}}>
                        <Link href="#abc">
                            <Box component="img"
                                src={process.env.PUBLIC_URL + '/images/carouselSwiper/' + photo.image} 
                                alt={photo.label}
                                sx={{width: '100%', height: '75vh'}}
                            />
                            <Typography sx={labelStyles}>{photo.label}</Typography>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    </Container>
  )
}

export default CarouselSwiper