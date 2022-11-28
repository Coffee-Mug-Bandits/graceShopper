import { action, thunk } from "easy-peasy";
import axios from "axios";

export const users = {
  data: [],
  setUsers: action((state, payload) => {
    state.data = payload;
  }),
};
