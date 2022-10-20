import React from 'react'
import {
    Container,
    Box,
    Typography,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Fade } from "react-awesome-reveal";

const containerStyles = {
    display: 'flex', 
    flexDirection: {md: 'row', xs: 'column'}, 
    gap: '1rem', 
    backgroundColor: '#f4f4f4', 
    border: 'solid 1px #b2b2b2', 
    padding: '1rem'
}

const accordionStyles = {
    width: '100%',
    margin: '0 auto'
}

const accordionButtonStyles = {
    display: 'block',
    margin: '0 auto',
    color: '#535353'
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


const ThreeColumns = () => {
  return (
    <Container maxWidth={false}>
        <Box sx={containerStyles}>

            <Fade cascade damping={0.15}>
                <Box sx={{margin: '0 0 1rem'}}>
                    <Box 
                        component="img"
                        alt="something"
                        src={process.env.PUBLIC_URL + '/images/athletic.jpg'}
                        sx={accordionImageStyles}
                    />
                    <Accordion sx={accordionStyles}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Men</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                            <Button size="small" sx={accordionButtonStyles}>Learn more</Button>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Fade>


            <Fade cascade damping={0.15}>
                <Box sx={{margin: '0'}}>
                    <Box 
                        component="img"
                        alt="something"
                        src={process.env.PUBLIC_URL + '/images/women.jpg'}
                        sx={accordionImageStyles}
                    />
                    <Accordion sx={accordionStyles}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Women</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                            <Button size="small" sx={accordionButtonStyles}>Learn more</Button>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Fade>


            <Fade cascade damping={0.15}>
                <Box sx={{margin: '0'}}>
                    <Box 
                        component="img"
                        alt="something"
                        src={process.env.PUBLIC_URL + '/images/outdoor.jpg'}
                        sx={accordionImageStyles}
                    />
                    <Accordion sx={accordionStyles}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Outdoor</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                            <Button size="small" sx={accordionButtonStyles}>Learn more</Button>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Fade>

        </Box>
    </Container>
  )
}

export default ThreeColumns