import React from 'react';
import { 
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button
} from '@mui/material';

const items = [
    {
        name: 'sample item',
        path: '',
        media: 'simple.jpg',
    },
    {
        name: 'sample item',
        path: '',
        media: 'simple.jpg',
    },
    {
        name: 'sample item',
        path: '',
        media: 'simple.jpg',
    },
    {
        name: 'sample item',
        path: '',
        media: 'simple.jpg',
    },
    {
        name: 'sample item',
        path: '',
        media: 'simple.jpg',
    },
    {
        name: 'sample item',
        path: '',
        media: 'simple.jpg',
    },
]

const GridLayout = () => {

    const gridStyle = {
        width: '100%',
        justifyContent: 'center',
        gap: '1.1rem',
        margin: '1rem 0',
        border: 'solid 1px #b2b2b2' //temp
    }
    const cardStyle = {
        width: '100%',
        backgroundColor: '#f4f4f4',
        // border: 'solid 1px #b2b2b2'
    }


    return (
        <Container maxWidth={false}>
            <Grid container sx={gridStyle} id="grid">

                {items.map((item) => (

                    <Grid item xs={8} md={3} key={item}>
                        
                        <Card sx={cardStyle}>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={process.env.PUBLIC_URL + '/images/' + item.media}   
                                alt="item"
                            />
                            <CardContent>
                                <Typography  variant="h5">
                                    Item
                                </Typography>
                                <Typography variant="body2">
                                    This item is was designed to keep the purchaser feeling amazing.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>

                    </Grid>
                ))}

            </Grid>
        </Container>
)}

export default GridLayout;