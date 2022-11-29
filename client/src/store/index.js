import { createStore } from "easy-peasy";
import { products } from "./models/products";
import { users } from "./models/users";
import { orders } from "./models/orders";
import { order_products } from "./models/order_products";
const store = createStore({ users, products, orders, order_products });

export default store;
