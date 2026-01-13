

# REST APIs

---

## What Is an API? (Very Simple)

Think of an **API** like a **waiter in a restaurant**.

* You (Frontend / React) 👉 ask for data
* Waiter (API) 👉 goes to kitchen (server)
* Kitchen (Database) 👉 prepares data
* Waiter 👉 brings data back to you

👉 You **don’t** go to the kitchen yourself.

---

## What Is REST?

**REST** is a way of talking to servers using **URLs**.

Example:

```
https://jsonplaceholder.typicode.com/users
```

This URL returns **data**, not a web page.

---

## What We Will Build

A small React app that:

* Calls a REST API
* Fetches user data
* Displays it on the screen
* Handles loading state
* Handles errors

---

## API We Will Use (Free & Safe)

We’ll use a **public demo API**:

```
https://jsonplaceholder.typicode.com/users
```

It returns:

* Name
* Email
* Phone

No login needed 👍

---

# 🛠 Project Setup (CRA + TypeScript + RSpack)

---

## Step 1: Create Project

```bash
npx create-react-app react-rest-api --template typescript
cd react-rest-api
```

---

## Step 2: Install RSpack

```bash
npm install -D @rspack/cli @rspack/core
```

---

## Step 3: Create `rspack.config.js`
Note: This existing one is not working for css. See next for details

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

This happens because **RSpack is trying to parse `index.css` as JavaScript**.

In other words: **RSpack doesn’t know how to handle `.css` files yet**.

This is **the modern correct way to fix it**.

---

## Clean Working Solution for CRA + TypeScript + RSpack + CSS

You **do not need any old Webpack rules**. Instead, we’ll tell RSpack explicitly to **treat `.css` as CSS**.

---

### Step 1: Install Official RSpack CSS Loader

Run:

```bash
npm install -D css-loader style-loader
```

> `css-loader` → reads `.css`
> `style-loader` → injects CSS into HTML

These are **official, current loaders**. Don’t use `builtin:style-loader` anymore.

---

### Step 2: Update `rspack.config.js`

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
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ],
      },
    ],
  },
};
```

---
---

## Step 4: Update `package.json`

```json
"scripts": {
  "start": "rspack serve",
  "build": "rspack build"
}
```

---

## Step 5: Update `public/index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>REST API Demo</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="/bundle.js"></script>
  </body>
</html>
```

---

# 📁 Folder Structure

```
src/
 ├─ App.tsx
 ├─ index.tsx
 └─ index.css
```

---

# 🧩 Full Code (With Explanation)

---

## 📄 `src/index.tsx`

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
```

---

## 📄 `src/App.tsx`

```tsx
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load users");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading users...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>👤 Users (REST API)</h1>

      {users.map((user) => (
        <div key={user.id} style={{ marginBottom: "10px" }}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
```

---

## 📄 `src/index.css`

```css
body {
  font-family: Arial, sans-serif;
}
```

---

# ▶️ Run the App

```bash
npm start
```

Open:
👉 [http://localhost:3000](http://localhost:3000)

---

# 👀 What You Will See

* “Loading users…” (initially)
* Then a list of users:

  * Name
  * Email
  * Phone

---

# 🧠 Explanation (Zero Knowledge)

---

## 🔹 `useState`

```ts
const [users, setUsers] = useState([]);
```

Stores data **inside the component**.

---

## 🔹 `useEffect`

```ts
useEffect(() => {
  fetch(...)
}, []);
```

Runs **once** when the page loads.

---

## 🔹 `fetch`

```ts
fetch(URL)
```

Asks the server:

> “Give me data”

---

## 🔹 Loading & Error States

Why?

* Internet is slow
* Servers fail

So we handle:

* Loading
* Error
* Success

---

# 📌 REST API Flow (Memory Aid)

```
Component loads
↓
useEffect runs
↓
fetch() API
↓
Receive data
↓
Display data
```

---

# 📘 README.md

```md
# React REST API Example

This project demonstrates how to fetch data from a REST API in React.

## Concepts Covered
- What is a REST API
- Fetching data using fetch()
- useState and useEffect
- Loading and error handling

## Tech Stack
- React
- TypeScript
- CRA
- RSpack

## How to Run
1. npm install
2. npm start
3. Open http://localhost:3000
```

---

# ✅ Chapter 10 – REST Completed

You now understand:

* What APIs are
* What REST means
* How React talks to servers
* How to display API data safely

---

## 🚀 Next (Natural Progression)

Next topics:

* POST (sending data)
* API error handling
* Loading skeletons
* **GraphQL (Chapter 10.2)**

Say:

> **“Next: GraphQL from zero”**

and we’ll continue 👍
