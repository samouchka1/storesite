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

const containerStyles = {
    width: '100%',
    backgroundColor: '#f4f4f4',
    border: 'solid 1px #b2b2b2' //temp
}

const carouselStyles = {
    width: {
        md: '40vw',
        xs: '70vw'
    },
    height: 'auto',
    margin: '1rem auto'
}

const photoStyles = {
    height: '100%',
    width: '100%',
    borderRadius: '4px'
}

const buttonStyles = {
    display: 'flex', 
    justifyContent: 'center', 
    margin: '1rem 0', 
    gap: '2rem'
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
        <Container maxWidth="lg" sx={containerStyles}>
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

                <Box component="div" sx={buttonStyles}>
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