import { useEffect, useState } from "react";
import useUsers from "../hooks/useUsers";
import { useParams, useNavigate } from "react-router-dom";

export default function AuthForm() {
  const { method } = useParams();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const { createUser, selectedUser, loginUser, logoutUser } = useUsers();
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          let result;
          if (method === "register") {
            result = await createUser(username, password, email, location);
          }
          if (method === "login") {
            result = await loginUser(username, password);
          }
          // console.log(result);
          if (result.user) {
            setPassword("");
            setUsername("");
            navigate("/");
          } else {
            setError(result.message);
          }
        }}
      >
        {error && <h4>{error}</h4>}
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
        <button type="submit">
          {method === "register" ? "Register" : "Login"}
        </button>
      </form>
    </div>
  );
}
