import React, { useState } from "react";

function App() {
  // state for inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // state to display submitted data
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
  } | null>(null);

  // handle input change
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // handle form submit
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // stop refresh

    setSubmittedData({
      name,
      email,
    });

    // clear inputs
    setName("");
    setEmail("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Form Handling in React</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>

      <hr />

      {submittedData && (
        <div>
          <h2>Submitted Data</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
