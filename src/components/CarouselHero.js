import React from 'react'
import Slider from 'infinite-react-carousel';
import { photos } from '../data/photos';
import { 
    Box, 
    Container,
    Typography, 
} from '@mui/material';

const componentStyles ={
    backgroundColor : '#f4f4f4', //background color
    border: 'solid 1px #b2b2b2',
}

const labelStyles = {
    width: '84.3%',
    textAlign: 'center', 
    position: 'relative', 
    color: 'white', 
    fontSize: '17px', 
    padding: '.25rem', 
    backgroundColor: '#2e2e2ebc', 
    borderRadius: '4px'
}

const CarouselHero = () => {

    const settings =  {
        // arrows: false,
        slidesToShow: 2,
        arrowsBlock: false,
        centerMode: true,
        duration: 500,
      };

  return (
    <Container maxWidth={false} sx={{display: { md: 'block', xs: 'none'}}}>
        <Box sx={componentStyles}>
            
            <Slider {...settings}>

                {photos.map((photo) => (
                    <Box key={photo.id} component="div" style={{display: 'flex'}}>
                        <Box component="img"
                            src={process.env.PUBLIC_URL + '/images/' + photo.image} 
                            alt={photo.label}
                            sx={{margin: 'auto'}}
                        />
                        <Typography sx={labelStyles}>{photo.label}</Typography>
                    </Box>
                ))}

            </Slider>
        </Box>
    </Container>
  )
}

export default CarouselHero