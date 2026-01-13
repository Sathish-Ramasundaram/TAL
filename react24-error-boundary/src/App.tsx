import React from "react";
// import ErrorBoundary from "./components/ErrorBoundary";
import BuggyComponent from "./components/BuggyComponent";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🧯 Error Boundary Demo</h1>

      {/* <ErrorBoundary> */}
        <BuggyComponent />
      {/* </ErrorBoundary> */}
    </div>
  );
}

export default App;