import React from "react";
import { Link, useNavigate } from "react-router-dom";
import removeCookie from "../services/cookies/removeTokenCookie";
import Logout from "../services/logout/Logout";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to dashboard</h1>
      <button onClick={() => Logout()}>Logout</button>
    </div>
  );
};

export default Dashboard;
