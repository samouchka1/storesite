import React from 'react'
import { photos } from '../data/photos';
import { 
    Box, 
    Container,
    Link,
    Typography, 
} from '@mui/material';
import Carousel from 'nuka-carousel';

const componentStyles ={
    backgroundColor : '#f4f4f4', //background color
    border: 'solid 1px #b2b2b2',
    margin: '1rem 0'
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

const CarouselNuka = () => {
  return (
    <Container maxWidth={false} sx={{display: { md: 'block', xs: 'none'}}}>
        <Box sx={componentStyles}>

            <Carousel wrapAround={true} slidesToShow={2}>
                {photos.map((photo) => (
                    <Box key={photo.id} component="div" style={{display: 'flex'}}>
                        <Link href="#abc">
                            <Box component="img"
                                src={process.env.PUBLIC_URL + '/images/' + photo.image} 
                                alt={photo.label}
                                sx={{margin: 'auto'}}
                            />
                            <Typography sx={labelStyles}>{photo.label}</Typography>
                        </Link>
                    </Box>
                ))}
            </Carousel>

        </Box>
    </Container>
  )
}

export default CarouselNuka