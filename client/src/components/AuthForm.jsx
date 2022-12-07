import { useEffect, useState } from "react";
import useUsers from "../hooks/useUsers";
import { useParams, useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import { AxiosError } from "axios";
import { Link } from "react-router-dom";

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
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center  mt-40 p-10 bg-amber-50 border-amber-900 border-2 h-96 w-96">
        <form
          className=" flex flex-col items-center"
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
              navigate("/");
            }
          }}
        >
          {method === "register" ? (
            <>
              <h2 className="flex flex-col text-center text-black text-3xl font-bold font-mono">
                Welcome, Register Here!
              </h2>
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
                type="password"
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
              <h2 className="flex text-black text-center text-2xl font-bold font-mono">
                Welcome Back, Coffee Mug Bandit!
              </h2>
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
                type="password"
                placeholder="password"
              />
            </>
          ) : null}
          <button
            className=" flex bg-yellow-900 text-yellow-50 font-bold w-24 h-8 py-1 px-4 rounded"
            type="submit"
          >
            {method === "register" ? "Register" : "Login"}
          </button>
        </form>
        <h5 className="text-sm font-mono">
          Not a Member?{" "}
          <Link className="hover:underline cursor-pointer" to="/register">
            Register Here!
          </Link>
        </h5>

        {error && (
          <h4
            className="flex justify-center m-4 font-bold bg-red-100 border border-red-400 text-red-700 pl-4 pr-12 py-3 rounded relative"
            role="alert"
          >
            {error}
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                class="fill-current h-6 w-6 text-red-500"
                role="button"
                viewBox="0 0 20 20"
                onClick={() => {
                  setError("");
                }}
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </h4>
        )}
      </div>
    </div>
  );
}
