import { useStoreState, useStoreActions } from "easy-peasy";

export default function useUsers() {
  const createUser = useStoreActions((actions) => actions.users.createUser);
  const selectedUser = useStoreState((state) => state.users.selectedUser);
  const loginUser = useStoreActions((actions) => actions.users.loginUser);
  const logoutUser = useStoreActions((actions) => actions.users.logoutUser);
  return {
    createUser,
    selectedUser,
    loginUser,
    logoutUser,
  };
}
