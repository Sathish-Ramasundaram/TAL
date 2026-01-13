import React, { useState } from "react";

function App() {
  // State variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submit
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // stop page refresh

    alert(
      `Name: ${name}\nEmail: ${email}\nPassword: ${password}`
    );
    // ✅ Clear the form AFTER clicking OK
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
