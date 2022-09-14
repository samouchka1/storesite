import React from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    Container,
 } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function SimpleAccordion() {

    const accordionImageStyles = {
        height: '220px',
        width: 'auto',
        borderRadius: '4px',
        display: 'block',
        margin: '0 auto 1rem',
    }

    return (
        <Container maxWidth="sm" sx={{margin: 'auto'}}>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Item 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box 
                        component="img"
                        src={process.env.PUBLIC_URL + '/images/orange.jpg'}
                        alt="orange"
                        sx={accordionImageStyles}
                    />
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Item 2</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{justifyContent: 'center'}}>
                    <Box 
                        component="img"
                        src={process.env.PUBLIC_URL + '/images/melon.jpg'}
                        alt="orange"
                        sx={accordionImageStyles}
                    />
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Item 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box 
                        component="img"
                        src={process.env.PUBLIC_URL + '/images/apple.jpg'}
                        alt="orange"
                        sx={accordionImageStyles}
                    />
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Container>
    );
}
export default SimpleAccordion;
