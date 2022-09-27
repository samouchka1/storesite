import React, { useState } from 'react';
import './App.css';
import {
    Box,
    Button,
    Container, 
    Typography,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const photos = [
    {
        id: 1,
        image: 'apple.jpg',
        label: 'apple'
    },
    {
        id: 2,
        image: 'melon.jpg',
        label: 'melon'
    },
    {
        id: 3,
        image: 'orange.jpg',
        label: 'orange'
    },
    {
        id: 4,
        image: 'watermelon.jpg',
        label: 'watermelon'
    }
]

const carouselStyles = {
    width: {
        md: '30vw',
        xs: '80vw'
    },
    height: 'auto',
    margin: '1rem auto'
}

const photoStyles = {
    height: '100%',
    width: '100%'
}


const ImageCarousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((currentIndex + 1) % photos.length);
    };

    const prev = () => {
        setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
    };

    return (
        <Container>
            <Box sx={carouselStyles}>
                
                {photos.map((photo) => (
                    <Box key={photo.id}
                        className={photos[currentIndex].id === photo.id ? 'fade' : 'slide fade'}
                    >
                        <Box component="img"
                            src={process.env.PUBLIC_URL + '/images/' + photo.image} 
                            alt={photo.label}
                            sx={photoStyles}
                        />
                        <Typography sx={{textAlign: 'center'}}>{photo.label}</Typography>
                    </Box>
                ))} 

                <Box component="div" sx={{display: 'flex', justifyContent: 'center', margin: '1rem 0', gap: '1rem'}}>
                    <Button onClick={prev}>
                        <ArrowBackIosIcon />
                    </Button>

                    <Button onClick={next}>
                        <ArrowForwardIosIcon />
                    </Button>
                </Box>

            </Box>
            
        </Container>
    )
}

export default ImageCarousel;