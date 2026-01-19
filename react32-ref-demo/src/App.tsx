import React, {useRef} from "react";

function App() {
  const countRef = useRef(0);

  console.log("App Rendered");

  return (
    <>
    <h1>{countRef.current}</h1>
    <button onClick={() => countRef.current++}>+</button>
    </>
  );

}

export default App;