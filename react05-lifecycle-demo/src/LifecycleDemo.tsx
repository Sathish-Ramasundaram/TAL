import React from "react";

interface State {
  count: number;
}

class LifecycleDemo extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor: Component created");
  }

  componentDidMount() {
    console.log("componentDidMount: Component mounted");
  }

  componentDidUpdate(prevProps: {}, prevState: State) {
    console.log("componentDidUpdate: Component updated");
    console.log("Previous count:", prevState.count);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Component will be removed");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("Render: UI rendered");
    return (
      <div style={{ padding: "20px" }}>
        <h2>React Lifecycle Methods Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default LifecycleDemo;
