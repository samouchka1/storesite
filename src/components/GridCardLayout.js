import React, {useState} from 'react';
import { HashLink } from 'react-router-hash-link';
import { 
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    CardActionArea,
    Typography,
    Tooltip,
    Button,
    List,
    ListItem,
    Box,
    Paper,
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Fade } from "react-awesome-reveal";

import '../App.css';

import { 
    New, 
    Men, 
    Women, 
    Casual, 
    Outdoor, 
    Athletic 
} from '../data/navigation/Navigator';

const gridStyle = {
    width: '100%',
    justifyContent: 'center',
    gap: '1.1rem',
    padding: '1rem 0',
    // backgroundColor: 'primary.main', //bgcolor
    // border: 'solid 1px #b2b2b2' //color
}

const backToTopButtonStyle = {
    position: 'fixed',
    bottom: '100px',
    right: '80px',
    padding: '.25rem',
    backgroundColor: '#ffffff50',
    borderRadius: '4px',
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    display: {
        sm: 'block',
        xs: 'none'
    }
}

// const backToTopMobileStyle = {
//     position: 'fixed',
//     bottom: '10px',
//     right: '5px',
//     padding: '.25rem',
//     backgroundColor: 'gray',
//     display: {
//         sm: 'none',
//         xs: 'block'
//     }
// }

const GridCardLayout = ({navigation}) => {

    const [showButton, setShowButton] = useState(false);

    // const [mobileScroll, setMobileScroll] = useState(false)

    // if (window.innerWidth < 600) {
    //     setMobileScroll(true)
    // } else {
    //     setMobileScroll(false)
    // }

    // const [showButtonMobile, setShowButtonMobile] = useState(false);

    React.useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 450 && window.pageYOffset < 1500) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);

    // React.useEffect(() => {
    //     mobileScroll =  window.addEventListener("scroll", () => {
    //       if (window.pageYOffset > 1000 && window.pageYOffset < 2700) {
    //         setShowButtonMobile(true);
    //       } else {
    //         setShowButtonMobile(false);
    //       }
    //     });
    //   }, []);

    let items;
    let title;

    switch(navigation) {
        case 'new': 
            items = New; 
            title = "See What's New!";
        break;
        case 'men': 
            items = Men; 
            title = "Men's";
        break;
        case 'women': 
            items = Women;
            title = "Women's";
        break;
        case 'casual': 
            items = Casual;
            title = "Casual"
        break;
        case 'outdoor': 
            items = Outdoor;
            title = "Outdoor";
        break;
        case 'athletic': 
            items = Athletic;
            title = "Athletic";
        break;
        default:
            items = New;
    }

    return (

        <Container maxWidth={false} 
            sx={{
                backgroundColor: 'primary.main',  
                border: 'solid 1px #b2b2b2', 
                margin: '1rem 0' 
            }}
        >
            <Paper id="grid" 
                sx={{
                    margin: '0 auto', 
                    width: { md: '15%', xs: '55%'},
                }}
            >
                <Typography variant="h5"  
                    sx={{
                        textAlign: 'center', 
                        margin: '1rem 0 .25rem',
                        fontFamily: 'DM Serif Display'
                    }}
                >
                    {title}
                </Typography>
            </Paper>
            <Grid container sx={gridStyle} >
                
                {items.map((item) => (

                    <Grid item xs={8} md={3} key={item} sx={{maxWidth: '90%', flexGrow: 1}}>

                        <Fade cascade damping={0.15}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="auto"
                                        image={process.env.PUBLIC_URL + '/images/products/' + item.image}   
                                        alt={item.name}
                                    />
                                    <CardContent>
                                        <Typography variant="h5">
                                            {item.name}
                                        </Typography>
                                        <List>
                                            <ListItem>Size: {item.size}</ListItem>
                                            {/* <ListItem>{item.color}</ListItem> */}
                                            <ListItem sx={{fontSize: '1.3rem'}}>${item.price}</ListItem>
                                        </List>
                                        <Typography variant="h6">
                                            Product Details
                                        </Typography>
                                        <Typography variant="body2">
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" sx={{color: 'text.primary', fontSize: {xs: '.70rem'}}}>Add to Cart</Button>
                                </CardActions> 
                            </Card>
                        </Fade>

                    </Grid>
                ))}
            </Grid>

            {showButton && (
                <Box sx={backToTopButtonStyle} className="fade-in">
                    <HashLink
                        scroll={(element) => element.scrollIntoView({ behavior: 'smooth' })}
                        to="#top"
                    >
                        <Tooltip title="Back to top">
                            <ArrowUpwardIcon fontSize="large" sx={{color: 'text.primary'}} />
                        </Tooltip>
                    </HashLink>
                </Box>
            )}

            {/* {showButtonMobile && (
                <Box sx={backToTopMobileStyle}>
                    <HashLink
                        scroll={(element) => element.scrollIntoView({ behavior: 'smooth' })}
                        to="#top"
                    >
                        <Tooltip title="Back to top">
                            <ArrowUpwardIcon fontSize="medium" sx={{color: 'text.primary'}} />
                        </Tooltip>
                    </HashLink>
                </Box>
            )} */}

            
            
        </Container>
)}

export default GridCardLayout;