import { createStore } from "easy-peasy";
import { products } from "./models/products";
import { users } from "./models/users";
import { cart } from "./models/cart";
import { orders } from "./models/orders";
const store = createStore({ users, products, cart, orders });

export default store;
