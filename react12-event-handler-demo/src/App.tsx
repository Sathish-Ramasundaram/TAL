import React, { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setName(event.target.value);
  };

  const handleFormSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    alert(`Form submitted! Name: ${name}`);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>React + Rspack Event Handlers</h1>

      <h2>Button Click</h2>
      <p>Clicked {count} times</p>
      <button onClick={handleButtonClick}>Click Me</button>

      <hr />

      <h2>Input Change</h2>
      <input
        type="text"
        placeholder="Enter name"
        onChange={handleInputChange}
      />
      <p>Name: {name}</p>

      <hr />

      <h2>Form Submit</h2>
      <form onSubmit={handleFormSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
