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
    price: 7,
    stock_qty: 7,
    description: "A red mug to drink from in the morning",
    rating: 4,
  },
  {
    seller_id: 2,
    name: "Colombian Coffee Grounds",
    price: 13,
    stock_qty: 57,
    description: "delicious coffee from Colombia",
    rating: 5,
  },
  {
    seller_id: 3,
    name: "Coffee Pot",
    price: 7,
    stock_qty: 12,
    description: "Brew your coffee bright and early",

    rating: 3,
  },
  {
    seller_id: 2,
    name: "Coffee Mug 4oz",
    price: 8,
    stock_qty: 20,
    description: "You a mug expert? Didn't think so, so buy this one",

    rating: 4,
  },
  {
    seller_id: 3,
    name: "Coffee Mug 8oz",
    price: 11,
    stock_qty: 12,
    description: "Like the one earlier but bigger and better",

    rating: 3,
  },
  {
    seller_id: 1,
    name: "Coffee Mug 14oz",
    price: 15,
    stock_qty: 17,
    description: "That 8oz mug? Pathetic, this one is better, don't listen to that last guy",

    rating: 1,
  },
  {
    seller_id: 4,
    name: "Travel Tumbler",
    price: 13,
    stock_qty: 12,
    description: "For busy people who aren't able to spend quality time with their coffee or children",

    rating: 3,
  },
  {
    seller_id: 1,
    name: "Espresso Machine",
    price: 150,
    stock_qty: 12,
    description: "Unless you're an addict this is a terrible investment",

    rating: 4,
  },
  {
    seller_id: 3,
    name: "Coffee Filters",
    price: 10,
    stock_qty: 12,
    description: "How many are in the package? Roll a d20 to find out",

    rating: 3,
  },
  {
    seller_id: 4,
    name: "Spoons",
    price: 3,
    stock_qty: 11,
    description: "Imagine selling any other utensil",

    rating: 3,
  },
  {
    seller_id: 1,
    name: "Warming Plate",
    price: 26,
    stock_qty: 6,
    description: "Doubles as a tattoo remover",

    rating: 3,
  },
  {
    seller_id: 4,
    name: "Sugar",
    price: 4,
    stock_qty: 12,
    description: "I'm not gonna sugarcoat it, this is overpriced",

    rating: 3,
  },
  {
    seller_id: 4,
    name: "Powdered Creamer",
    price: 5,
    stock_qty: 12,
    description: "Can't think of a quip for this one, buy it anyways",

    rating: 3,
  },
  {
    seller_id: 3,
    name: "Liquid Flavored Creamer",
    price: 7,
    stock_qty: 12,
    description: "Just drink straight out the container, I don't judge",

    rating: 3,
  },
  {
    seller_id: 2,
    name: "Wall Mounted Mug Rack",
    price: 30,
    stock_qty: 12,
    description: "To display our amazing products!",

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
