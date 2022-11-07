import React, { useState } from 'react'
import {
    Container,
    Box,
    Typography,
    List,
    ListItem,
    Paper,
    Button
} from '@mui/material';
import { faker } from '@faker-js/faker';
import CloseIcon from '@mui/icons-material/Close';

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

const ShoppingCartComponent = () =>  {

    const [showButton, setShowButton] = useState(true)
    const [showCart, setShowCart] = useState(false)

    const CartButton = () => {
        return (
            <Box>
                <Button
                     sx={{padding: '10px', backgroundColor: 'yellow', border: '1px solid orange'}}
                    onClick={()=> {
                        setShowCart(true); 
                        setShowButton(false)
                    }}
                >
                    View Cart    
                </Button>
            </Box>
        )
    }
    
    const ViewCart = () => {
        
        return (

        // <Container maxWidth={false} id="cart">
            <Box sx={componentStyles}>
                <Box>
                    <Button
                        onClick={setShowCart(false)}
                    >
                        <CloseIcon />
                    </Button>
                </Box>
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
        // </Container>
        )
    }

  return (
    <Container maxWidth={false} id="cart">
        {showButton ? <CartButton /> : null }
        {showCart ? <ViewCart /> : null }
    </Container>
  )
}

export default ShoppingCartComponent;