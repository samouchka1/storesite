import React from 'react';
import { 
    Container,
    Grid, 
} from '@mui/material';

const items = [
    {
        name: 'sample item',
        path: '',
        thumbnail: '',
    },
    {
        name: 'sample item',
        path: '',
        thumbnail: '',
    },
    {
        name: 'sample item',
        path: '',
        thumbnail: '',
    },
    {
        name: 'sample item',
        path: '',
        thumbnail: '',
    },
    {
        name: 'sample item',
        path: '',
        thumbnail: '',
    },
    {
        name: 'sample item',
        path: '',
        thumbnail: '',
    },
]

const GridLayout = () => {

const gridStyle = {
    width: '100%',
    justifyContent: 'center',
    gap: '1.1rem',
    border: 'solid 2px black' //temp
}


return (
    <Container maxWidth={false}>
        <Grid container sx={gridStyle} id="grid">

            {items.map((item) => (

                <Grid item xs={8} md={3} key={item} sx={{border: 'solid black 1px'}}>
                        <div>
                            A component here
                        </div>
                </Grid>
            ))}

        </Grid>
    </Container>
)}

export default GridLayout;