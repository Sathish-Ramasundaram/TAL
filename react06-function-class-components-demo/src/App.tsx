import React from "react";
import FunctionalComponent from "./FunctionalComponent";
import ClassComponent from "./ClassComponent";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Components Demo</h1>

      <FunctionalComponent />
      <ClassComponent />
    </div>
  );
}

export default App;
