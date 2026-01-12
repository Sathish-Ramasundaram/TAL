

## React Lifecycle Methods

### What is a “Lifecycle” in React?

Think of a React **component like a human**:

1. **Born** → Component is created
2. **Grows / Updates** → Data or state changes
3. **Dies** → Component is removed from the screen

React provides **lifecycle methods** that run automatically at each stage.

---

## Main Lifecycle Methods (Class Components)

We use **class components** to clearly understand lifecycle methods.

### 🔹 1. `constructor()`

* Runs **first**
* Used to initialize state
* Like setting things up before the component appears

```ts
constructor(props) {
  super(props);
  this.state = { count: 0 };
}
```

---

### 🔹 2. `componentDidMount()`

* Runs **after the component is shown on the screen**
* Used for:

  * API calls
  * Timers
  * Side effects

```ts
componentDidMount() {
  console.log("Component mounted");
}
```

---

### 🔹 3. `componentDidUpdate()`

* Runs **after state or props change**
* Used when reacting to updates

```ts
componentDidUpdate(prevProps, prevState) {
  console.log("Component updated");
}
```

---

### 🔹 4. `componentWillUnmount()`

* Runs **before the component is removed**
* Used to clean up:

  * Timers
  * Event listeners

```ts
componentWillUnmount() {
  console.log("Component unmounted");
}
```

---

## Project Setup (CRA + TypeScript + Rspack)

### Step 1: Create CRA TypeScript App

```bash
npx create-react-app lifecycle-demo --template typescript
cd lifecycle-demo
```

---

### Step 2: Install Rspack

```bash
npm install -D @rspack/core @rspack/cli
```

---

### Step 3: Add Rspack Config

Create **`rspack.config.js`** in root:

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

---

## How to Run in VS Code (Step-by-Step)

1. Open **VS Code**
2. Open the folder `lifecycle-demo`
3. Install dependencies:

   ```bash
   npm install
   ```
4. Start CRA (recommended for beginners):

   ```bash
   npm start
   ```
5. Open browser:

   ```
   http://localhost:3000
   ```
6. Open **DevTools → Console**

   * Click **Increment**
   * Watch lifecycle logs in order

---

## 6️⃣ README.md (Copy–Paste)

````md
# React Lifecycle Methods – CRA + TypeScript + Rspack

## Description
This project demonstrates React lifecycle methods using a class component.

## Lifecycle Methods Covered
- constructor
- componentDidMount
- componentDidUpdate
- componentWillUnmount

## Installation
```bash
npm install
````

## Run Project

```bash
npm start
```

## Learning Outcome

* Understand component creation, update, and cleanup
* Learn when each lifecycle method runs
* See lifecycle logs in browser console

```

---

## Key Takeaway (Beginner Friendly)

- **Lifecycle methods = automatic checkpoints**
- React tells you:
  - When component loads
  - When data changes
  - When component is removed
- Class components are **best for learning lifecycle clearly**
- Hooks (`useEffect`) replace them later 🚀

---


# First: What is a Component? (No React yet)

Think of a **component** like a **machine**.

* It is **created**
* It **does some work**
* It can be **destroyed**

Just like:

* Fan is installed → runs → removed
* Mobile app opens → works → closes

React components behave the same way.

---

# JavaScript Classes (Very Basic)

Before React lifecycle, you must understand **JavaScript class**.

### Example (Plain JavaScript – no React):

```js
class Person {
  constructor(name) {
    this.name = name;
    console.log("Person is created");
  }

  walk() {
    console.log(this.name + " is walking");
  }
}

const p1 = new Person("Sathish");
```

### What happens line by line:

1. `new Person("Sathish")`
   → A **new object** is created
2. `constructor()` runs automatically
3. Message prints:
   **"Person is created"**

💡 **Constructor = runs automatically when something is created**

---

# Now Apply This to React Component

React class component is also a **JavaScript class**.

```tsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("Component is created");
  }

  render() {
    return <h1>Hello</h1>;
  }
}
```

### Meaning:

* React says: “Create a component”
* JavaScript runs `constructor()`
* React shows UI using `render()`

---

# 4️⃣ Lifecycle = Life Stages of a Component

React component has **3 main life stages**:

## 🍼 1. Mounting (Birth)

Component is **created and shown on screen**

Order:

1. `constructor()`
2. `render()`
3. `componentDidMount()`

### Example:

```tsx
componentDidMount() {
  console.log("Component is now visible on screen");
}
```

---

## 2. Updating (Change)

Component already exists, but **data changes**

This happens when:

* `setState()` is called
* Props change

### Example:

```tsx
componentDidUpdate() {
  console.log("Component data changed");
}
```

---

## ☠️ 3. Unmounting (Death)

Component is **removed from screen**

### Example:

```tsx
componentWillUnmount() {
  console.log("Component removed");
}
```

---

# hat Happens When You Refresh the Page?

This is where confusion usually happens — so read slowly 👇

### When you press **Refresh (F5)**:

### Step 1: Old app is destroyed

* Browser clears everything
* React removes components
* `componentWillUnmount()` runs

### Step 2: New app starts

* React loads again
* Component is created again
* `constructor()` runs
* `render()` runs
* `componentDidMount()` runs

### 🔴 Important:

`componentDidUpdate()` **does NOT run**

Why?
👉 There was **no change**
👉 The component was **newly created**, not updated

---

# Visual Timeline (Very Important)

### On Page Refresh:

```
UNMOUNT → CONSTRUCTOR → RENDER → DID MOUNT
```

### On Button Click (state change):

```
RENDER → DID UPDATE
```

---

# Simple Real-Life Example 🏠

### Imagine a Room Light

| Action            | Lifecycle                       |
| ----------------- | ------------------------------- |
| Enter room        | Mount                           |
| Change brightness | Update                          |
| Leave room        | Unmount                         |
| Refresh page      | Leave old room → Enter new room |

---

# Why `constructor()` is Needed

Constructor is used to:

* Set initial values
* Prepare component before showing

Example:

```tsx
constructor(props) {
  super(props);
  this.state = { count: 0 };
}
```

Meaning:

> “When component is created, count should start at 0”

---

# One Sentence Summary (Beginner Friendly)

> Refreshing the page destroys the old component and creates a new one.
> Updating happens only when data changes, not on refresh.

---
