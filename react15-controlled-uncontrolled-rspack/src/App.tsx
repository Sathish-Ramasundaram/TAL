// import React, { useRef, useState } from "react";

// function App() {
//   // Controlled component state
//   const [name, setName] = useState<string>("");

//   // Uncontrolled component ref
//   const ageRef = useRef<HTMLInputElement>(null);

//   const handleControlledChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setName(event.target.value);
//   };

//   const handleUncontrolledSubmit = () => {
//     alert(`Age (from DOM): ${ageRef.current?.value}`);
//   };

//   return (
//     <div style={{ padding: "40px" }}>
//       <h1>Controlled vs Uncontrolled Components</h1>

//       <h2>✅ Controlled Input</h2>
//       <input
//         type="text"
//         value={name}
//         onChange={handleControlledChange}
//         placeholder="Enter your name"
//       />
//       <p>Value from React state: {name}</p>

//       <hr />

//       <h2>❌ Uncontrolled Input</h2>
//       <input
//         type="number"
//         ref={ageRef}
//         placeholder="Enter your age"
//       />
//       <br /><br />
//       <button onClick={handleUncontrolledSubmit}>
//         Get Age
//       </button>
//     </div>
//   );
// }

// export default App;

import React, { useRef, useState } from "react";

function App() {
  // Controlled state
  const [name, setName] = useState<string>("");

  // Uncontrolled ref
  const ageRef = useRef<HTMLInputElement>(null);

  // State just for DISPLAY (not control)
  const [age, setAge] = useState<string>("");

  const handleNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setName(event.target.value);
  };

  const handleShowAge = () => {
    setAge(ageRef.current?.value || "");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Controlled vs Uncontrolled</h1>

      <h2>✅ Controlled Input (Name)</h2>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter name"
      />
      <p>Name from React state: {name}</p>

      <hr />

      <h2>❌ Uncontrolled Input (Age)</h2>
      <input
        type="number"
        ref={ageRef}
        placeholder="Enter age"
      />
      <br /><br />
      <button onClick={handleShowAge}>
        Show Age
      </button>

      <p>Age from DOM snapshot: {age}</p>
    </div>
  );
}

export default App;
