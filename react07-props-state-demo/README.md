
---

## One Very Simple Idea

Think of a **component** like a **TV** 📺

* The TV **receives input** (channel name, volume limit)
* The TV has **its own internal data** (current volume)

This maps directly to React:

| Concept   | Meaning                               |
| --------- | ------------------------------------- |
| **Props** | Data coming **from outside**          |
| **State** | Data managed **inside** the component |

---

## What are **Props**? 

### Props = **Properties**

* Passed **from parent to child**
* **Read-only** (cannot be changed by the child)
* Like **arguments to a function**

### Real-life example:

> Your name given by your parents
> You can **use it**, but you **can’t change it yourself**

---

### Simple Props Example (No React yet)

```js
function greet(name) {
  console.log("Hello " + name);
}

greet("Sathish");
```

➡️ `"Sathish"` is like **props**

---

## What is **State**? (Beginner Explanation)

### State = **Component’s own memory**

* Controlled **inside** the component
* **Can change**
* When state changes → UI updates

### Real-life example:

> Your mood
> It changes throughout the day

---

## Props vs State (Very Important Table)

| Feature          | Props        | State               |
| ---------------- | ------------ | ------------------- |
| Who provides it? | Parent       | Component itself    |
| Can it change?   | ❌ No         | ✅ Yes               |
| Used for         | Display data | Manage dynamic data |
| Example          | Username     | Counter value       |

---

# Project Setup (CRA + TypeScript + Rspack)

---

## Step 1: Create Project

```bash
npx create-react-app props-state-demo --template typescript
cd props-state-demo
```

---

## Step 2: Install Rspack

```bash
npm install -D @rspack/core @rspack/cli
```

---

## Step 3: Add Rspack Config

📄 **`rspack.config.js`**

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

⚠️ For learning, we will still run with `npm start`.

---

# 🧩 Props Example (Functional Component)

---

## 📄 `src/PropsComponent.tsx`

```tsx
import React from "react";

// Step 1: Define what props this component expects
interface Props {
  name: string;
}

// Step 2: Receive props as function parameter
function PropsComponent(props: Props) {
  return (
    <div style={{ border: "2px solid green", padding: "10px" }}>
      <h2>Props Component</h2>
      <p>Hello, {props.name}</p>
    </div>
  );
}

export default PropsComponent;
```

### What’s happening?

* `name` comes **from outside**
* Component **only uses it**
* Cannot change it

---

# 🧠 State Example (Class Component)

---

## 📄 `src/StateComponent.tsx`

```tsx
import React from "react";

interface State {
  count: number;
}

class StateComponent extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div style={{ border: "2px solid blue", padding: "10px" }}>
        <h2>State Component</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default StateComponent;
```

### What’s happening?

* `count` is **internal**
* Clicking button changes state
* UI updates automatically

---

# 🔗 Using Props and State Together

---

## 📄 `src/App.tsx`

```tsx
import React from "react";
import PropsComponent from "./PropsComponent";
import StateComponent from "./StateComponent";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Props vs State Demo</h1>

      <PropsComponent name="Sathish" />
      <StateComponent />
    </div>
  );
}

export default App;
```

---

## 📄 `src/index.tsx`

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
2. Open folder `props-state-demo`
3. Open terminal in VS Code
4. Run:

   ```bash
   npm install
   ```
5. Start app:

   ```bash
   npm start
   ```
6. Open browser:

   ```
   http://localhost:3000
   ```

---

# 🧪 What You Will See

* Green box → **Props**

  * Displays name
  * Cannot change it
* Blue box → **State**

  * Click button
  * Count increases

---
---

# 🧠 Final Summary (Very Important)

- **Props** → Given to component → Cannot change
- **State** → Owned by component → Can change
- Props flow **downward**
- State controls **dynamic UI**

---

## ⭐ Memory Trick

- **Props = Parent says**
- **State = Component decides**

---
