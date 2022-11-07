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
import { faker } from '@faker-js/faker';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Footer from './Footer';

const items = [
    {
        image: '',
        name: faker.commerce.product(),
        description: faker.lorem.lines(1),
        order: faker.finance.account(4),
        price: faker.finance.amount(5, 10, 2, '$') // '$5.85'
    },
    {
        image: '',
        name: faker.commerce.product(),
        description: faker.lorem.lines(1),
        order: faker.finance.account(4),
        price: faker.finance.amount(5, 10, 2, '$') // '$5.85'
    },{
        image: '',
        name: faker.commerce.product(),
        description: faker.lorem.lines(1),
        order: faker.finance.account(4),
        price: faker.finance.amount(5, 10, 2, '$') // '$5.85'
    },{
        image: '',
        name: faker.commerce.product(),
        description: faker.lorem.lines(1),
        order: faker.finance.account(4),
        price: faker.finance.amount(5, 10, 2, '$') // '$5.85'
    },
]

const componentStyles = {
    backgroundColor : '#f4f4f4', //background color
    border: 'solid 1px #b2b2b2',
    margin: '1rem 0',
    display: 'flex',
    justifyContent: 'center',
    padding: '0 10%'
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
                    <Paper sx={{margin: '1rem', flexGrow: 1, padding: '1rem 5%'}}>
                        <Typography>Shopping Cart -under development-</Typography>
                        <List>
                            {items.map((item) => (
                                <Box key={item}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem',
                                        justifyContent: 'space-between' //not working
                                    }}>
                                        <Box sx={{border: '1px solid black', padding: '15px'}}>
                                            <Typography variant="h6">{item.name}</Typography>
                                            <Typography variant="subtitle1">{item.description}</Typography>
                                        </Box>
                                        <Box
                                            component="img"
                                            alt={item.name}
                                            sx={{ height: 'auto', width: '100px', border: 'solid black 1px', padding: '35px'}}
                                        />
                                    </Box>
                                </Box>
                            ))}
                        </List>
                    </Paper>

                    <Paper sx={{margin: '1rem'}}>
                        <List>
                            {items.map((item) => (
                                <ListItem key={item} sx={{display: 'flex', flexDirection: 'column'}}>
                                    <Typography variant="subtitle1">{item.name}</Typography>
                                    <Typography variant="subtitle2">{item.price}</Typography>
                                    <Typography variant="caption"> Order #: {item.order}</Typography>
                                </ListItem>
                            ))}
                        </List>
                        <Typography>Totals</Typography>
                        <Button>
                            Place Order
                        </Button>
                    </Paper>
                </Box>

            </Container>

            <Footer />

        </>

        )
    }
export default ShoppingCart;