
---

# What is a Component? (Very Important)

A **component** is like a **LEGO block** 🧱

* Small piece of UI
* Reusable
* Each component shows something on screen

Example:

* Header
* Button
* Profile card

---

# Two Types of React Components

React has **two ways** to create components:

| Type                 | Meaning                                     |
| -------------------- | ------------------------------------------- |
| Functional Component | Function-based (modern & simple)            |
| Class Component      | Class-based (older, but important to learn) |

We will use **both**.

---

# Project Setup (CRA + TypeScript + Rspack)

## Step 1: Create the Project

Open **Terminal** in VS Code and run:

```bash
npx create-react-app react-components-demo --template typescript
cd react-components-demo
```

This creates a React + TypeScript app.

---

## Step 2: Install Rspack

```bash
npm install -D @rspack/core @rspack/cli
```

---

## Step 3: Add Rspack Config

Create a file **`rspack.config.js`** in the project root:

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

⚠️ **Note:** For learning, we will still use CRA’s `npm start`.

---

# Functional Component (Beginner Friendly)

## What is a Function?

A function is a block of code that returns something.

Example:

```js
function sayHello() {
  return "Hello";
}
```

---

## Functional Component Example

### 📄 `src/FunctionalComponent.tsx`

```tsx
import React from "react";

function FunctionalComponent() {
  return (
    <div style={{ border: "2px solid green", padding: "10px" }}>
      <h2>Functional Component</h2>
      <p>This is a simple functional component.</p>
    </div>
  );
}

export default FunctionalComponent;
```

### Explanation:

* `function FunctionalComponent()` → normal JavaScript function
* Returns **JSX** (HTML-like code)
* Shows UI on screen

---

# Class-Based Component (Step-by-Step)

## What is a Class?

A class is like a **blueprint**.

Example:

```js
class Car {
  start() {
    console.log("Car started");
  }
}
```

---

## Class Component Example

### 📄 `src/ClassComponent.tsx`

```tsx
import React from "react";

class ClassComponent extends React.Component {
  constructor(props: {}) {
    super(props);
    console.log("Class Component created");
  }

  render() {
    return (
      <div style={{ border: "2px solid blue", padding: "10px" }}>
        <h2>Class Component</h2>
        <p>This is a class-based component.</p>
      </div>
    );
  }
}

export default ClassComponent;
```

### Explanation:

* `constructor()` runs when component is created
* `render()` returns UI
* `extends React.Component` tells React this is a component

---

# Using Both Components Together

### 📄 `src/App.tsx`

```tsx
import React from "react";
import FunctionalComponent from "./FunctionalComponent";
import ClassComponent from "./ClassComponent";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Components Demo</h1>

      <FunctionalComponent />
      <ClassComponent />
    </div>
  );
}

export default App;
```

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

# How to Run the Project (Very Clear)

1. Open **VS Code**
2. Open folder `react-components-demo`
3. Open terminal in VS Code
4. Install packages:

   ```bash
   npm install
   ```
5. Start the app:

   ```bash
   npm start
   ```
6. Open browser:

   ```
   http://localhost:3000
   ```

You will see:

* Functional Component box (green)
* Class Component box (blue)

---
---

## Displaying content on the web page

### ✔️ Functional Component

✔ **Correct**

```tsx
function MyComponent() {
  return <h1>Hello</h1>;
}
```

👉 Whatever is written inside **`return`** is shown on the **web page**.

---

### ✔️ Class Component

✔ **Correct**

```tsx
class MyComponent extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```

👉 Whatever is written inside **`render()` → return** is shown on the **web page**.

---

## 🔑 Important Rule (Easy to Remember)

| Component Type | What displays UI    |
| -------------- | ------------------- |
| Functional     | `return`            |
| Class          | `render() → return` |

---

## ❌ About constructor content being displayed in console

> **Only console statements inside the constructor are shown in the console.**
> **Constructor does NOT display anything on the web page.**

---

## 🧠 Why constructor does NOT show UI

The constructor is used to:

* Initialize data
* Prepare the component
* Run setup code

Example:

```tsx
constructor(props: {}) {
  super(props);
  console.log("Constructor is called");
}
```

👉 Output:

* ✔ Appears in **Console**
* ❌ Does NOT appear on the **web page**

---

## 🖥️ Where UI actually comes from

Only this shows UI:

```tsx
return (
  <h1>Hello World</h1>
);
```

✔ Inside **function return**
✔ Inside **render() return**

---

## 🔄 What really happens step-by-step

### Class Component Lifecycle (Simple)

```
constructor()  →  render()  →  componentDidMount()
```

| Method            | Purpose    | Where output goes      |
| ----------------- | ---------- | ---------------------- |
| constructor       | Setup      | Console only           |
| render            | UI         | Web page               |
| componentDidMount | After load | Console / side effects |

---

## 🧪 Small Example (Very Clear)

```tsx
class Demo extends React.Component {
  constructor(props: {}) {
    super(props);
    console.log("Hello from constructor");
  }

  render() {
    return <h1>Hello from render</h1>;
  }
}
```

### Result:

* **Console:** `Hello from constructor`
* **Web page:** `Hello from render`

---
---

## 

> ❌ `render()` is **NOT** a keyword like `return`.
> ✅ `render()` is a **required method** that React looks for in class components.

---

## Now the Detailed Explanation (Beginner Level)

### What is a **keyword**?

A keyword is a **built-in word** in a language.

Examples:

* `return`
* `class`
* `function`
* `const`

You **cannot rename** or remove keywords.

---

### What is `return`?

`return` is a **JavaScript keyword**.

```js
return <h1>Hello</h1>;
```

Meaning:
👉 “Send this value back.”

In React:

* The value returned is **UI**
* Browser displays it

---

### What is `render()` then?

`render()` is:

* ❌ Not a JavaScript keyword
* ✅ A **method name** that React **expects**

React internally says:

> “If this is a class component, I will call its `render()` method to know what to show on the screen.”

---

## Why MUST class components have `render()`?

Because React does this internally (simplified):

```js
const element = component.render();
```

If `render()` does not exist:
❌ React does not know what UI to display
❌ App crashes

---

## Can we rename `render()`?

❌ NO

```tsx
class MyComponent extends React.Component {
  show() {   // ❌ React will ignore this
    return <h1>Hello</h1>;
  }
}
```

✔ Correct:

```tsx
class MyComponent extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```

---

## Why functional components don’t need `render()`

Functional components **ARE the render function**.

```tsx
function MyComponent() {
  return <h1>Hello</h1>;
}
```

React treats it as:

```js
MyComponent(); // returns UI
```

---

## Simple Comparison Table 🧠

| Feature                  | Functional Component     | Class Component        |
| ------------------------ | ------------------------ | ---------------------- |
| Is `return` used?        | ✅ Yes                    | ✅ Yes (inside render)  |
| Is `render()` needed?    | ❌ No                     | ✅ Yes                  |
| Is `render()` a keyword? | ❌                        | ❌                      |
| Who calls render?        | React calls the function | React calls `render()` |

---

## One-Line Interview-Safe Answer 🎯

> `render()` is not a keyword. It is a required method that React calls in class components to get the UI, while `return` is a JavaScript keyword.

---

## Beginner Memory Trick 🧩

* **Function component** → *“I return UI directly”*
* **Class component** → *“React calls my render() and I return UI from there”*

---

You’re asking **excellent foundational questions** 👏
Next best question to ask is:
👉 *“Who calls render() and when?”*
I can explain that too when you’re ready 👍
