import React from 'react';
import { 
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    CardActionArea,
    Typography,
    Button,
} from '@mui/material';
import { Fade } from "react-awesome-reveal";

const items = [
    {
        name: 'Men',
        path: '#abc',
        media: 'men.jpg',
    },
    {
        name: 'Women',
        path: '#abc',
        media: 'women.jpg',
    },
    {
        name: 'Athletic',
        path: '#abc',
        media: 'athletic.jpg',
    },
    {
        name: 'Outdoor',
        path: '#abc',
        media: 'outdoor.jpg',
    },
    {
        name: 'Casual',
        path: '#abc',
        media: 'casual.jpg',
    },
    //copy
    {
        name: 'Men',
        path: '#abc',
        media: 'men.jpg',
    },
    {
        name: 'Women',
        path: '#abc',
        media: 'women.jpg',
    },
    {
        name: 'Athletic',
        path: '#abc',
        media: 'athletic.jpg',
    },
    {
        name: 'Outdoor',
        path: '#abc',
        media: 'outdoor.jpg',
    },
    // {
    //     name: 'Casual',
    //     path: '#abc',
    //     media: 'casual.jpg',
    // },
]

const gridStyle = {
    width: '100%',
    justifyContent: 'center',
    gap: '1.1rem',
    margin: '1rem 0',
    padding: '1rem 0',
    backgroundColor: '#f4f4f4',
    border: 'solid 1px #b2b2b2' //temp
}

const GridCardLayout = () => {

    return (
        <Container maxWidth={false}>
            <Grid container sx={gridStyle} id="grid">
                {items.map((item) => (
                    <Grid item xs={8} md={3} key={item}>

                        <Fade cascade damping={0.15}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="auto"
                                        image={process.env.PUBLIC_URL + '/images/' + item.media}   
                                        alt="item"
                                    />
                                    <CardContent>
                                        <Typography variant="h5">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2">
                                            Browse our styles! We offer only the best quality for the right price!
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" sx={{color: '#535353', fontSize: {xs: '.70rem'}}}>Learn More</Button>
                                        <Button size="small" sx={{color: '#535353', fontSize: {xs: '.70rem'}}}>Add to Cart</Button>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        </Fade>

                    </Grid>
                ))}
            </Grid>
        </Container>
)}

export default GridCardLayout;