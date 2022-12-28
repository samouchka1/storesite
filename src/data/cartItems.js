import { faker } from '@faker-js/faker';

export const cartItems = [
    {
      id: 1,
      name: 'Men\'s casual shirt',
      image: 'cart-mens-shirt.jpg',
      // color: 'Blue',
      size: 'Large',
      description: faker.lorem.lines(2),
      price: 19.99,
      quantity: 1,
      product_num: faker.finance.account(4),
    },
    {
      id: 2,
      name: 'Women\'s outdoor pants',
      image: 'cart-womens-pants.jpg',
      // color: 'Green',
      size: 'Medium',
      description: faker.lorem.lines(2),
      price: 24.99,
      quantity: 1,
      product_num: faker.finance.account(4),
    }
  ]

export const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);