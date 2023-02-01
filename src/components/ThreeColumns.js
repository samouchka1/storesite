import React, { 
    // useState 
} from 'react'
import {
    Container,
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Paper,
    // Dialog,
    // DialogContent,
    Link,
    Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Slide, Fade } from "react-awesome-reveal";
import '../App.css';
import { listings } from '../data/seasonalProducts';

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
    m: '0 0 1rem 0', 
    width: '100%',
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
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
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
    width: {
        md: '100%',
        xs: '100%'
    },
    margin: {
        md: '0 .5rem 0 1rem',
        xs: '0'
    },
}

const itemPriceStyles = {
    fontSize: '1.3rem',
    margin: '.5rem'
}

const itemInfoStyles = {
    margin:'1rem 0'
}

const itemInfoTitleStyles = {
    fontFamily: 'DM Serif Display',
    fontSize: '1.1rem'
}

const itemButtonStyles = {
    color: 'text.primary',
    diplay: 'inline',
    textAlign: 'center',
    margin: '.75rem 0 0'
}

const itemSectiondetailsStyles = {
    display: 'flex', 
    flexDirection: {
        md: 'row',
        xs: 'column'
    }, 
    justifyContent: {
        md: 'space-between',
        xs: 'center',
    }, 
    textAlign: 'center',
}

const itemSectionStyles = {
    textAlign: 'center',
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

const ThreeColumns = () => {

// const [open, setOpen] = useState(false);

// const handleClickOpen = () => {
//     setOpen(true);
// };

// const handleClose = () => {
//     setOpen(!open);
// };

// const [ value, setValue ] = useState('');

// const selectValue = (str) => {
//     setValue(str);
// }


  return (
    <Container maxWidth={false}>
        <Box sx={containerStyles}>

            {listings.map((list) =>(
            <Fade cascade damping={0.15} key={list}>
                <Box sx={columnStyles}>
                    <Box 
                        component="img"
                        alt={list.section}
                        src={process.env.PUBLIC_URL + '/images/seasonal/' + list.image}
                        sx={accordionImageStyles}
                    />
                    <Accordion sx={accordionStyles}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography sx={{fontSize: '1.35rem', fontFamily: 'DM Serif Display'}}>{list.section}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                <Slide direction="down" cascade triggerOnce>
                                    <Fade cascade duration={400} triggerOnce>
                                        <Link 
                                            sx={{
                                                textDecoration: 'none', 
                                                color: 'text.primary', 
                                                '&:hover': {cursor: 'pointer'} //had to manually add feature
                                            }}
                                        >
                                            <Paper 
                                                sx={itemSectionStyles}
                                                // onClick={()=> {
                                                //     handleClickOpen(); 
                                                //     selectValue(list.items.item1.img);
                                                // }}
                                            >
                                                <Box sx={itemSectiondetailsStyles}>
                                                    <Box 
                                                        component="img"
                                                        alt={list.section}
                                                        src={process.env.PUBLIC_URL + '/images/seasonal/' + list.items.item1.img}
                                                        sx={itemStyles}
                                                    />
                                                    <Box sx={itemInfoStyles}>
                                                        <Typography sx={itemInfoTitleStyles}>{list.items.item1.name}</Typography>
                                                        <Typography sx={itemPriceStyles}>{list.items.item1.price}</Typography>
                                                        <Typography>
                                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima velit vel cum doloremque.
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Button variant="outlined" sx={itemButtonStyles}>
                                                    Add to Cart
                                                </Button>
                                                
                                            </Paper>
                                        </Link>
                                            
                                        <Paper sx={itemSectionStyles}>
                                            <Box sx={itemSectiondetailsStyles}>
                                                <Box 
                                                    component="img"
                                                    alt={list.section}
                                                    src={process.env.PUBLIC_URL + '/images/seasonal/' + list.items.item2.img}
                                                    sx={itemStyles}
                                                />
                                                <Box sx={itemInfoStyles}>
                                                    <Typography sx={itemInfoTitleStyles}>{list.items.item2.name}</Typography>
                                                    <Typography sx={itemPriceStyles}>{list.items.item2.price}</Typography>
                                                    <Typography>
                                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima velit vel cum doloremque.
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Button variant="outlined" sx={itemButtonStyles}>
                                                Add to Cart
                                            </Button>
                                        </Paper>
                                        <Paper sx={itemSectionStyles}>
                                            <Box sx={itemSectiondetailsStyles}>
                                                <Box 
                                                    component="img"
                                                    alt={list.section}
                                                    src={process.env.PUBLIC_URL + '/images/seasonal/' + list.items.item3.img}
                                                    sx={itemStyles}
                                                />
                                                <Box sx={itemInfoStyles}>
                                                    <Typography sx={itemInfoTitleStyles}>{list.items.item3.name}</Typography>
                                                    <Typography sx={itemPriceStyles}>{list.items.item3.price}</Typography>
                                                    <Typography>
                                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima velit vel cum doloremque.
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Button variant="outlined" sx={itemButtonStyles}>
                                                Add to Cart
                                            </Button>
                                        </Paper>
                                    </Fade>
                                </Slide>

                            </Box>
                            
                        </AccordionDetails>
                    </Accordion>

                    {/* <Dialog
                        open={open}
                        onClose={handleClose}
                        disableScrollLock
                        // component="div"
                    >
                        {value === `${list.items.item1.img}` ? 
                            <DialogContent sx={{height: 'contain', width: 'auto', textAlign: 'center'}}>
                                <Box
                                    component="img"
                                    alt={list.items.item1.img}
                                    src={process.env.PUBLIC_URL + '/images/seasonal/' + list.items.item1}
                                    sx={{height: 'auto', width: '100%'}}
                                />
                                <Typography>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima velit vel cum doloremque molestiae omnis adipisci a aspernatur quos. Ad deleniti officiis cum officia nihil?
                                </Typography>
                            </DialogContent>
                         : undefined }
                    </Dialog> */}

                </Box>
            </Fade>
            ))}

        </Box>
    </Container>
  )
}

export default ThreeColumns