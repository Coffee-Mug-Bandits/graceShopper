import { useEffect } from "react";
import useCart from "../hooks/useCart";
import useUsers from "../hooks/useUsers";
import CartCard from "./Cards/CartCard";

export default function Cart() {
  const { cart, fetchCart } = useCart();
  // const { selectedUser } = useUsers();
  console.log(fetchCart);
  useEffect(() => {
    fetchCart();
  }, []);
  console.log("cart", cart);
  return (
    <div>
      <CartCard cart={cart} />
    </div>
  );
}
