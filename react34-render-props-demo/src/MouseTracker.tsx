import React from "react";

type MouseTrackerProps = {
  render: (position: { x: number; y: number }) => React.ReactNode;
};

type MouseTrackerState = {
  x: number;
  y: number;
};

class MouseTracker extends React.Component<
  MouseTrackerProps,
  MouseTrackerState
> {
  state: MouseTrackerState = {
    x: 0,
    y: 0,
  };

  handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render() {
    return (
      <div
        style={{ height: "200px", border: "1px solid black" }}
        onMouseMove={this.handleMouseMove}
      >
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default MouseTracker;
