

# 📌 Understanding `preventDefault()` 

## 🔰 First: What is a “default behavior”?

In HTML, some elements come with **built-in actions**.

Examples:

* `<form>` → reloads the page on submit
* `<a>` → navigates to another page
* `<button type="submit">` → submits form

These actions happen **automatically**, even without JavaScript.

---

## ❌ Problem

When you build a React app:

* You **do NOT want the page to reload**
* You want React to handle everything smoothly

But by default:
👉 **Form submit reloads the page**

---

## ✅ Solution: `event.preventDefault()`

`preventDefault()` tells the browser:

> ❝ Stop your default action. I will handle this myself ❞

📌 Very important:

* It **does NOT stop event bubbling**
* It **ONLY stops default browser behavior**

---

## 🧠 One-Line Viva Answer

> “`preventDefault()` prevents the browser’s default action like page reload or navigation.”

---

# 🧱 React + TypeScript + Rspack Project (CORRECT SETUP)

We will build:

* A form
* Without `preventDefault` → page reloads
* With `preventDefault` → React handles submit

---

## 📁 Project Structure

```
react-rspack-preventdefault/
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
mkdir react-rspack-preventdefault
cd react-rspack-preventdefault
code .
```

---

## 2️⃣ Install Dependencies

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
  "name": "react-rspack-preventdefault",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "rspack serve",
    "build": "rspack build"
  }
}
```

✅ Rspack is **actively used**

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

## 5️⃣ `tsconfig.json` (FINAL & CORRECT)

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

# 🔍 What You Will Observe

### ❌ Without `preventDefault`

* Page refreshes
* State is lost

### ✅ With `preventDefault`

* No page refresh
* React updates UI
* Message appears

---

---

# 🔑 `preventDefault` vs `stopPropagation`

| Method          | Purpose                        |
| --------------- | ------------------------------ |
| preventDefault  | Stops browser default behavior |
| stopPropagation | Stops event bubbling           |
