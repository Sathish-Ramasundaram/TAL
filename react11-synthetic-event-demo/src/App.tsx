// import React, { useState } from "react";

// function App() {
//   // State to store click count
//   const [count, setCount] = useState<number>(0);

//   // Synthetic Event handler
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     console.log("Synthetic Event:", event);
//     console.log("Button clicked!");

//     setCount(count + 1);
//   };

//   return (
//     <div style={{ padding: "40px" }}>
//       <h1>Synthetic Event Demo</h1>

//       <p>Button clicked {count} times</p>

//       <button onClick={handleClick}>
//         Click Me
//       </button>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Synthetic Event:", event);
    setName(event.target.value);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Synthetic Event Input Demo</h1>

      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
      />

      <p>Your name: {name}</p>
    </div>
  );
}

export default App;
