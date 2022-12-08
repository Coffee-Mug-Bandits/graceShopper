import { useEffect } from "react";
import useOrders from "../hooks/useOrders";
import OrderHistoryCard from "./Cards/OrderHistoryCard";

export default function OrderHistory() {
  const { fetchOrders } = useOrders();

  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <div>
      <OrderHistoryCard />
    </div>
  );
}
