import React from 'react';
import { photos } from '../data/photos';
// import { Carousel } from 'react-responsive-carousel';

const CarouselNew = () => {
  return (
    <Carousel>
        {photos.map((photo) => (
            <div>
                <img src={process.env.PUBLIC_URL + '/images/' + photo.image} alt={photo.label}/>
                <p>{photo.label}</p>
            </div>
        ))}

    </Carousel>
  )
}

export default CarouselNew