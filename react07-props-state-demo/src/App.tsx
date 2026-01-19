import React from "react";
import PropsComponent from "./PropsComponent";
import StateComponent from "./StateComponent";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Props vs State Demo</h1>

      <PropsComponent name="Sathish" />
      <StateComponent />
    </div>
  );
}

export default App;
