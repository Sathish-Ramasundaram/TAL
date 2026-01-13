# Handling Errors and Debugging in React

This project demonstrates common React errors and how to debug them.

## What This App Shows
- Component crashing due to null value
- Reading error messages
- Fixing errors safely
- Using console.log and React DevTools

## Tech Stack
- Create React App
- TypeScript
- RSpack

## Run
1. npm install
2. npm start
3. Open http://localhost:3000
4. Open browser console to see errors

## Concepts Learned
- JavaScript runtime errors
- Safe rendering in React
- Debugging using console
- Understanding React error messages
```

---

# 🔑 Key Takeaways (Very Important)

✅ Errors are **normal**
✅ Read error messages carefully
✅ Check **initial state values**
✅ Use `console.log()`
✅ React DevTools makes debugging visual

---

# What Does “Handling Errors and Debugging” Mean?

### In simple words:

> **Debugging = finding and fixing mistakes in your app**

Mistakes can be:

* App shows a **blank screen**
* App **crashes**
* Wrong data shows
* Buttons don’t work

React **does not automatically fix errors** — it only **shows clues**.

Your job is to:

1. Read the error
2. Understand where it happened
3. Fix the cause

---

# Types of Errors You’ll See in React

## 🔴 1. JavaScript Errors (Most Common)

Example:

```ts
user.name.toUpperCase()
```

But `user` is `undefined`.

➡ App crashes
➡ Red error in browser

---

## 🟡 2. Logical Errors

App runs, but:

* Wrong output
* Button increments wrong number

➡ No red error
➡ Need debugging

---

## 🔵 3. Network / API Errors (Later)

* Server down
* Data not returned

---

Today we focus on **JavaScript + React component errors**.

---

# Tools Used for Debugging

You already have them:

| Tool            | Purpose               |
| --------------- | --------------------- |
| Browser Console | See errors            |
| `console.log()` | Print values          |
| React DevTools  | Inspect state & props |

---

# What We Will Build (Visual)

A small app with:

* A **User Profile component**
* A **button**
* A **bug inside the code**
* We will **debug it step by step**

---

# Project Setup (CRA + TypeScript + RSpack)

---

## Step 1: Create Project

```bash
npx create-react-app react-error-debugging --template typescript
cd react-error-debugging
```

---

## Step 2: Install RSpack

```bash
npm install -D @rspack/cli @rspack/core
```

---

## Step 3: Create `rspack.config.js`

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
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Error Debugging Demo</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="/bundle.js"></script>
  </body>
</html>
```

---

# Project Structure

```
src/
 ├─ components/
 │   └─ UserProfile.tsx
 ├─ App.tsx
 └─ index.tsx
```

---

# Full Code (With Intentional Error)

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
import React from "react";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🐞 Debugging Demo</h1>
      <UserProfile />
    </div>
  );
}

export default App;
```

---

## 📁 `src/components/UserProfile.tsx`

⚠️ **This file contains a bug (on purpose)**

```tsx
import React, { useState } from "react";

function UserProfile() {
  const [user, setUser] = useState<any>(null);

  const loadUser = () => {
    // Simulating API response
    setUser({
      name: "Sathish",
      age: 25,
    });
  };

  return (
    <div>
      <button onClick={loadUser}>Load User</button>

      {/* ❌ ERROR: user is null initially */}
      <h2>User Name: {user.name}</h2>
    </div>
  );
}

export default UserProfile;
```

---

# Run the App

```bash
npm start
```

Open:
👉 [http://localhost:3000](http://localhost:3000)

---

# What Error You Will See

Immediately after loading the page:

❌ **White screen**
❌ **Red error in console**

Error message:

```
Cannot read properties of null (reading 'name')
```

---

# 🔍 How to Debug This (Step by Step)

## Step 1: Read the Error Message

```
Cannot read properties of null
```

Means:
👉 You are trying to read something **before it exists**

---

## Step 2: Find the Line

Console shows:

```
UserProfile.tsx:20
```

That line:

```tsx
<h2>User Name: {user.name}</h2>
```

---

## Step 3: Ask the Right Question

* What is `user` initially?

```ts
const [user, setUser] = useState(null);
```

👉 `user` is `null`

So:

```ts
null.name ❌
```

---

# Fixing the Error (Correct Way)

### Safe rendering (Beginner-friendly)

```tsx
{user && <h2>User Name: {user.name}</h2>}
```

---

## ✅ Fixed `UserProfile.tsx`

```tsx
import React, { useState } from "react";

function UserProfile() {
  const [user, setUser] = useState<any>(null);

  const loadUser = () => {
    setUser({
      name: "Sathish",
      age: 25,
    });
  };

  return (
    <div>
      <button onClick={loadUser}>Load User</button>

      {user && <h2>User Name: {user.name}</h2>}
    </div>
  );
}

export default UserProfile;
```

---

# ✅ Result After Fix

* App loads correctly
* Click **Load User**
* Name appears
* No crash
* No red error

---

# Using `console.log()` (Most Important Debug Tool)

Add inside component:

```ts
console.log("User value:", user);
```

Open **Console → see values changing live**

This is **90% of real-world debugging**.

---

# How React DevTools Helps Here

* Open **DevTools → Components**
* Click `UserProfile`
* Watch:

  * `user` = `null`
  * After click → object


