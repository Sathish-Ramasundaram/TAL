
---

# What is “Form Validation”? (Very Simple)

**Validation = checking user input**

Examples:

* Name should NOT be empty
* Email should contain `@`
* Password should be at least 6 characters

👉 If input is wrong:

* Show error message
* Do NOT submit the form

---

# How Validation Works in Real Life

### ❌ Without validation

User can submit:

```
Name: ""
Email: abc
Password: 1
```

### ✅ With validation

User sees:

```
Name is required
Email is invalid
Password must be at least 6 characters
```

---

# HTML Validation vs React Validation

### 🟡 HTML Validation

```html
<input required />
```

* Browser decides
* Hard to customize
* Limited control

### 🔵 React Validation

* We decide the rules
* We decide the messages
* Full control

👉 **We will use React validation**

---

# What We Will Build

✅ Name, Email, Password
✅ Error messages below inputs
✅ Prevent submission if invalid
✅ Clear errors when user types
✅ Show success message

---

# Step-by-Step Project Setup

---

## 📌 Step 1: Create CRA TypeScript App

```bash
npx create-react-app react-form-validation --template typescript
cd react-form-validation
```

---

## 📌 Step 2: Install RSpack

```bash
npm install -D @rspack/cli @rspack/core
```

---

## 📌 Step 3: Create `rspack.config.js`

```js
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: "./public",
    port: 3000,
    hot: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "builtin:swc-loader",
        options: {
          jsc: {
            parser: {
              syntax: "typescript",
              tsx: true,
            },
          },
        },
      },
    ],
  },
};
```

---

## 📌 Step 4: Update `package.json`

```json
"scripts": {
  "start": "rspack serve",
  "build": "rspack build"
}
```

---

## 📌 Step 5: Update `public/index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>React Form Validation</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="/bundle.js"></script>
  </body>
</html>
```

---

# Full Code (Beginner Friendly)

---

## 📁 `src/index.tsx`

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## 📁 `src/App.tsx`

```tsx
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
```

---

# How Validation Works

### 🔹 On submit

1. Stop page refresh
2. Run `validate()`
3. Check each field
4. Set error messages
5. If any error → stop submission

### 🔹 Error messages

* Stored in state
* Automatically shown below inputs

---

# 8️⃣ Run the Project

```bash
npm start
```

Open:
👉 [http://localhost:3000](http://localhost:3000)

---
