import React, { useState, useEffect } from "react";

function UseStateVsUseEffect() {
  // useState: stores data
  const [count, setCount] = useState<number>(0);

  // useEffect: runs code when something changes
  useEffect(() => {
    console.log("Count changed to:", count);
  }, [count]); // runs when count changes

  return (
    <div style={{ border: "2px solid blue", padding: "10px" }}>
      <h2>useState vs useEffect</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default UseStateVsUseEffect;
