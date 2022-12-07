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
    imageUrl:
      "https://res.cloudinary.com/dsxtrklv3/image/upload/v1670396049/Coffee/1_gunt05.png",
    rating: 4,
  },
  {
    seller_id: 2,

    name: "Colombian Coffee Grounds",
    price: 13,
    stock_qty: 57,
    description: "Delicious coffee from Colombia",
    imageUrl:
      "https://res.cloudinary.com/dsxtrklv3/image/upload/v1670396043/Coffee/2_aogzox.png",
    rating: 5,
  },
  {
    seller_id: 3,
    name: "Coffee Pot",
    price: 7,
    stock_qty: 12,
    description: "Brew your coffee bright and early",
    imageUrl:
      "https://res.cloudinary.com/dsxtrklv3/image/upload/v1670396038/Coffee/3_qpkwzx.png",
    rating: 3,
  },
  {
    seller_id: 2,
    name: "Coffee Mug 4oz",
    price: 8,
    stock_qty: 20,
    description: "You a mug expert? Didn't think so, so buy this one",
    imageUrl:
      "https://res.cloudinary.com/dsxtrklv3/image/upload/v1670396032/Coffee/4_jvoqkp.png",
    rating: 4,
  },
  {
    seller_id: 3,
    name: "Coffee Mug 8oz",
    price: 11,
    stock_qty: 12,
    description: "Like the one earlier but bigger and better",
    imageUrl:
      "https://res.cloudinary.com/dsxtrklv3/image/upload/v1670396027/Coffee/5_ixyjaf.png",
    rating: 3,
  },
  {
    seller_id: 1,
    name: "Coffee Mug 14oz",
    price: 15,
    stock_qty: 17,
    description:
      "That 8oz mug? Pathetic, this one is better, don't listen to that last guy",
    imageUrl:
      "https://res.cloudinary.com/dsxtrklv3/image/upload/v1670396022/Coffee/6_b9f4ck.png",
    rating: 1,
  },
  {
    seller_id: 4,
    name: "Travel Tumbler",
    price: 13,
    stock_qty: 12,
    description:
      "For busy people who aren't able to spend quality time with their coffee or children",
    imageUrl:
      "https://res.cloudinary.com/dsxtrklv3/image/upload/v1670396017/Coffee/7_agfgtq.png",
    rating: 3,
  },
  {
    seller_id: 1,
    name: "Espresso Machine",
    price: 150,
    stock_qty: 12,
    description: "Unless you're an addict this is a terrible investment",
    imageUrl:
      "https://res.cloudinary.com/dsxtrklv3/image/upload/v1670396011/Coffee/8_ffpqpg.png",
    rating: 4,
  },
  {
    seller_id: 3,
    name: "Coffee Filters",
    price: 10,
    stock_qty: 12,
    description: "How many are in the package? Roll a d20 to find out",
    imageUrl:
      "https://res.cloudinary.com/dsxtrklv3/image/upload/v1670396005/Coffee/9_betvmc.png",
    rating: 3,
  },
  {
    seller_id: 4,
    name: "Spoons",
    price: 3,
    stock_qty: 11,
    description: "Imagine selling any other utensil",
    imageUrl:
      "https://res.cloudinary.com/dsxtrklv3/image/upload/v1670395998/Coffee/10_bcso7z.png",
    rating: 3,
  },
  {
    seller_id: 1,
    name: "Warming Plate",
    price: 26,
    stock_qty: 6,
    description: "Doubles as a tattoo remover",
    imageUrl:
      "https://res.cloudinary.com/dsxtrklv3/image/upload/v1670395992/Coffee/11_sz4gcr.png",
    rating: 3,
  },
  {
    seller_id: 4,
    name: "Sugar",
    price: 4,
    stock_qty: 12,
    description: "I'm not gonna sugarcoat it, this is overpriced",
    imageUrl:
      "https://res.cloudinary.com/dsxtrklv3/image/upload/v1670395986/Coffee/12_rdvfhl.png",
    rating: 3,
  },
  {
    seller_id: 4,
    name: "Powdered Creamer",
    price: 5,
    stock_qty: 12,
    description: "Can't think of a quip for this one, buy it anyways",
    imageUrl:
      "https://res.cloudinary.com/dsxtrklv3/image/upload/v1670395980/Coffee/13_tbyjmq.png",
    rating: 3,
  },
  {
    seller_id: 3,
    name: "Liquid Flavored Creamer",
    price: 7,
    stock_qty: 12,
    description: "Just drink straight out the container, I don't judge",
    imageUrl:
      "https://res.cloudinary.com/dsxtrklv3/image/upload/v1670395969/Coffee/14_gy1xft.png",
    rating: 3,
  },
  {
    seller_id: 2,
    name: "Wall Mounted Mug Rack",
    price: 30,
    stock_qty: 12,
    description: "To display our amazing products!",
    imageUrl:
      "https://res.cloudinary.com/dsxtrklv3/image/upload/v1670395956/Coffee/15_zf7loc.png",
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
