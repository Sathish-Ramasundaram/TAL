import React, { useState } from "react";

export function withThemeCounter<P extends object>(
  WrappedComponent: React.ComponentType<
    P & {
      theme: "white" | "black";
      toggleTheme: () => void;
      whiteCount: number;
      blackCount: number;
    }
  >
) {
  const ComponentWithTheme = (props: P) => {
    const [theme, setTheme] = useState<"white" | "black">("white");
    const [whiteCount, setWhiteCount] = useState(1);
    const [blackCount, setBlackCount] = useState(0);

    const toggleTheme = () => {
      if (theme === "white") {
        setTheme("black");
        setBlackCount((c) => c + 1);
      } else {
        setTheme("white");
        setWhiteCount((c) => c + 1);
      }
    };

    return (
      <WrappedComponent
        {...props}
        theme={theme}
        toggleTheme={toggleTheme}
        whiteCount={whiteCount}
        blackCount={blackCount}
      />
    );
  };

  return ComponentWithTheme;
}
