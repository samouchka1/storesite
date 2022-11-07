import { faker } from '@faker-js/faker';

export const cartItems = [
    {
      id: 1,
      name: 'Men\'s casual shirt',
      color: 'Blue',
      price: 19.99,
      quantity: 1,
      thumbnail: 'cart-mens-shirt.jpg',
      product_num: faker.finance.account(4),
    },
    {
      id: 2,
      name: 'Women\'s outdoor pants',
      color: 'Green',
      price: 24.99,
      quantity: 2,
      thumbnail: 'cart-womens-pants.jpg',
      product_num: faker.finance.account(4),
    }
  ]

export default cartItems;