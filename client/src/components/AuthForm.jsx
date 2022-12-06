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
    <div className="flex justify-center items-center p-10 bg-amber-50 border-amber-900 border-2 h-96 w-60 mx-80 my-40">
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
              className="shadow-xl mb-2 italic"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="username"
            />
            <input
              className="shadow-xl mb-2 italic"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="password"
            />

            <input
              className="shadow-xl mb-2 italic"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="email"
            />

            <input
              className="shadow-xl mb-2 italic"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              placeholder="location"
            />
          </>
        ) : null}
        {method === "login" ? (
          <>
            {/* <h2 className="flex font-bold italic text-2xl justify-center pb-6">
              LOGIN
            </h2> */}
            <input
              className="shadow-xl mb-2 italic"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="username"
            />
            <input
              className="shadow-xl mb-2 italic"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="password"
            />
          </>
        ) : null}
        <button
          className="bg-yellow-900 text-yellow-50 font-bold w-44 h-8 py-1 px-4 rounded"
          type="submit"
        >
          {method === "register" ? "Register" : "Login"}
        </button>
      </form>
      {error && <h4>{error}</h4>}
    </div>
  );
}
