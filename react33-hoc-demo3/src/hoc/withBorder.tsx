import React from "react";

export function withBorder<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const ComponentWithBorder = (props: P) => {
    return (
      <div
        style={{
          border: "2px solid blue",
          padding: "10px",
          margin: "10px 0",
        }}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };

  return ComponentWithBorder;
}
