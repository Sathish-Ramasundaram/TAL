
```md
# React + Rspack + TypeScript + Redux-Saga (Beginner Example)

This project demonstrates a **minimal React setup using Rspack and TypeScript**, and introduces **Redux-Saga** through a simple example.

The goal is to understand **what Redux-Saga is**, **why it exists**, and **how it handles side effects** in a predictable way.

---

## 🚀 What this project demonstrates

- React app built **without CRA**
- Bundled using **Rspack**
- Written in **TypeScript**
- Uses **Redux** for state management
- Uses **Redux-Saga** to handle side effects
- A simple saga that waits **2 seconds after a button click** before updating the UI

> ⚠️ This is a learning-focused project, not a production template.

---

## 🧠 Core Concept (Important)

When you click a button:

1. React dispatches an action
2. Redux-Saga **listens** for that action
3. Saga waits **2 seconds**
4. Saga dispatches a new action
5. Redux updates the state
6. UI updates automatically

👉 The delay is handled by **Redux-Saga**, not React and not the reducer.

---

## 📁 Project Structure

```

project-root/
├── public/
│   └── index.html
├── src/
│   ├── index.tsx
│   ├── App.tsx
│   ├── store.ts
│   └── saga.ts
├── rspack.config.js
├── package.json
└── README.md

````

.tsx is used when a file contains JSX, while .ts is used for pure TypeScript logic such as sagas, APIs, and Redux store configuration.

---

## 🛠️ Step-by-step Setup

### 1️⃣ Create project folder

```bash
mkdir project-name
cd project-name
````

---

### 2️⃣ Initialize npm

```bash
npm init -y
```

---

### 3️⃣ Install React

```bash
npm install react react-dom
```

---

### 4️⃣ Install Rspack

```bash
npm install -D @rspack/core @rspack/cli @rspack/dev-server
npm install -D @rspack/plugin-react-refresh react-refresh
npm install -D @rspack/plugin-html


```

(You can also install them in a single command.)

npm install -D @rspack/core @rspack/cli @rspack/dev-server @rspack/plugin-react-refresh react-refresh @rspack/plugin-html
---

### 5️⃣ Install TypeScript

```bash
npm install -D typescript @types/react @types/react-dom
```

---

npm install react-router-dom @types/react-router-dom


## 🧾 Configuration Files

### `public/index.html`

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
</html>
```

---

### `src/index.tsx`

```ts
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <h1>Hello World</h1>
);
```

---

### `rspack.config.js`

```js
const path = require("path");
const HtmlRspackPlugin = require("@rspack/plugin-html").default;

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
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
                tsx: true,
              },
              transform: {
                react: {
                  runtime: "automatic",
                },
              },
            },
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlRspackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    port: 3000,
  },
};
```

---

### `package.json` scripts

```json
"scripts": {
  "start": "rspack serve",
  "build": "rspack build"
},
```

---

## ▶️ Running the App

### Build the project

```bash
npm run build
```

This creates the `dist/` folder containing:

* `index.html`
* `bundle.js`

---

### Start development server

```bash
npm start
```

Open:

```
http://localhost:3000
```

add .gitignore and add the command before pushing to git
---

## 🧩 Adding Redux & Redux-Saga

### Install dependencies

```bash
npm install redux react-redux redux-saga
```

---

## 🧠 Redux-Saga Example Explanation

In this project:

* A button dispatches a `BUTTON_CLICKED` action
* A saga listens for this action
* The saga waits **2 seconds**
* The saga dispatches `SET_MESSAGE`
* The UI updates with a new message

### Why this example?

This simple delay shows:

* How sagas **watch actions**
* How sagas **pause execution**
* How sagas handle **side effects**
* Why reducers stay **pure**

---

## 🔁 Mental Model

```
UI → dispatch action
Saga → listens in background
Saga → performs async work (delay)
Saga → dispatches result
Reducer → updates state
UI → re-renders
```

---

## 🧪 What this example is NOT

* Not a replacement for CRA
* Not a production-ready setup
* Not showing API calls (yet)

This is intentionally **simple and focused**.

---

## 🎯 Learning Outcome

After understanding this project, you should be able to:

* Explain what Redux-Saga is
* Explain why generators are used
* Describe how sagas handle side effects
* Understand the difference between React logic and saga logic
* Confidently move on to API-based sagas

---

## 📌 Next Steps

* Replace `delay` with an API call
* Learn `takeLatest` vs `takeEvery`
* Add error handling
* Compare Redux-Thunk vs Redux-Saga

---

## ✅ Summary

> Redux-Saga is middleware that runs background processes using generator functions to manage side effects like delays and API calls in a predictable and testable way.

