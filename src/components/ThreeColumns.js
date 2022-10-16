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

const accordionStyles = {
    width: {
        md: '60%',
        xs: '90%'
    },
    margin: '0 auto'
}

const accordionButtonStyles = {
    display: 'block',
    margin: '0 auto'
}

const accordionImageStyles = {
    height: 'auto',
    width: {
        md: '80%',
        xs: '90%'
    },
    borderRadius: '4px',
    display: 'block',
    margin: '0 auto 1rem',
}


const ThreeColumns = () => {
  return (
    <Container maxWidth={false}>
        <Box sx={{display: 'flex', flexDirection: {md: 'row', xs: 'column'}, backgroundColor: '#f4f4f4', border: 'solid 1px #b2b2b2', padding: '1rem 0'}}>
            <Box sx={{margin: '0 0 1rem 0'}}>
                <Box 
                    component="img"
                    alt="something"
                    src={process.env.PUBLIC_URL + '/images/men.jpg'}
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
            <Box sx={{margin: '0 0 1rem 0'}}>
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
            <Box sx={{margin: '0 0 1rem 0'}}>
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
        </Box>
    </Container>
  )
}

export default ThreeColumns