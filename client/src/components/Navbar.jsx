import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import useUsers from "../hooks/useUsers";

export function Navbar() {
  const navigate = useNavigate();
  const { selectedUser, logoutUser, getMe } = useUsers();
  const { fetchCart, cart } = useCart();

  useEffect(() => {
    // call fetchMe, if this respons with a user then you can getch the user cart
    getMe();
    // call fetchCart
    if (selectedUser) {
      fetchCart();
    }
  }, []);

  return (
    <nav class="w-full sticky top-0 z-50">
      <div className="flex justify-around bg-yellow-900 h-12 items-center text-white">
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

            <Link to="/profile">My Account</Link>
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
