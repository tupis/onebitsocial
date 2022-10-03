import React from "react";
import Logout from "../services/logout/Logout";

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to dashboard</h1>
      <button onClick={() => Logout()}>Logout</button>
    </div>
  );
};

export default Dashboard;
