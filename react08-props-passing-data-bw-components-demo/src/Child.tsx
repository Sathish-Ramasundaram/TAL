import React from "react";

/*
  Step 1: Define what data this component expects
*/
interface ChildProps {
  name: string;
  age: number;
}

/*
  Step 2: Receive props as function parameter
*/
function Child(props: ChildProps) {
  return (
    <div style={{ border: "2px solid green", padding: "10px" }}>
      <h2>Child Component</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Child;
