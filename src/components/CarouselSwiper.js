import React from 'react';
import { 
    Box, 
    Container,
    Link,
    Typography, 
} from '@mui/material';
import { photos } from '../data/photos';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const componentStyles ={
    backgroundColor : '#f4f4f4', //background color
    border: 'solid 1px #b2b2b2',
    margin: '1rem 0'
}

const labelStyles = {
    width: '99%',
    textAlign: 'center', 
    position: 'relative', 
    color: 'white', 
    fontSize: '17px', 
    padding: '.25rem', 
    backgroundColor: '#2e2e2ebc', 
    borderRadius: '4px'
}

const CarouselSwiper = () => {
  return (
    <Container maxWidth={false} sx={{display: { md: 'block', xs: 'none'}}}>
        <Box sx={componentStyles}>
            <Swiper slidesPerView={2}>
                {photos.map((photo) => (
                    <SwiperSlide key={photo.id} component="div" style={{display: 'flex', margin: 'auto'}}>
                        <Link href="#abc">
                            <Box component="img"
                                src={process.env.PUBLIC_URL + '/images/' + photo.image} 
                                alt={photo.label}
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