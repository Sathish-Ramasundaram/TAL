import React, { useState } from "react";

function App() {
  // input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // error states
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validate = () => {
    let isValid = true;

    // name validation
    if (name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    // email validation
    if (!email.includes("@")) {
      setEmailError("Email must contain @");
      isValid = false;
    } else {
      setEmailError("");
    }

    // password validation
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!validate()) {
      return; // stop submission
    }

    alert("Form submitted successfully!");

    // clear form
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h1>Form Validation</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p style={{ color: "red" }}>{nameError}</p>
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p style={{ color: "red" }}>{emailError}</p>
        </div>

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p style={{ color: "red" }}>{passwordError}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
