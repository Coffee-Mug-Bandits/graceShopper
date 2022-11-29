import { action, thunk } from "easy-peasy";
import axios from "axios";

export const users = {
  data: [],
  selectedUser: {},
  setUsers: action((state, payload) => {
    state.data = payload;
  }),
  addUser: action((state, payload) => {
    state.data.push(payload);
  }),
  createUser: thunk(async (actions, payload) => {
    const { data } = await axios.post("/routes/user/register", payload);
    actions.addUser(data);
    actions.selectUser(data);
  }),
  selectUser: action((state, payload) => {
    state.selectedUser = payload;
  }),
  loginUser: thunk(async (actions, payload) => {
    const { data } = await axios.post(`/routes/user/login`, payload);
    actions.selectUser(data);
  }),
  logoutUser: thunk(async (actions, payload) => {
    const { data } = await axios.post(`/routes/user/logout`);
    actions.selectUser(data);
  }),
};
