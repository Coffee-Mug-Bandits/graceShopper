const Users = [
  {
    username: "camden",
    password: "1234",
    email: "camden@mail.com",
    location: "Los Angeles",
    isAdmin: false,
  },
  {
    username: "aundrina",
    password: "12345",
    email: "aundrina@mail.com",
    location: "Bay Area",
    isAdmin: false,
  },
  {
    username: "wyatt",
    password: "123456",
    email: "wyatt@mail.com",
    location: "Bay Area",
    isAdmin: false,
  },
  {
    username: "angie",
    password: "1234567",
    email: "angie@mail.com",
    location: "Bay Area",
    isAdmin: false,
  },
];

const Order = [
  {
    user_id: 1,
    totalAmount: 2995,

    is_cart: true,
  },
  {
    user_id: 2,
    totalAmount: 4999,

    is_cart: true,
  },
  {
    user_id: 3,
    totalAmount: 1427,

    is_cart: false,
  },
  {
    user_id: 4,
    totalAmount: 3000,

    is_cart: true,
  },
];

const Product = [
  {
    seller_id: 1,
    name: "Red Coffee Mug",
    price: 600,
    stock_qty: 7,
    description: "A red mug to drink from in the morning",
    rating: 4,
  },
  {
    seller_id: 2,
    name: "Colombian Coffee Grounds",
    price: 1300,
    stock_qty: 57,
    description: "delicious coffee from Colombia",
    rating: 5,
  },
  {
    seller_id: 3,
    name: "Coffee Pot",
    price: 7000,
    stock_qty: 12,
    description: "Brew your coffee bright and early",
    rating: 3,
  },
];

const Order_products = [
  {
    order_id: 1,
    product_id: 3,
    qty: 1,
  },
  {
    order_id: 2,
    product_id: 1,
    qty: 3,
  },
  {
    order_id: 3,
    product_id: 2,
    qty: 2,
  },
];

const Seller = [
  {
    name: "Fred",
    messages: "You Suck",
    rating: 1,
  },
  {
    name: "Francine",
    messages: "You are alright",
    rating: 3,
  },
  {
    name: "George",
    messages: " You Rock",
    rating: 5,
  },
];

module.exports = {
  Users,
  Order,
  Product,
  Order_products,
  Seller,
};
