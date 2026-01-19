import React, { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // React calls this when a child crashes
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: any) {
    console.error("Error caught by Error Boundary:", error);
    console.error("Error info:", info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>⚠️ Something went wrong. Please try again.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;