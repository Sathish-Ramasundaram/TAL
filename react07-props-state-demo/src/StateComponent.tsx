import React from "react";

interface State {
  count: number;
}

class StateComponent extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div style={{ border: "2px solid blue", padding: "10px" }}>
        <h2>State Component</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default StateComponent;
