import React, { useState } from "react";

/* CHILD COMPONENT */
function Message(props: { text: string }) {
  return <h2>{props.text}</h2>;
}

/* PARENT COMPONENT */
function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Props and State Demo</h1>

      {/* Props */}
      <Message text="This text is passed as props" />

      {/* State */}
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
}

export default App;
