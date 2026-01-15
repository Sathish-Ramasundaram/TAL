import React from "react";

const Header = () => {
  console.log(
    `Header rendered at: ${new Date().toLocaleTimeString()}`
  );

  return (
    <header style={{ background: "#e0f2fe", padding: "15px" }}>
      <h2>Virtual DOM Render Demo</h2>
    </header>
  );
};

export default Header;
