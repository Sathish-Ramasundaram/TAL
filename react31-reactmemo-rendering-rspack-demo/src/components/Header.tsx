import React from "react";

const Header = React.memo(() => {

  console.log(`Header rendered at: ${new Date().toLocaleTimeString()}`);

  return (
    <header style={{ background: "#e0f2fe", padding: "15px" }}>
      <h2>Header</h2>
    </header>
  );
});

export default Header;
