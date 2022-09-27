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
        media: 'watermelon.jpg',
    },
    {
        name: 'sample item',
        path: '',
        media: 'apple.jpg',
    },
    {
        name: 'sample item',
        path: '',
        media: 'melon.jpg',
    },
    {
        name: 'sample item',
        path: '',
        media: 'orange.jpg',
    },
    {
        name: 'sample item',
        path: '',
        media: 'watermelon.jpg',
    },
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

const GridLayout = () => {

    return (
        <Container maxWidth={false}>
            <Grid container sx={gridStyle} id="grid">

                {items.map((item) => (

                    <Grid item xs={8} md={3} key={item}>
                        
                        <Card>
                            <CardMedia
                                component="img"
                                height="220px"
                                image={process.env.PUBLIC_URL + '/images/' + item.media}   
                                alt="item"
                            />
                            <CardContent>
                                <Typography variant="h5">
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