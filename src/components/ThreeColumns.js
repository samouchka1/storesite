import React from 'react'
import {
    Container,
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Slide, Fade } from "react-awesome-reveal";
import '../App.css';

const containerStyles = {
    display: 'flex', 
    flexDirection: {md: 'row', xs: 'column'}, 
    justifyContent: { md: 'space-between', xs: 'center'},
    gap: '1rem', 
    backgroundColor: 'primary.main', //bg color
    border: 'solid 1px #b2b2b2', //border color
    padding: '1rem'
}

const columnStyles = {
    margin: '0', 
    width: '100%'
}

const accordionStyles = {
    width: '100%',
    margin: '0 auto'
}

const accordionImageStyles = {
    height: 'auto',
    width: '100%',
    borderRadius: '4px',
    display: 'block',
    margin: '0 auto 1rem',
    opacity: '.9',
    '&:hover': {
        opacity: '1',
        animationName: 'zoom',
        animationDuration: '.3s',
        animationFillMode: 'forwards',
        '@keyframes zoom' : {
            '0%': { transform: 'scale(1.0035)'},
            '100%' : { transform: 'scale(1.009)'}
        }
    }
}

const itemStyles = {
    height: 'auto',
    width: '50%',
}

const detailsSectionStyles = {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    margin: '.75rem 0', 
    padding: '.5rem',
    '&:hover': {
        opacity: '1',
        animationName: 'zoom',
        animationDuration: '.35s',
        animationFillMode: 'forwards',
        '@keyframes zoom' : {
            '0%': { transform: 'scale(1.0)'},
            '100%' : { transform: 'scale(1.008)'}
        }
    }
}

const Listings = [
    {
        name: 'Winter',
        image: 'winter.jpg',
        items: {
            item1: '',
            item2: '',
            item3: '',
        }
    },
    {
        name: 'Summer',
        image: 'summer.jpg',
        items: {
            item1: '',
            item2: '',
            item3: '',
        }
    } ,
    {
        name: 'Fall/Spring',
        image: 'spring.jpg',
        items: {
            item1: '',
            item2: '',
            item3: '',
        }
    }
];

const ThreeColumns = () => {
  return (
    <Container maxWidth={false}>
        <Box sx={containerStyles}>

            {Listings.map((list) =>(
            <Fade cascade damping={0.15} key={list}>
                <Box marginBottom="1rem" sx={columnStyles}>
                    <Box 
                        component="img"
                        alt="something"
                        src={process.env.PUBLIC_URL + '/images/' + list.image}
                        sx={accordionImageStyles}
                    />
                    <Accordion sx={accordionStyles}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography sx={{fontSize: '1.35rem', fontFamily: 'DM Serif Display'}}>{list.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                <Slide direction="down" cascade triggerOnce>
                                    <Fade cascade duration={400} triggerOnce>
                                        <Paper sx={detailsSectionStyles}>
                                            <Typography>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima velit vel cum doloremque molestiae omnis adipisci a aspernatur quos. Ad deleniti officiis cum officia nihil?
                                            </Typography>
                                            <Box 
                                                component="img"
                                                alt={list.name}
                                                src={process.env.PUBLIC_URL + '/images/' + list.items.item1}
                                                sx={itemStyles}
                                            />
                                        </Paper>
                                        <Paper sx={detailsSectionStyles}>
                                            <Typography>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima velit vel cum doloremque molestiae omnis adipisci a aspernatur quos. Ad deleniti officiis cum officia nihil?
                                            </Typography>
                                            <Box 
                                                component="img"
                                                alt={list.name}
                                                src={process.env.PUBLIC_URL + '/images/' + list.items.item2}
                                                sx={itemStyles}
                                            />
                                        </Paper>
                                        <Paper sx={detailsSectionStyles}>
                                            <Typography>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima velit vel cum doloremque molestiae omnis adipisci a aspernatur quos. Ad deleniti officiis cum officia nihil?
                                            </Typography>
                                            <Box 
                                                component="img"
                                                alt={list.name}
                                                src={process.env.PUBLIC_URL + '/images/' + list.items.item3}
                                                sx={itemStyles}
                                            />
                                        </Paper>
                                    </Fade>
                                </Slide>

                            </Box>
                            
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Fade>
            ))}

        </Box>
    </Container>
  )
}

export default ThreeColumns