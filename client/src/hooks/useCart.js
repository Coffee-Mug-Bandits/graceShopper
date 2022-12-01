import { useStoreState, useStoreActions } from "easy-peasy";

export default function useCart() {
  const cart = useStoreState((state) => {
    return state.cart.cart;
  });

  const fetchCart = useStoreActions((actions) => {
    console.log(actions);
    return actions.cart.fetchCart;
  });

  const updateQty = useStoreActions((actions) => {
    console.log(actions);
    return actions.cart.updateQty;
  });

  const deleteItem = useStoreActions((actions) => {
    console.log(actions);
    return actions.cart.deleteItem;
  });

  return cart, fetchCart, updateQty, deleteItem;
}
