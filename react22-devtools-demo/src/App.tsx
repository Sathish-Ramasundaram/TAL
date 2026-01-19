import React from "react";
import Counter from "./components/Counter";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🔍 React Developer Tools Demo</h1>
      <Counter initialCount={0} />
    </div>
  );
}

export default App;