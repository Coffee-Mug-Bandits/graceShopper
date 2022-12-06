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
            try {
              result = await createUser({
                username,
                password,
                email,
                location,
              });
            } catch (err) {
              setError(err.response.data.message);
            }
          }
          if (method === "login") {
            try {
              result = await loginUser({ username, password });
            } catch (err) {
              setError(err.response.data.message);
            }
          }
          console.log(result);
          console.log(error);

          // fetch your cart
          if (result) {
            console.log(fetchCart);
            fetchCart();
            setPassword("");
            setUsername("");
            navigate("/products");
          }
        }}
      >
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
      {error && <h4>{error}</h4>}
    </div>
  );
}
