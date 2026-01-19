import React from "react";

class ClassComponent extends React.Component {
  constructor(props: {}) {
    super(props);
    console.log("Class Component created");
  }

  render() {
    return (
      <div style={{ border: "2px solid blue", padding: "10px" }}>
        <h2>Class Component</h2>
        <p>This is a class-based component.</p>
      </div>
    );
  }
}

export default ClassComponent;
