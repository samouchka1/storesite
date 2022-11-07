import React, { 
        // useState 
    } from 'react'
import { Link } from 'react-router-dom';
import {
    Container,
    Box,
    Typography,
    List,
    ListItem,
    Paper,
    Button,
    Toolbar,
    Tooltip,
    AppBar
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Footer from './Footer';
import { cartItems } from '../data/cartItems';

const componentStyles = {
    backgroundColor : '#f4f4f4', //background color
    border: 'solid 1px #b2b2b2',
    margin: '1rem 0',
    display: 'flex',
    flexDirection: {
        md: 'row',
        xs: 'column'
    },
    justifyContent: 'center',
    padding: {
        md: '0 10%',
        xs: '0 2%'
    },
}

const navBar = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    height: 'auto',
    backgroundColor : '#f4f4f4', //background color
    border: 'solid 1px #b2b2b2',
    width: '100%',
    margin: '1rem 0',
    padding: {
      md: '0 5rem 0 0',
      sm: '0 1.5rem 0 0',
      xs: '0 1rem 0 0'
    },
    boxShadow: 'none'
  }

const ShoppingCart = () =>  {

    // const [total, setTotal] = useState(0)
    
    // const sum =

    const ApplicationBar = () => {

        return (
            <AppBar sx={navBar} id="top">
                <Toolbar disableGutters>
                    <Button sx={{margin: {md: '0 1.5rem', xs: '0 .5rem'}}}>
                        <Link to="/" style={{textDecoration: 'none', color: '#535353', display: 'flex', alignItems: 'center'}}>
                            <ArrowBackIosNewIcon />go back
                        </Link>
                    </Button>
                </Toolbar>

                <Box component="div" sx={{display: 'flex'}}>
                    <Tooltip title="StoreSite">
                        <a href="#abc" sx={{textDecoration: 'none'}}>
                        <Box 
                            className="App-logo"
                            component="img"
                            height="2.5rem"
                            src={process.env.PUBLIC_URL + '/images/modern-logo.png'} 
                            alt="StoreSite Logo"
                        />
                        </a>
                    </Tooltip>
                </Box>
            </AppBar>
        )
    }

    return (
        <>
            <Container maxWidth={false} id="cart">

                <ApplicationBar />

                <Box sx={componentStyles}>
                    <Paper sx={{margin: '1rem', flexGrow: 1, padding: { md: '1rem 5%', xs: '1rem'}}}>
                        <Typography sx={{fontSize: {md: '21px', xs: '19px'}}}>Shopping Cart (under development)</Typography>
                        <List>
                            {cartItems.map((item) => (
                                <Box key={item} sx={{'&:hover': {backgroundColor: '#efefef93'}}}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '.5rem 0',
                                        justifyContent: 'space-between' //not working
                                    }}>
                                        <Box>
                                            <Typography sx={{fontSize: {md: '19px', xs: '17px'}, fontWeight: '600'}}>{item.name}</Typography>
                                            <Typography sx={{fontSize: {md: '17px', xs: '15px'}}}>{item.color}</Typography>
                                            <Typography variant="caption"> Item #: {item.product_num}</Typography>
                                            <div>
                                                <Typography varant="subtitle2">{item.quantity}</Typography>
                                            </div>
                                        </Box>
                                        <Box
                                            component="img"
                                            src={process.env.PUBLIC_URL + '/images/' + item.thumbnail}
                                            alt={item.name}
                                            sx={{ height: 'auto', width: { md: '100px', xs: '85px'}}}
                                        />
                                    </Box>
                                </Box>
                            ))}
                        </List>
                    </Paper>

                    <Paper sx={{margin: '1rem'}}>
                        <List>
                            {cartItems.map((item) => (
                                <ListItem key={item} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                                    <Typography variant="subtitle1">{item.name}</Typography>
                                    <Typography variant="subtitle2">{item.price}</Typography>
                                    <Typography variant="caption"> Item #: {item.product_num}</Typography>
                                </ListItem>
                            ))}
                        </List>
                        <Box sx={{margin: '1rem'}}>
                            <Typography>Totals</Typography>
                            <Button>
                                Place Order
                            </Button>
                        </Box>
                    </Paper>
                </Box>

            </Container>

            <Footer />

        </>

        )
    }
export default ShoppingCart;