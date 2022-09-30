import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to dashboard</h1>
      <Link to="/login">Voltar para o login</Link>
    </div>
  );
};

export default Dashboard;
