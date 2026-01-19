
# React Form Handling (Beginner)

This project explains how to handle:
- Input changes
- Form submission
- Preventing page refresh

## Tech Stack
- Create React App
- TypeScript
- RSpack

## Run
1. npm install
2. npm start
3. Open http://localhost:3000

## Concepts Learned
- useState
- onChange
- onSubmit
- Controlled components
```

---

---

# What Does “Handling Input Changes” Mean?

When a user:

* types in an input box
* clicks Submit

👉 **We want React to know what happened**

So we must:

1. Listen to input changes
2. Store values safely
3. Handle form submit
4. Stop page refresh
5. Decide what to do with the data

---

# Before React: What the Browser Does

In plain HTML:

* Browser refreshes the page
* Browser reads values
* Data is lost after refresh

In React:

* **We stop refresh**
* **We store values in state**
* **React controls the form**

---

# Two Core Things You Must Learn

## 🔹 A. Handling Input Changes

React listens when user types.

```tsx
onChange={(event) => setName(event.target.value)}
```

Meaning:

* User types
* Event fires
* State updates
* UI updates

---

## 🔹 B. Handling Form Submission

```tsx
onSubmit={handleSubmit}
```

```ts
event.preventDefault();
```

Meaning:

* Stop browser refresh
* Use data inside React

---

# What We Will Build

✅ Simple form
✅ Name & Email inputs
✅ One change handler
✅ Submit handler
✅ Clear form after submit
✅ Show submitted data on screen (no alert)

---

# Step-by-Step: Project Setup

---

## 📌 Step 1: Create CRA TypeScript App

```bash
npx create-react-app react-form-handling --template typescript
cd react-form-handling
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
    <title>React Form Handling</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="/bundle.js"></script>
  </body>
</html>
```

---

# 6️⃣ Full Code (Beginner Friendly)

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
```

---

# How This Works 

### 🟢 When user types:

* `onChange` fires
* State updates
* Input shows new value

### 🟢 When user submits:

* Page refresh is stopped
* Data is saved
* Inputs are cleared
* Data appears below form

---

# Key Takeaways 

🔑 React controls the form
🔑 Inputs depend on state
🔑 `preventDefault()` stops refresh
🔑 Clearing inputs = resetting state

---

## 🚀 What You’re Ready For Next
