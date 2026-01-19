import React from "react";

function Dashboard() {
  const data: any = undefined; // ❌ broken data

  return (
    <div>
      <h2>Dashboard Data: {data.value}</h2>
    </div>
  );
}

export default Dashboard;