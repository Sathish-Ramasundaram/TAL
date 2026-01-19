import React from "react";

type Props = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Counter = ({ count, setCount }: Props) => {
  console.log(
    `Counter rendered at: ${new Date().toLocaleTimeString()}`
  );

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );

};

export default Counter;
