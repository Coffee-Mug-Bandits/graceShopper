import { action, thunk } from "easy-peasy";
import axios from "axios";

export const order_products = {
  data: [],
  setOrder_Products: action((state, payload) => {
    state.data = payload;
  }),
};
