import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault(); // 🔥 MAIN CONCEPT

    setMessage("Form submitted without page reload!");
    console.log("Form handled by React");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>preventDefault Example</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter something"
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default App;
