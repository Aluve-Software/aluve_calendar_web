import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "../App.css";

function LogoutButton(props) {
  const { logout } = useAuth0();
  return (
    <div>
      <button onClick={logout} className="loginButton">
        Logout
      </button>
    </div>
  );
}

export default LogoutButton;