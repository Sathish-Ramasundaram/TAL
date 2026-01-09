function Header() {
  const title = "JSX Demo Project";

  return (
    <header style={{ backgroundColor: "#282c34", padding: "20px" }}>
      <h1 style={{ color: "white", textAlign: "center" }}>
        {title}
      </h1>
    </header>
  );
}

export default Header;
