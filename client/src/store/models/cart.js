import { action, thunk } from "easy-peasy";
import axios from "axios";

export const cart = {
  cart: {},
  fetchCart: thunk(async (actions, payload) => {
    const { data } = await axios.get("/routes/user/me/cart", payload);
    actions.setCart(data);
  }),

  setCart: action((state, payload) => {
    state.cart = payload;
  }),
  addUpdatedQty: action((state, payload) => {
    const newQty = state.cart.order_products.map((product) => {
      if (product.id === payload.product_id) return payload;
      else return product;
    });
    state.cart = newQty;
  }),
  updateQty: thunk(async (actions, payload) => {
    const { data } = await axios.patch(
      `/routes/order_products/${payload.order_id}/${payload.product_id}`,
      payload.qty
    );
    actions.addUpdatedQty(data);
  }),
  removeDeletedItem: action((state, payload) => {
    const resetCart = state.cart.order_products.map((product) => {
      if (product.id === payload.product_id) return payload;
      else return product;
    });
    state.cart = resetCart;
  }),

  deleteItem: thunk(async (actions, payload) => {
    const { data } = await axios.delete(
      `/routes/order_products/${payload.order_id}/${payload.product_id}`,
      payload.data
    );
    actions.removeDeletedItem(data);
  }),

  createOrderProduct: thunk(async (actions, payload) => {
    await axios.post(
      `/routes/order_products/${payload.order_id}/${payload.product_id}`
    );
    const { data } = await axios.get("/routes/user/me/cart", payload);
    actions.setCart(data);
  }),
};
