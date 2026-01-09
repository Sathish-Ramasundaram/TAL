function Content() {
  const description = "JSX lets you write HTML inside JavaScript!";

  return (
    <main style={{ padding: "20px" }}>
      <h2>What is JSX?</h2>
      <p>{description}</p>
      <p>Here is a list:</p>
      <ul>
        {[1, 2, 3].map((num) => (
          <li key={num}>Item {num}</li>
        ))}
      </ul>
    </main>
  );
}

export default Content;
