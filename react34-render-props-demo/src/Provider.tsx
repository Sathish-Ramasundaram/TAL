import React from "react";

type ProviderProps = {
  render: (value: number) => React.ReactNode;
};

function Provider(props: ProviderProps) {
  const value = 10;

  return <>{props.render(value)}</>;
}

export default Provider;
