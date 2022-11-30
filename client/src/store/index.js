import { createStore } from "easy-peasy";
import { products } from "./models/products";
import { users } from "./models/users";
import { orders } from "./models/orders";
const store = createStore({ users, products, orders });

export default store;
