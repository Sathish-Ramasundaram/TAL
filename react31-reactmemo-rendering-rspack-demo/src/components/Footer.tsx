import React from "react";

const Footer = React.memo(() => {

  console.log(`Footer rendered at: ${new Date().toLocaleTimeString()}`);

  return (
    <footer style={{ background: "#dcfce7", padding: "15px" }}>
      <h4>Footer</h4>
    </footer>
  );
});

export default Footer;
