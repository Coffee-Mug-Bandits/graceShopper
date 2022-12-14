import { useStoreState, useStoreActions } from "easy-peasy";

export default function useCart() {
  const cart = useStoreState((state) => {
    console.log(state);
    return state.cart.cart;
  });

  const fetchCart = useStoreActions((actions) => {
    console.log(actions.cart.fetchCart);
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

  const createOrderProduct = useStoreActions((actions) => {
    return actions.cart.createOrderProduct;
  });
  const checkoutOrder = useStoreActions(
    (actions) => actions.cart.checkoutOrder
  );

  return {
    cart,
    fetchCart,
    updateQty,
    deleteItem,
    createOrderProduct,
    checkoutOrder,
  };
}
