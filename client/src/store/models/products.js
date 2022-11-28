import { action, thunk } from "easy-peasy";
import axios from "axios";

export const products = {
  data: [],
  selectedProduct: {},
  setProducts: action((state, payload) => {
    state.data = payload;
  }),
  fetchProducts: thunk(async (actions, payload) => {
    const { data } = await axios.get("/routes/product");
    actions.setProducts(data);
  }),
  addProduct: action((state, payload) => [state.data.push(payload)]),
  createProduct: thunk(async (actions, payload) => {
    const { data } = await axios.post("/routes/product");
    actions.addProduct(data);
  }),
  selectProduct: action((state, payload) => {
    state.selectedProduct = payload;
  }),
  fetchProduct: thunk(async (actions, payload) => {
    const { data } = await axios.get(`/routes/product/${payload}`);
    actions.selectProduct(data);
  }),
};
