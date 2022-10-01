import React from "react";
import { Link, useNavigate } from "react-router-dom";
import removeCookie from "../services/cookies/removeTokenCookie";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to dashboard</h1>
      <Link to="/login">Voltar para o login</Link>
      <button
        onClick={() => {
          removeCookie("Nekot");
          removeCookie("ID");
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
