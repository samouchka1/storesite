import React from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
 } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Container } from '@mui/system';

function SimpleAccordion() {

    const containerStyles = {
        margin: '1rem auto'
    }

    const accordionDetailsStyles = {
        height: 'auto',
        width: '100%'
    }

    return (
        <Container maxWidth="xs" sx={containerStyles}>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Item 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box 
                        component="img"
                        src={process.env.PUBLIC_URL + '/images/orange.jpg'}
                        alt="orange"
                        sx={accordionDetailsStyles}
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
                        sx={accordionDetailsStyles}
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
                        sx={accordionDetailsStyles}
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
