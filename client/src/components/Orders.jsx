import { useEffect } from "react";
import useOrders from "../hooks/useOrders";

export default function Orders() {
  const { orders, fetchOrders } = useOrders();

  console.log(fetchOrders);
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      {console.log(orders)}
      {orders.map((order) => {
        console.log(order);
        return <div>{JSON.stringify(order)}</div>;
      })}
    </div>
  );
}
