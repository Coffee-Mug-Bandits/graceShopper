import { useEffect } from "react";
import useCart from "../hooks/useCart";
import useUsers from "../hooks/useUsers";
import CartCard from "./Cards/CartCard";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, fetchCart, updateQty, deleteItem } = useCart();
  const { getMe } = useUsers();
  const navigate = useNavigate();
  console.log(fetchCart);
  useEffect(() => {
    fetchCart();
  }, []);
  console.log("cart", cart);
  return (
    <div className="h-96 max-w-full flex flex-col justify-around flex-wrap">
      <CartCard
        cart={cart}
        updateQty={updateQty}
        deleteItem={deleteItem}
        fetchCart={fetchCart}
        getMe={getMe}
      />
      <button
      className="flex justify-center w-30 bg-yellow-50 hover:bg-yellow-200 hover: w-80 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
       onClick={() => {
      navigate("/checkout")
       }}
      >Checkout</button>
    </div>
  );
}
