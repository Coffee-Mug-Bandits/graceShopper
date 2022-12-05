import { action, thunk } from "easy-peasy";
import axios from "axios";

export const users = {
  selectedUser: {
    username: "Guest",
  },
  createUser: thunk(async (actions, payload) => {
    const { data } = await axios.post("/routes/user/register", payload);
    return actions.selectUser(data);
  }),
  selectUser: action((state, payload) => {
    return (state.selectedUser = payload);
  }),
  loginUser: thunk(async (actions, payload) => {
    const { data } = await axios.post(`/routes/user/login`, payload);
    return actions.selectUser(data);
  }),
  logoutUser: thunk(async (actions, payload) => {
    const { data } = await axios.post(`/routes/user/logout`);
    return actions.selectUser({ username: "Guest" });
  }),
  // getMe => hits your me route!
  getMe: thunk(async (actions, payload) => {
    const { data } = await axios.get("/routes/user/me");
    if (data) {
      return actions.selectUser(data);
    }
  }),
};
