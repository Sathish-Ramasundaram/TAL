# What is JSX?

### Simple Explanation

* **JSX = JavaScript XML**
* Lets you write **HTML-like code inside JavaScript**
* React **converts JSX into JavaScript** the browser understands

### Key Idea

* HTML → only markup
* JSX → HTML-like syntax + JavaScript together

---

# How JSX Differs From HTML

| HTML                            | JSX                                 | Explanation                                              |
| ------------------------------- | ----------------------------------- | -------------------------------------------------------- |
| `<div class="container"></div>` | `<div className="container"></div>` | `class` becomes `className`                              |
| `<label for="id">`              | `<label htmlFor="id">`              | `for` becomes `htmlFor`                                  |
| `<input checked>`               | `<input defaultChecked />`          | Boolean attributes handled differently                   |
| `<img src="img.jpg">`           | `<img src="img.jpg" />`             | Self-closing tags must include `/`                       |
| `<div>One</div><div>Two</div>`  | `<><div>One</div><div>Two</div></>` | JSX must have one parent element; fragments `<></>` used |

JSX also lets you **embed JavaScript inside `{ }`**, e.g.:

```tsx
const name = "Sathish";
<h1>Hello {name}</h1>  // shows "Hello Sathish"
```

---

# Create the Project

Open terminal and run:

```bash
npx create-react-app react-jsx-demo2 --template typescript
cd react-jsx-demo2
```

---

# Delete Hidden Git Folder Inside Project (This won't work as the parent folder (Tal) already has git)

Since CRA initializes Git automatically, delete the project-level `.git` so we can push everything to **one parent Git repo** later:

### Windows Command:

```bash
rmdir /s /q .git
```

* Make sure you are **inside `react-jsx-demo2` folder**
* ⚠️ This deletes **only Git tracking**, your code is safe

> Alternatively, in File Explorer: enable **Hidden items**, find `.git` folder, right-click → Delete.

---

# Install Rspack

```bash
npm install -D @rspack/core @rspack/cli
```

---

# Create `rspack.config.js`

```js
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  experiments: { css: true },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "builtin:swc-loader",
        options: {
          jsc: {
            parser: { syntax: "typescript", tsx: true },
            transform: { react: { runtime: "automatic" } },
          },
        },
      },
      { test: /\.css$/, type: "css" },
    ],
  },
  devServer: { port: 3000, static: "./public" },
};
```

**Explanation:**

* `entry` → starting point
* `output` → final bundle.js
* `swc-loader` → converts TypeScript + JSX to JavaScript
* `css` enabled so we can import `.css` files
* `devServer` → runs local server

---

# Project Structure (Cleaned)

```
react-jsx-demo2/
 ├── src/
 │   ├── components/
 │   │   ├── Header.tsx
 │   │   ├── Content.tsx
 │   │   └── Footer.tsx
 │   ├── App.tsx
 │   ├── index.tsx
 │   ├── index.css
 │   └── react-app-env.d.ts
 ├── public/
 │   └── index.html
 ├── tsconfig.json
 ├── rspack.config.js
 ├── package.json
 └── README.md
```

✅ You can delete for simplicity (beginner-friendly):

* `App.css`
* `App.test.tsx`
* `reportWebVitals.ts`
* `setupTests.ts`

✅ Must keep:

* `tsconfig.json`
* `react-app-env.d.ts`
* `index.css`

---

# Code Files

### `src/index.tsx`

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Connect React to HTML <div id="root">
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**Explanation:**

* Finds `<div id="root">` in `index.html`
* Renders `App` component inside it
* `React.StrictMode` helps catch potential problems

---

### `src/App.tsx`

```tsx
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
```

**Explanation:**

* `App` is the **parent component**
* Combines Header, Content, Footer
* `<></>` is a fragment, avoids extra `<div>`s

---

### `src/components/Header.tsx`

```tsx
function Header() {
  const title = "JSX Demo Project";

  return (
    <header style={{ backgroundColor: "#282c34", padding: "20px" }}>
      <h1 style={{ color: "white", textAlign: "center" }}>
        {title}
      </h1>
    </header>
  );
}

export default Header;
```

**Explanation:**

* `title` is a JS variable
* `{title}` embeds it into JSX
* Inline CSS uses JS objects

---

### `src/components/Content.tsx`

```tsx
function Content() {
  const description = "JSX lets you write HTML inside JavaScript!";

  return (
    <main style={{ padding: "20px" }}>
      <h2>What is JSX?</h2>
      <p>{description}</p>
      <p>Here is a list:</p>
      <ul>
        {[1, 2, 3].map((num) => (
          <li key={num}>Item {num}</li>
        ))}
      </ul>
    </main>
  );
}

export default Content;
```

**Explanation:**

* Dynamic JS inside `{ }`
* Render list using `.map()`
* `key={num}` required for React lists

---

### `src/components/Footer.tsx`

```tsx
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ textAlign: "center", padding: "10px" }}>
      © {year} JSX Demo Project
    </footer>
  );
}

export default Footer;
```

**Explanation:**

* Dynamic year using JS inside JSX

---

### `src/index.css`

```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
```

**Explanation:**

* Basic styling

---

# Running the Project

```bash
npm install      # install dependencies
npm start        # start Rspack server
```

Open browser:

```
http://localhost:3000
```

You will see:

* Header with project title
* Content with explanation and list
* Footer with dynamic year

---
