import { useEffect } from "react";
import useOrders from "../hooks/useOrders";

export default function Orders () {
    const { orders, fetchOrders } = useOrders(); 

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div>
          {orders.map((order) => {
            console.log(order);
            return <div>{JSON.stringify(order)}</div>;
          })}
        </div>
      );
}


