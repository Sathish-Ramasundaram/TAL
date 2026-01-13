# React Router – Beginner Guide

This project explains client-side routing using React Router.

## Pages
- Home (/)
- About (/about)
- Contact (/contact)

## Tech Stack
- Create React App
- TypeScript
- React Router
- RSpack

## Run
1. npm install
2. npm start
3. Open http://localhost:3000

## Concepts Learned
- Client-side routing
- BrowserRouter
- Routes & Route
- Link navigation
- No page refresh navigation
```

---

# 🔑 Key Takeaways (Very Important)

✅ One HTML file
✅ URL changes without refresh
✅ React controls navigation
✅ Components = pages

---

---

# First: What Is Routing? (Real-World Analogy)

Think of a **website** like a house:

| URL        | Page    |
| ---------- | ------- |
| `/`        | Home    |
| `/about`   | About   |
| `/contact` | Contact |

In **traditional websites**:

* Clicking a link loads a **new HTML page**
* Browser refreshes every time

---

# What Is Client-Side Routing?

In **React**:

* There is **only ONE HTML file**
* Page does **NOT refresh**
* URL changes
* React decides **what component to show**

👉 This is called **client-side routing**

---

# Why React Router Is Needed

React **by default**:

* Cannot understand `/about`
* Cannot change pages

**React Router**:

* Watches the URL
* Matches it to a component
* Shows that component

> 🔑 URL changes → React component changes
> ❌ No page reload

---

# What We Will Build

A **3-page app**:

* `/` → Home page
* `/about` → About page
* `/contact` → Contact page

With:

* Navigation links
* No page refresh
* URL changes

---

# Step-by-Step Project Setup

---

## 📌 Step 1: Create CRA + TypeScript App

```bash
npx create-react-app react-router-demo --template typescript
cd react-router-demo
```

---

## 📌 Step 2: Install React Router

```bash
npm install react-router-dom
```

(React Router v6 is used — modern and simpler)

---

## 📌 Step 3: Install RSpack

```bash
npm install -D @rspack/cli @rspack/core
```

---

## 📌 Step 4: Create `rspack.config.js`

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
    historyApiFallback: true
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

🔴 `historyApiFallback: true` is **VERY IMPORTANT**
(It prevents 404 when refreshing routes like `/about`)

---

## 📌 Step 5: Update `package.json`

```json
"scripts": {
  "start": "rspack serve",
  "build": "rspack build"
}
```

---

## 📌 Step 6: Update `public/index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>React Router Demo</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="/bundle.js"></script>
  </body>
</html>
```

---

# 6️⃣ Project Structure (Important)

```
src/
 ├─ pages/
 │   ├─ Home.tsx
 │   ├─ About.tsx
 │   └─ Contact.tsx
 ├─ App.tsx
 └─ index.tsx
```

---

# 7️⃣ Full Code (Beginner Friendly)

---

## 📁 `src/index.tsx`

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

### 🔑 Why `BrowserRouter`?

It **enables routing for the whole app**

---

## 📁 `src/App.tsx`

```tsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Router Demo</h1>

      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <hr />

      {/* Route matching */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
```

---

## 📁 `src/pages/Home.tsx`

```tsx
import React from "react";

function Home() {
  return <h2>🏠 Home Page</h2>;
}

export default Home;
```

---

## 📁 `src/pages/About.tsx`

```tsx
import React from "react";

function About() {
  return <h2>ℹ️ About Page</h2>;
}

export default About;
```

---

## 📁 `src/pages/Contact.tsx`

```tsx
import React from "react";

function Contact() {
  return <h2>📞 Contact Page</h2>;
}

export default Contact;
```

---

# How React Router Works (Plain English)

### 🟢 Clicking a link

* URL changes
* No refresh
* React Router detects change
* Correct component renders

### 🟢 `<Link>`

* Replaces `<a>`
* Prevents page reload

### 🟢 `<Routes>` + `<Route>`

* Matches URL
* Decides which component to show

---
