import React, { useState } from "react";

interface CounterProps {
  initialCount: number;
}

const Counter: React.FC<CounterProps> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <h2>Counter</h2>
      <p>
        Current Count: <strong>{count}</strong>
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>{" "}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;