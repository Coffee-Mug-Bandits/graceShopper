import { action, thunk } from "easy-peasy";
import axios from "axios";

export const products = {
  data: [],
  setProducts: action((state, payload) => {
    state.data = payload;
  }),
};
