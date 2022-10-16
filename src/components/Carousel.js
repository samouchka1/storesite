import React, { useState } from 'react';
import {
    Box,
    Button,
    Container, 
    Typography,
} from '@mui/material';
import { photos } from '../data/photos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const containerStyles = {
    width: '100%',
    backgroundColor: '#f4f4f4',
    border: 'solid 1px #b2b2b2' //temp
}

const carouselStyles = {
    display: 'flex',
    width: {
        md: '45vw',
        xs: '90vw'
    },
    height: 'auto',
    margin: '1rem auto 3rem'
}

const photoStyles = {
    position: 'relative',
    height: '100%',
    width: '100%',
    borderRadius: '4px'
}

const labelStyles = {
    textAlign: 'center', 
    position: 'relative', 
    color: 'white', 
    fontSize: '17px', 
    padding: '.25rem', 
    backgroundColor: '#2e2e2ebc', 
    borderRadius: '4px'
}


const CarouselImg = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((currentIndex + 1) % photos.length);
    };

    const prev = () => {
        setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
    };

    return (
        <Container maxWidth="lg" sx={containerStyles}>
            <Box sx={carouselStyles}>

                <Button onClick={prev} sx={{color: '#535353'}}>
                    <ArrowBackIosIcon sx={{color: '#535353'}}/>
                </Button>
                
                {photos.map((photo) => (
                    <Box key={photo.id}
                        className={photos[currentIndex].id === photo.id ? 'fade' : 'slide fade'}
                    >
                        <Box component="img"
                            src={process.env.PUBLIC_URL + '/images/' + photo.image} 
                            alt={photo.label}
                            sx={photoStyles}
                        />
                        <Typography sx={labelStyles}>{photo.label}</Typography>
                    </Box>
                ))} 

                <Button onClick={next} sx={{color: '#535353'}}>
                    <ArrowForwardIosIcon sx={{color: '#535353'}} />
                </Button>

            </Box>
            
        </Container>
    )
}

export default CarouselImg;