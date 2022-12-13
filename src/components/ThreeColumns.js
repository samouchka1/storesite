import React from 'react'
import {
    Container,
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Fade } from "react-awesome-reveal";

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


const ThreeColumns = () => {
  return (
    <Container maxWidth={false}>
        <Box sx={containerStyles}>

            <Fade cascade damping={0.15}>
                <Box marginBottom="1rem" sx={columnStyles}>
                    <Box 
                        component="img"
                        alt="something"
                        src={process.env.PUBLIC_URL + '/images/winter.jpg'}
                        sx={accordionImageStyles}
                    />
                    <Accordion sx={accordionStyles}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Winter</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima velit vel cum doloremque molestiae omnis adipisci a aspernatur quos. Ad deleniti officiis cum officia nihil?
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Fade>


            <Fade cascade damping={0.15}>
                <Box sx={columnStyles}>
                    <Box 
                        component="img"
                        alt="something"
                        src={process.env.PUBLIC_URL + '/images/summer.jpg'}
                        sx={accordionImageStyles}
                    />
                    <Accordion sx={accordionStyles}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Summer</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima velit vel cum doloremque molestiae omnis adipisci a aspernatur quos. Ad deleniti officiis cum officia nihil?
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Fade>


            <Fade cascade damping={0.15}>
                <Box sx={columnStyles}>
                    <Box 
                        component="img"
                        alt="something"
                        src={process.env.PUBLIC_URL + '/images/spring.jpg'}
                        sx={accordionImageStyles}
                    />
                    <Accordion sx={accordionStyles}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Spring/Fall</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima velit vel cum doloremque molestiae omnis adipisci a aspernatur quos. Ad deleniti officiis cum officia nihil?
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Fade>

        </Box>
    </Container>
  )
}

export default ThreeColumns