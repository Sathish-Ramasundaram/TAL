import React from "react";

// Step 1: Define what props this component expects
interface Props {
  name: string;
}

// Step 2: Receive props as function parameter
function PropsComponent(props: Props) {
  return (
    <div style={{ border: "2px solid green", padding: "10px" }}>
      <h2>Props Component</h2>
      <p>Hello, {props.name}</p>
    </div>
  );
}

export default PropsComponent;
