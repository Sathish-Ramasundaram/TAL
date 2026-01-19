
# 👀 What You Will See

* Title: **Managing and Updating State**
* Count number
* Increment & Decrement buttons
* Number updates **without refreshing page**

## Description
This project demonstrates how to manage and update state in React using the useState hook.

## Concepts Covered
- What state is
- useState hook
- Updating state
- Re-rendering UI

## Learning Outcome

* Understand state in React
* Learn how to update state correctly
* See automatic UI updates

```
---

# 🧠 Final Beginner Summary (Very Important)

- **State = component’s memory**
- Use **useState** to create state
- Use **setState function** to update state
- Updating state updates UI automatically
- Never modify state directly

---

## 🧩 Memory Trick

> **State changes → Screen changes**

----

# 🌱 Managing and Updating State (Beginner Friendly)

---

## First: What is “State”? (Very Simple)

Think of **state** as a component’s **memory** 🧠

Examples:

* Counter number
* Button clicked or not
* Text typed in input

👉 If something **changes over time**, it should be **state**.

---

## Real-Life Example (Important)

Imagine a **lift display** 🚀

* It shows floor number
* Floor number **changes**
* Display updates automatically

That floor number = **state**

---

## What Happens When State Changes?

In React:

1. State changes
2. React **re-renders** the component
3. Screen updates automatically

You **do not refresh the page manually**.

---

## Rules of State (Beginner Rules)

❌ Do NOT change state directly
✅ Always use React’s method to update it

Example ❌ (Wrong):

```js
count = count + 1;
```

Example ✅ (Correct):

```js
setCount(count + 1);
```

---

## 5We Will Use a Functional Component (Modern React)

Modern React uses **functional components + hooks**.

The hook we use for state is:
👉 **`useState`**

---

# 🛠️ Project Setup (CRA + TypeScript + Rspack)

---

## Step 1: Create Project

Open **VS Code Terminal** and run:

```bash
npx create-react-app state-demo --template typescript
cd state-demo
```

---

## Step 2: Install Rspack

```bash
npm install -D @rspack/core @rspack/cli
```

---

## Step 3: Add Rspack Config

Create **`rspack.config.js`** in root folder:

```js
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: "./public",
    port: 3000,
  },
};
```

⚠️ For beginners, we still run with `npm start`.

---

# 🧩 Step-by-Step Code (Very Important)

---

## Understanding `useState` (Zero Level)

```ts
const [count, setCount] = useState(0);
```

Means:

* `count` → current value
* `setCount` → function to update value
* `0` → starting value

---

## State Example: Counter App

---

### 📄 `src/Counter.tsx`

```tsx
import React, { useState } from "react";

function Counter() {
  // Step 1: Create state
  const [count, setCount] = useState<number>(0);

  // Step 2: Function to update state
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ border: "2px solid blue", padding: "10px" }}>
      <h2>State Example (Counter)</h2>
      <p>Count: {count}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: "10px" }}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
```

---

### 🔍 Explanation (Very Simple)

* `useState(0)` → count starts at 0
* Clicking button calls `setCount`
* React updates UI automatically

---

## Using Counter Component

---

### 📄 `src/App.tsx`

```tsx
import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Managing and Updating State</h1>
      <Counter />
    </div>
  );
}

export default App;
```

---

## Entry Point

---

### 📄 `src/index.tsx`

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

# ▶️ How to Run in VS Code (Step-by-Step)

1. Open **VS Code**
2. Open folder **`state-demo`**
3. Open terminal in VS Code
4. Install dependencies:

   ```bash
   npm install
   ```
5. Start project:

   ```bash
   npm start
   ```
6. Open browser:

   ```
   http://localhost:3000
   ```

---
