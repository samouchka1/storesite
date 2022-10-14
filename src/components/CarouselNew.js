import React from 'react'
import { Carousel } from 'react-responsive-carousel';

const photos = [
    {
        id: 1,
        image: 'men.jpg',
        label: 'Men'
    },
    {
        id: 2,
        image: 'women.jpg',
        label: 'Women'
    },
    {
        id: 3,
        image: 'athletic.jpg',
        label: 'Athletic'
    },
    {
        id: 4,
        image: 'outdoor.jpg',
        label: 'Outdoor'
    },
    {
        id: 5,
        image: 'casual.jpg',
        label: 'Casual'
    }
]

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