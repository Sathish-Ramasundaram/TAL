type ThemeButtonProps = {
  theme: "white" | "black";
  toggleTheme: () => void;
  whiteCount: number;
  blackCount: number;
};

export const ThemeButton = ({
  theme,
  toggleTheme,
  whiteCount,
  blackCount,
}: ThemeButtonProps) => {
  return (
    <div
      style={{
        backgroundColor: theme === "white" ? "#ffffff" : "#000000",
        color: theme === "white" ? "#000000" : "#ffffff",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>

      <p>White count: {whiteCount}</p>
      <p>Black count: {blackCount}</p>
    </div>
  );
};
