import React, { useState } from "react";

function Counter() {
  // Step 1: Create state
  const [count, setCount] = useState<number>(0);

  // Step 2: Function to update state
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ border: "2px solid blue", padding: "10px" }}>
      <h2>State Example (Counter)</h2>
      <p>Count: {count}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: "10px" }}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
