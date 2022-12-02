import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useUsers from "../hooks/useUsers";

export function Navbar() {
  const navigate = useNavigate();

  const { selectedUser, logoutUser } = useUsers();
  return (
    <div>
      {console.log(selectedUser)}
      <Link to="/products">Shop</Link>
      <form>
        <input placeholder="Search"></input>
      </form>
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
