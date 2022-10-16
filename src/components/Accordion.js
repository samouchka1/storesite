import React from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    Container,
    Button,
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

    const accordionButtonStyles = {
        display: 'block',
        margin: '0 auto'
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
                        src={process.env.PUBLIC_URL + '/images/men.jpg'}
                        alt="orange"
                        sx={accordionImageStyles}
                    />
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                <Button size="small" sx={accordionButtonStyles}>Learn more</Button>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Item 2</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{justifyContent: 'center'}}>
                    <Box 
                        component="img"
                        src={process.env.PUBLIC_URL + '/images/women.jpg'}
                        alt="orange"
                        sx={accordionImageStyles}
                    />
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    <Button size="small" sx={accordionButtonStyles}>Learn more</Button>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Item 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box 
                        component="img"
                        src={process.env.PUBLIC_URL + '/images/outdoor.jpg'}
                        alt="orange"
                        sx={accordionImageStyles}
                    />
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    <Button size="small" sx={accordionButtonStyles}>Learn more</Button>
                </AccordionDetails>
            </Accordion>

        </Container>
    );
}
export default SimpleAccordion;
