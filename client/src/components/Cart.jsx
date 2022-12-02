import { useEffect } from "react";
import useCart from "../hooks/useCart";
import useUsers from "../hooks/useUsers";

export default function Cart() {
  const { cart, fetchCart } = useCart();
  // const { selectedUser } = useUsers();
  console.log(fetchCart);
  useEffect(() => {
    fetchCart();
  }, []);

  return <div>{JSON.stringify(cart)}</div>;
}
