import React from "react";
import UseStateVsUseEffect from "./UseStateVsUseEffect";
import LightSwitch from "./LightSwitch";
import MultiStateEffectDemo from "./MultiStateEffectDemo";

function App() {
  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>useState vs useEffect Demo</h1>
        <UseStateVsUseEffect />
      </div>
      <div style={{ padding: "20px" }}>
        <h1>Light ON / OFF Demo</h1>
        <LightSwitch />
      </div>
      <div style={{ padding: "20px" }}>
        <h1>Multi-State & Multi-Effect Demo</h1>
        <MultiStateEffectDemo />
      </div>
    </>
  );
}

export default App;

// import React from "react";
// import LightSwitch from "./LightSwitch";

// function App() {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Light ON / OFF Demo</h1>
//       <LightSwitch />
//     </div>
//   );
// }

// export default App;


// import React from "react";
// import MultiStateEffectDemo from "./MultiStateEffectDemo";

// function App() {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Multi-State & Multi-Effect Demo</h1>
//       <MultiStateEffectDemo />
//     </div>
//   );
// }

// export default App;
