import { useEffect } from "react";
import useUsers from "../hooks/useUsers";
import { useParams, useNavigate } from "react-router-dom";

export default function Users() {
  const { method } = useParams();
  const navigate = useNavigate();
  const { createUser, selectedUser, loginUser, logoutUser } = useUsers();
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          let result;
          if (method === "register") {
            result = createUser();
          }
          if (method === "login") {
            result = loginUser();
          }
          //    console.log(result);
          //    if (result.user) {
          //      setPassword("");
          //      setUsername("");
          //      setLoggedIn(true);
          //      navigate("/");
          //    } else {
          //      setError(result.message);
          //    }
        }}
      ></form>
    </div>
  );
}
