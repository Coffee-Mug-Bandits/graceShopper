import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import useOrders from "../hooks/useOrders";
import useUsers from "../hooks/useUsers";

export function Navbar() {
  const navigate = useNavigate();
  const { selectedUser, logoutUser, getMe } = useUsers();
  const { fetchCart, cart } = useCart();
  // const { fetchOrders } = useOrders();

  useEffect(() => {
    // call fetchMe, if this respons with a user then you can getch the user cart
    getMe();
    // call fetchCart
    if (selectedUser) {
      fetchCart();
      // fetchOrders();
    }
  }, []);

  return (
    <nav class="w-full sticky top-0 z-50">
      <div className="flex justify-around bg-yellow-900 h-12 items-center text-white">
        <h1 className="flex justify-center text-md font-mono font-extrabold">
          Welcome to Heist Coffee
        </h1>

        {console.log(selectedUser)}
        <Link to="/">Shop</Link>
        {selectedUser.username === "Guest" ? (
          <>
            <Link to="/login">Login</Link>
          </>
        ) : null}

        {selectedUser.username !== "Guest" ? (
          <>
            <Link to="/cart">My Cart</Link>

            <Link to="/myOrders">My Orders</Link>
            <button
              onClick={() => {
                logoutUser();
                navigate("/");
              }}
            >
              Logout
            </button>
          </>
        ) : null}
      </div>
    </nav>
  );
}
