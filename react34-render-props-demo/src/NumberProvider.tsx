import React from "react";

type NumberProviderProps = {
  render: (value: number) => React.ReactNode;
};

function NumberProvider(props: NumberProviderProps) {
  const number = 10;

  return <>{props.render(number)}</>;
}

export default NumberProvider;
