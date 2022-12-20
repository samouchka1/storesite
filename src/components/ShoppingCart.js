import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import {
    Container,
    Box,
    Typography,
    List,
    ListItem,
    Paper,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@mui/material';
import { cartItems, total } from '../data/cartItems';
import { Fade } from "react-awesome-reveal";
import '../App.css';

const componentStyles = {
    backgroundColor : 'primary.main', //background color
    border: 'solid 1px #b2b2b2', //border color
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


const ShoppingCart = ({shoppingCart, setShoppingCart}) =>  {

    const [qty, setQty] = useState(1);
    const handleChange = (event) => {
        setQty(event.target.value);
      };

    const handleClose = () => {
        setShoppingCart(!shoppingCart)
    }

    return (
        <>

            {shoppingCart ? (

            <Container maxWidth={false} id="cart">
                <Fade>
                <Box sx={componentStyles}>
                    <Paper sx={{margin: '1rem', flexGrow: 1, padding: { md: '1rem 5%', xs: '1rem'}}}>
                        <Box sx={{textAlign: 'center'}}>
                            <Typography sx={{fontSize: {md: '22px', xs: '19px'}, fontFamily: 'DM Serif Display'}}>Shopping Cart</Typography>
                            <code>(under development)</code>
                        </Box>
                        <List>
                            {cartItems.map((item) => (
                                <Box key={item} sx={{'&:hover': {backgroundColor: 'primary.main' /*bg color*/}}}>
                                    <Box sx={{ display: 'flex', flexDirection: {md: 'row', xs: 'column'}, alignItems: 'center', gap: '1rem', margin: '1.5rem 0',
                                        // justifyContent: 'space-between' //not working
                                    }}>
                                        <Box
                                            component="img"
                                            src={process.env.PUBLIC_URL + '/images/' + item.thumbnail}
                                            alt={item.name}
                                            sx={{ height: 'auto', width: { md: '100px', xs: '85px'}}}
                                        />
                                        <Box sx={{textAlign: 'left', flexGrow: 1}}>
                                            <Typography sx={{fontSize: {md: '19px', xs: '17px'}, fontWeight: '600'}}>{item.name}</Typography>
                                            <Typography sx={{fontSize: {md: '17px', xs: '15px'}}}>Color: {item.color}</Typography>
                                            <Typography sx={{fontSize: {md: '17px', xs: '15px'}}}>Size: {item.size}</Typography>

                                        </Box>
                                        <Box sx={{ borderBottom: { md: 'none', xs: 'solid 1px #ccccccd8'}, margin: {md: '0', xs:'1rem 0'}}}>
                                            <Typography variant="caption"> Item #: {item.product_num}</Typography>
                                            <Box sx={{marginBottom: { md: '0', xs: '1rem'}}}>
                                                {/* <Typography varant="subtitle2">{item.quantity}</Typography>
                                                <Box sx={{display: 'flex', margin: 'auto'}}>
                                                    <Button variant="outlined"><AddIcon /></Button> 
                                                    <Button variant="outlined"><RemoveIcon /></Button>
                                                </Box> */}
                                                <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
                                                    <InputLabel id="select">Qty</InputLabel>
                                                    <Select
                                                        labelId="select"
                                                        id="select"
                                                        value={qty}
                                                        label="Qty"
                                                        onChange={handleChange}
                                                    >   
                                                        <MenuItem value={1}>1</MenuItem>
                                                        <MenuItem value={2}>2</MenuItem>
                                                        <MenuItem value={3}>3</MenuItem>
                                                        <MenuItem value={4}>4</MenuItem>
                                                        <MenuItem value={5}>5</MenuItem>
                                                        <MenuItem value={6}>6</MenuItem>
                                                        <MenuItem value={7}>7</MenuItem>
                                                        <MenuItem value={8}>8</MenuItem>
                                                        <MenuItem value={9}>9</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </List>
                    </Paper>

                    <Paper sx={{margin: '1rem'}}>
                        <List>
                            {cartItems.map((item) => (
                                <ListItem key={item} sx={{display: 'flex', flexDirection: 'column'}}>
                                    <Typography variant="subtitle1">{item.name}</Typography>
                                    <Typography variant="subtitle2">${item.price}</Typography>
                                    <Typography variant="caption"> Item #: {item.product_num}</Typography>
                                </ListItem>
                            ))}
                        </List>
                        <Box sx={{display: 'flex', flexDirection: 'column', margin: '1rem', textAlign: 'center'}}>
                            <Typography sx={{marginLeft: '.5rem', fontWeight: '600'}}>Subtotal: ${total}</Typography>
                            <Button variant="outlined" sx={{textDecoration: 'none', color: 'text.primary', margin: '1rem 0 .5rem'}}>
                                Place Order
                            </Button>
                            <Button 
                                variant="outlined"
                                sx={{textDecoration: 'none', color: 'text.primary', margin: '.5rem 0'}}
                                onClick={handleClose}
                            >
                                Cancel
                            </Button>
                        </Box>
                    </Paper>
                </Box>
                </Fade>

            </Container>

            ) : null }
        </>

        )
    }
export default ShoppingCart;