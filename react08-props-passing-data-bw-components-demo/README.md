

# 🌱 Using Props to Pass Data Between Components 

---


## Description
This project demonstrates how to pass data from a parent component to a child component using props.

## Concepts Covered
- Parent and Child components
- Passing data using props
- Functional components
- TypeScript props interface

## Installation
```bash
npm install
````

## Run Project

```bash
npm start
```


## First: What Does “Passing Data” Mean?

Think of a **parent and child** relationship.

👨 Parent → 👶 Child

* Parent has some data
* Parent **passes** data to child
* Child **receives and uses** that data

In React:

* Parent component → Child component
* Data is passed using **props**

---

## Real-Life Example (Very Important)

Imagine:

* Parent says: **“Your name is Sathish”**
* Child uses the name but **cannot change it**

That is **props**.

---

## Simple JavaScript Example (No React Yet)

```js
function greet(name) {
  console.log("Hello " + name);
}

greet("Sathish");
```

* `"Sathish"` → data
* `name` → received value

This is **exactly how props work**.

---

## React Version of This Idea

* Parent component **sends data**
* Child component **receives data as props**
* Child **displays it**

---

# 🛠️ Project Setup (CRA + TypeScript + Rspack)

---

## Step 1: Create React + TypeScript Project

Open **VS Code Terminal** and run:

```bash
npx create-react-app props-demo --template typescript
cd props-demo
```

---

## Step 2: Install Rspack

```bash
npm install -D @rspack/core @rspack/cli
```

---

## Step 3: Add Rspack Configuration

Create a file **`rspack.config.js`** in the root folder:

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

⚠️ We will still run using CRA’s `npm start` (best for beginners).

---

# 🧩 Step-by-Step Code Explanation

---

## Child Component (Receives Props)

### 📄 `src/Child.tsx`

```tsx
import React from "react";

/*
  Step 1: Define what data this component expects
*/
interface ChildProps {
  name: string;
  age: number;
}

/*
  Step 2: Receive props as function parameter
*/
function Child(props: ChildProps) {
  return (
    <div style={{ border: "2px solid green", padding: "10px" }}>
      <h2>Child Component</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Child;
```

### 🔍 Explanation (Very Simple)

* `ChildProps` → rules for incoming data
* `name` and `age` come **from parent**
* Child **only displays** data
* Child **cannot change** props

---

## Parent Component (Sends Props)

### 📄 `src/Parent.tsx`

```tsx
import React from "react";
import Child from "./Child";

function Parent() {
  return (
    <div style={{ border: "2px solid blue", padding: "10px" }}>
      <h2>Parent Component</h2>

      {/* Passing data to Child */}
      <Child name="Sathish" age={22} />
    </div>
  );
}

export default Parent;
```

### 🔍 Explanation

* Parent **owns the data**
* Parent passes data using:

  ```tsx
  <Child name="Sathish" age={22} />
  ```
* This is called **passing props**

---

## App Component (Main Entry)

### 📄 `src/App.tsx`

```tsx
import React from "react";
import Parent from "./Parent";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Passing Props Between Components</h1>
      <Parent />
    </div>
  );
}

export default App;
```

---

## React Entry Point

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
---

# 👀 What You Will See on Screen

* Title: **Passing Props Between Components**
* Blue box → Parent
* Green box → Child
* Child shows:

  * Name: Sathish
  * Age: 22

---

# Summary

- **Props = data passed from parent to child**
- Parent **sends** data
- Child **receives and displays** data
- Props are **read-only**
- Data flows **one way (top → down)**

---

## 🧩 Memory Trick

> **Parent talks, Child listens**

---