import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useUsers from "../hooks/useUsers";

export function Navbar() {
  const navigate = useNavigate();

  useEffect(() => {
    // call fetchMe, if this respons with a user then you can getch the user cart
    // call fetchCart
  }, []);

  const { selectedUser, logoutUser } = useUsers();
  return (
    <div className="flex justify-around bg-yellow-900 h-12 items-center text-white">
      {console.log(selectedUser)}
      <Link to="/products">Shop</Link>
      {selectedUser.username === "Guest" ? (
        <>
          <Link to="/register">Register</Link>

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
              navigate("/products");
            }}
          >
            Logout
          </button>
        </>
      ) : null}
    </div>
  );
}
