import React from "react";
import Child from "./Child";

function Parent() {
  return (
    <div style={{ border: "2px solid blue", padding: "10px" }}>
      <h2>Parent Component</h2>

      {/* Passing data to Child */}
      <Child name="Sathish" age={22} />
    </div>
  );
}

export default Parent;
