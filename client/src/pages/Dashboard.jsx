import React from "react";

const Dashboard = ({ setAuth }) => {
  return (
    <div className="dashboard">
      <h1>DASHBOARD</h1>
      <button onClick={() => setAuth(false)}> log out</button>
    </div>
  );
};

export default Dashboard;
