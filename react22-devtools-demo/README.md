
# React Developer Tools Demo

This project demonstrates how to use React Developer Tools to inspect and debug React components.

## Pages / Components
- App.tsx → Main App
- Counter.tsx → Counter component with props and state

## Tech Stack
- Create React App
- TypeScript
- RSpack

## Features
- Increment / Decrement counter
- Inspect props and state using React Developer Tools
- Learn how state changes reflect in the UI

## Run
1. npm install
2. npm start
3. Open http://localhost:3000
4. Open React Developer Tools (F12 → Components)
```

---
---

# What Are React Developer Tools?

* React Developer Tools (React DevTools) is a **browser extension**.
* It allows you to **inspect React components** in your app, view **props** and **state**, and debug efficiently.
* Works with **Chrome, Edge, and Firefox**.

### Key Features:

| Feature           | Why It’s Useful                               |
| ----------------- | --------------------------------------------- |
| Components Tab    | See all React components rendered on the page |
| Props             | Inspect data passed into components           |
| State             | Inspect component’s internal state            |
| Hooks             | View custom hook values                       |
| Highlight Updates | See which components re-render                |

---

# How to Install React Developer Tools

### Step 1: Install the Browser Extension

* Chrome: [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* Firefox: [React Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

✅ After installing:

* Open **DevTools (F12)**
* You will see a new tab called **“Components”** and **“Profiler”**

---

# What We Will Build

We’ll create a **simple counter app**:

* Has a **count state**
* **Buttons** to increment and decrement
* You can **inspect state and props** in React DevTools

---

# Step-by-Step Project Setup (CRA + TypeScript + RSpack)

---

## Step 1: Create the Project

```bash
npx create-react-app react-devtools-demo --template typescript
cd react-devtools-demo
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

## Step 4: Update `package.json` Scripts

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
    <title>React Developer Tools Demo</title>
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
 │   └─ Counter.tsx
 ├─ App.tsx
 └─ index.tsx
```

---

# Full Code

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
import Counter from "./components/Counter";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🔍 React Developer Tools Demo</h1>
      <Counter initialCount={0} />
    </div>
  );
}

export default App;
```

---

## 📁 `src/components/Counter.tsx`

```tsx
import React, { useState } from "react";

interface CounterProps {
  initialCount: number;
}

const Counter: React.FC<CounterProps> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <h2>Counter</h2>
      <p>
        Current Count: <strong>{count}</strong>
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>{" "}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
```

---

# How to Run

```bash
npm start
```

Open:
[http://localhost:3000](http://localhost:3000)

---

# How to Use React Developer Tools

1. Open **DevTools (F12)** in Chrome/Edge
2. Go to **Components Tab**
3. Inspect the `App` and `Counter` components
4. Click **Counter buttons**

   * Watch how **state changes live** in DevTools
5. Expand **props** and **state** to see their current values

✅ You can even **edit state manually** in DevTools to see how your UI reacts.

---


# 🔑 Key Takeaways

* React DevTools lets you **see your components, props, and state**
* Great for **debugging and learning**
* Works for **class components, function components, and hooks**
* You can **edit state live** to test UI behavior

---
