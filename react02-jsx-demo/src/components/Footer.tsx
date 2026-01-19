function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ textAlign: "center", padding: "10px" }}>
      © {year} JSX Demo Project
    </footer>
  );
}

export default Footer;
