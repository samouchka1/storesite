import React from 'react'
import Slider from 'infinite-react-carousel';
import { photos } from '../data/photos';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';

const componentStyles ={
    backgroundColor : '#f4f4f4', //background color
    border: 'solid 1px #b2b2b2',
}

const CarouselHero = () => {

    const settings =  {
        // arrows: false,
        arrowsBlock: false,
        centerMode: true,
        duration: 500,
      };

  return (
    <Container maxWidth={false}>
        <Box sx={componentStyles}>
            <Slider {...settings}>

                {photos.map((photo) => (
                    <Box key={photo.id} component="div">
                        <Box component="img"
                            src={process.env.PUBLIC_URL + '/images/' + photo.image} 
                            alt={photo.label}
                        />
                        <Typography>{photo.label}</Typography>
                    </Box>
                ))}

            </Slider>
        </Box>
    </Container>
  )
}

export default CarouselHero