import { useStoreState, useStoreActions } from "easy-peasy";

export default function useOrders() {
    const orders = useStoreState((state) => state.orders.data);

    const fetchOrders = useStoreActions((actions) => {
        console.log(actions);
        return actions.orders.fetchOrders;
      });

    const patchOrders = useStoreActions((actions) => {
        console.log(actions)
        return actions.orders.editOrder; 
    });

    const deleteOrders = useStoreActions((actions) => {
        console.log(actions)
        return actions.orders.deleteOrder;
    })
      return(
        orders, 
        fetchOrders,
        patchOrders,
        deleteOrders
      );
}