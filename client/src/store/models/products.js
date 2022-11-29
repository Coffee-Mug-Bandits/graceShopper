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
  addProduct: action((state, payload) => {
    state.data.push(payload);
  }),
  createProduct: thunk(async (actions, payload) => {
    const { data } = await axios.post("/routes/product", payload);
    actions.addProduct(data);
  }),
  selectProduct: action((state, payload) => {
    state.selectedProduct = payload;
  }),
  fetchProduct: thunk(async (actions, payload) => {
    console.log(payload);
    const { data } = await axios.get(`/routes/product/${payload}`);
    actions.selectProduct(data);
  }),
  addEditedProduct: action((state, payload) => {
    const newProducts = state.data.map((product) => {
      if (product.id === payload.id) return payload;
      else return product;
    });
    state.data = newProducts;
  }),
  editProduct: thunk(async (actions, payload) => {
    const { data } = await axios.patch(
      `/routes/product/${payload.id}`,
      payload.data
    );
    actions.addEditedProduct(data);
  }),
};
