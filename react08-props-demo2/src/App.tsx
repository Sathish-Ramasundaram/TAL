import React from "react";
import Dashboard from "./components/Dashboard";

function App() {
  const username = "Sathish";

  return (
    <div>
      <h1>React Props Demo</h1>
      <Dashboard username={username} />
    </div>
  );
}

export default App;