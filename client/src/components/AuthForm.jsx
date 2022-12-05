import { useEffect, useState } from "react";
import useUsers from "../hooks/useUsers";
import { useParams, useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import { AxiosError } from "axios";

export default function AuthForm() {
  const { method } = useParams();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const { cart, fetchCart } = useCart();
  const { createUser, selectedUser, loginUser, logoutUser } = useUsers();
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          let result;
          if (method === "register") {
            result = await createUser({ username, password, email, location });
          }
          if (method === "login") {
            result = await loginUser({ username, password });
          }
          console.log(result);
          if (result) {
            // fetch your cart
            console.log(fetchCart);
            fetchCart();
            setPassword("");
            setUsername("");
            navigate("/products");
          } else {
            console.log(result);
            setError(AxiosError.response.data.message);
          }
        }}
      >
        {error && <h4>{error}</h4>}
        {method === "register" ? (
          <>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="username"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="password"
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="email"
            />

            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              placeholder="location"
            />
          </>
        ) : null}
        {method === "login" ? (
          <>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="username"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="password"
            />
          </>
        ) : null}
        <button type="submit">
          {method === "register" ? "Register" : "Login"}
        </button>
      </form>
    </div>
  );
}
