
> **Uncontrolled components update ONLY when React explicitly reads the DOM value.**
---

# 🔍 Visual Summary

| Action            | Controlled | Uncontrolled   |
| ----------------- | ---------- | -------------- |
| Type in input     | Updates UI | No UI update   |
| React knows value | Always     | Only when read |
| Needs button      | ❌ No       | ✅ Yes          |

---


# Controlled vs Uncontrolled Components (Beginner Level)

## 🔰 First: What is a “form input”?

Example:

```html
<input type="text" />
```

When a user types:

* The browser stores the value internally

React can:

1. **Control the value**
2. **OR let the browser control it**

That’s the difference 👇

---

## ✅ Controlled Component (React is in control)

👉 **React state controls the input value**

### How it works:

* Value is stored in `useState`
* Input value comes from React
* Every keystroke updates React state

```tsx
<input value={name} onChange={handleChange} />
```

🧠 Meaning:

> React is the single source of truth

### Real-life analogy:

> Teacher writes attendance → register is the truth

---

## ❌ Uncontrolled Component (Browser is in control)

👉 **Browser controls the input value**

### How it works:

* No state
* React reads value using `ref`
* Value exists only inside the DOM

```tsx
<input ref={inputRef} />
```

🧠 Meaning:

> React does NOT track changes

### Real-life analogy:

> Student remembers attendance → teacher checks later

---

## 🧠 Viva One-Liner (Very Important)

> “In controlled components, form data is handled by React state.
> In uncontrolled components, form data is handled by the DOM itself.”

---

# 🧱 React + TypeScript + Rspack Project

We will build:

* One **controlled input**
* One **uncontrolled input**
* Compare behavior

---

## 📁 Folder Structure

```
react-rspack-controlled-uncontrolled/
├── package.json
├── rspack.config.js
├── tsconfig.json
├── public/
│   └── index.html
└── src/
    ├── index.tsx
    └── App.tsx
```

---

## 1️⃣ Create Project

```bash
mkdir react-rspack-controlled-uncontrolled
cd react-rspack-controlled-uncontrolled
code .
```

---

## 2️⃣ Initialize & Install Dependencies

```bash
npm init -y
```

```bash
npm install react react-dom
npm install -D typescript @types/react @types/react-dom
npm install -D @rspack/core @rspack/cli @rspack/dev-server
```

---

## 3️⃣ `package.json`

```json
{
  "name": "react-rspack-controlled-uncontrolled",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "rspack serve",
    "build": "rspack build"
  }
}
```

✅ Confirms **Rspack is active**

---

## 4️⃣ `rspack.config.js`

```js
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true
  },

  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, "public")
    }
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "builtin:swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "typescript",
                tsx: true
              },
              transform: {
                react: {
                  runtime: "automatic"
                }
              }
            }
          }
        }
      }
    ]
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};
```

---

## 5️⃣ `tsconfig.json` (Correct & Beginner-Safe)

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["DOM", "ESNext"],
    "jsx": "react-jsx",
    "strict": true,
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

---

## 6️⃣ `public/index.html`

⚠️ REQUIRED for Rspack

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Controlled vs Uncontrolled</title>
  </head>
  <body>
    <div id="root"></div>

    <script src="/bundle.js"></script>
  </body>
</html>
```

---

## 7️⃣ `src/index.tsx`

```tsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
```

---

## 8️⃣ `src/App.tsx` ⭐ MAIN CONCEPT ⭐

```tsx
import React, { useRef, useState } from "react";

function App() {
  // Controlled component state
  const [name, setName] = useState<string>("");

  // Uncontrolled component ref
  const ageRef = useRef<HTMLInputElement>(null);

  const handleControlledChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setName(event.target.value);
  };

  const handleUncontrolledSubmit = () => {
    alert(`Age (from DOM): ${ageRef.current?.value}`);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Controlled vs Uncontrolled Components</h1>

      <h2>✅ Controlled Input</h2>
      <input
        type="text"
        value={name}
        onChange={handleControlledChange}
        placeholder="Enter your name"
      />
      <p>Value from React state: {name}</p>

      <hr />

      <h2>❌ Uncontrolled Input</h2>
      <input
        type="number"
        ref={ageRef}
        placeholder="Enter your age"
      />
      <br /><br />
      <button onClick={handleUncontrolledSubmit}>
        Get Age
      </button>
    </div>
  );
}

export default App;
```

---

## 9️⃣ Run the Project

```bash
npm start
```

Open:

```
http://localhost:3000
```

---

# 🔍 What You Will Observe

### Controlled Input:

* React updates on every keystroke
* UI always matches state

### Uncontrolled Input:

* React does not track typing
* Value read only when needed

---

# 🧠 Viva Comparison Table

| Feature            | Controlled  | Uncontrolled  |
| ------------------ | ----------- | ------------- |
| Value stored in    | React state | DOM           |
| Uses `useState`    | ✅ Yes       | ❌ No          |
| Uses `ref`         | ❌ No        | ✅ Yes         |
| Preferred in React | ✅ Yes       | ⚠️ Rare cases |

---
