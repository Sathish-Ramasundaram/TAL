import React, { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("crashed:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ background: "#fee2e2", padding: "10px" }}>
          <h2>⚠️ failed to load. We are working on it</h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;