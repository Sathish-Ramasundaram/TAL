**Understanding and Using Error Boundaries**.

---

# First: What Is an Error Boundary? (Very Simple)

### Problem (Without Error Boundary)

If **any component crashes**, React will:

* Show a **white screen**
* Stop rendering the whole app

Example:

```ts
Cannot read properties of undefined
```

👉 **Entire app crashes**

---

### Solution: Error Boundary

> An **Error Boundary** is a special React component that:

* Catches errors in child components
* Prevents the whole app from crashing
* Shows a **fallback UI** instead

---

# Real-World Analogy 🧠

Think of an **electric fuse**:

* One room has a short circuit
* Fuse trips
* Whole building doesn’t burn

👉 Error Boundary = **React fuse**

---

# Important Rule (Very Important)

⚠️ Error Boundaries:

* ✅ Catch **rendering errors**
* ❌ Do NOT catch errors in:

  * Event handlers
  * setTimeout
  * async code

Today we focus on **rendering errors** (most common).

---

# What We Will Build

A small app with:

* A **Buggy Component** (crashes)
* An **Error Boundary**
* A **fallback UI** instead of white screen

---

# Project Setup (CRA + TypeScript + RSpack)

---

## Step 1: Create Project

```bash
npx create-react-app react-error-boundary --template typescript
cd react-error-boundary
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
    <title>Error Boundary Demo</title>
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
 │   ├─ ErrorBoundary.tsx
 │   └─ BuggyComponent.tsx
 ├─ App.tsx
 └─ index.tsx
```

---

# Full Code (Beginner Friendly)

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

## 📄 `src/App.tsx`

```tsx
import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import BuggyComponent from "./components/BuggyComponent";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🧯 Error Boundary Demo</h1>

      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
```

---

## 📄 `src/components/BuggyComponent.tsx`

⚠️ **This component intentionally crashes**

```tsx
import React from "react";

function BuggyComponent() {
  // ❌ Undefined variable
  const user: any = undefined;

  return (
    <div>
      <h2>User Name: {user.name}</h2>
    </div>
  );
}

export default BuggyComponent;
```

---

## 📄 `src/components/ErrorBoundary.tsx`

⚠️ **Important**: Error Boundaries MUST be **class components**

```tsx
import React, { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // React calls this when a child crashes
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: any) {
    console.error("Error caught by Error Boundary:", error);
    console.error("Error info:", info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>⚠️ Something went wrong. Please try again.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

---

# Run the App

```bash
npm start
```

Open:
👉 [http://localhost:3000](http://localhost:3000)

---

# What You Will See

### Without Error Boundary

❌ White screen
❌ App crashes

---

### With Error Boundary

✅ App does NOT crash
✅ You see:

```
⚠️ Something went wrong. Please try again.
```

---

# 🔍 How Error Boundary Works (Plain English)

1. `BuggyComponent` crashes
2. React **stops rendering it**
3. `ErrorBoundary` catches the error
4. `hasError` becomes `true`
5. Fallback UI is shown

---
