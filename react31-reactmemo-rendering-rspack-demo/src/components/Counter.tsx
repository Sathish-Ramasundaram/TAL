import React from "react";

type Props = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Counter = React.memo(({ count, setCount }: Props) => {

  console.log(`Counter rendered at: ${new Date().toLocaleTimeString()}`);

  return (
    <main style={{ padding: "20px" }}>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </main>
  );
});

export default Counter;
