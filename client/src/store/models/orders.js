import { action, thunk } from "easy-peasy";
import axios from "axios";

export const orders = {
  data: [],
  selectedOrder: {},
  setOrders: action((state, payload) => {
    state.data = payload;
  }),
  fetchOrders: thunk(async (actions, payload) => {
    const { data } = await axios.get("/routes/order");

    actions.setOrders(data);
  }),
  addOrder: action((state, payload) => {
    state.data.push(payload);
  }),
  createOrder: thunk(async (actions, payload) => {
    const { data } = await axios.post("/routes/order", payload);
    actions.addOrder(data);
  }),
  selectOrder: action((state, payload) => {
    state.selectedOrder = payload;
  }),
  fetchOrder: thunk(async (actions, payload) => {
    const { data } = await axios.get(`/routes/order/${payload}`);
    actions.selectOrder(data);
  }),
  addEditedOrder: action((state, payload) => {
    const newOrders = state.data.map((order) => {
      if (order.id === payload.id) return payload;
      else return order;
    });
    state.data = newOrders;
  }),
  editOrder: thunk(async (actions, payload) => {
    const { data } = await axios.patch(
      `/routes/order/${payload.id}`,
      payload.data
    );
    actions.addEditedOrder(data);
  }),
  selectDeletedOrder: action((state, payload) => {
    const deleteOrders = state.data.map((order) => {
      if (order.id === payload.id) return payload;
      else return order;
    });
    state.data = deleteOrders;
  }),
  deleteOrder: thunk(async (actions, payload) => {
    const deleteOrder = await axios.delete(
      `/routes/order/${payload.id}`,
      payload.data
    );
    actions.selectDeletedOrder(data);
  }),
};
