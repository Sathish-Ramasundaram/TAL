
### What technologies are involved?

| Thing      | Why it exists                              |
| ---------- | ------------------------------------------ |
| HTML       | Browser understands this                   |
| CSS        | Styling                                    |
| JavaScript | Logic                                      |
| React      | Helps build UI using components            |
| TypeScript | Safer JavaScript                           |
| Rspack     | Converts our code into browser-readable JS |

---

# 🏗 STEP 1: Create the Project

Open terminal and run:

```bash
npx create-react-app react-components-demo2 --template typescript
```

👉 This creates a **React + TypeScript project**.

Now go inside:

```bash
cd react-components-demo2
```

---

# 🏗 STEP 2: Install Rspack

```bash
npm install -D @rspack/core @rspack/cli
```

### Why?

* CRA normally uses **Webpack**
* we want **Rspack**
* So we replace the build system

---

# 📁 FINAL PROJECT STRUCTURE (IMPORTANT)

```
react-components-demo3/
│
├── public/
│ └── index.html
│
├── src/
│ ├── components/
│ │ ├── Header.tsx
│ │ ├── Content.tsx
│ │ └── Footer.tsx
│ │
│ ├── App.tsx
│ ├── index.tsx
│ ├── index.css
│ └── react-app-env.d.ts
│
├── rspack.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

# 🧩 STEP 3: Understanding EACH FILE (DETAILED)

---

## 1️⃣ `public/index.html`

📌 **This is the only file the browser directly understands**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>React Components Demo</title>
  </head>
  <body>
    <!-- React will put everything inside this div -->
    <div id="root"></div>

    <!-- Rspack output file -->
    <script src="/bundle.js"></script>
  </body>
</html>
```

### Why this file exists

* Browser loads HTML first
* React needs a **place to attach itself**
* That place is `<div id="root"></div>`

💡 Think of `root` as an **empty box**
React fills this box.

---

## 2️⃣ `rspack.config.js`

📌 **This tells Rspack how to build your project**

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

  experiments: {
    css: true,
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
            transform: {
              react: {
                runtime: "automatic",
              },
            },
          },
        },
      },

      {
        test: /\.css$/,
        type: "css",
      },
    ],
  },

  devServer: {
    port: 3000,
    static: "./public",
  },
};
```

### Line-by-line meaning (simple words)

| Line              | Meaning                     |
| ----------------- | --------------------------- |
| `entry`           | Where the app starts        |
| `index.tsx`       | First React file            |
| `bundle.js`       | Final JS file browser reads |
| `extensions`      | File types allowed          |
| `experiments.css` | Allow CSS imports           |
| `swc-loader`      | Converts TS → JS            |
| `devServer`       | Runs local server           |

👉 **Rspack’s job**:
Take many files → create **ONE browser-ready JS file**

---

## 3️⃣ `src/index.tsx`

📌 **This is where React starts running**

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### What is happening here?

| Code                     | Meaning                |
| ------------------------ | ---------------------- |
| `import React`           | Load React             |
| `ReactDOM.createRoot`    | Connect React to HTML  |
| `getElementById("root")` | Find `<div id="root">` |
| `<App />`                | Start the app          |

💡 This line is the **bridge**:

```ts
document.getElementById("root")
```

HTML ↔ React connection happens here.

---

## 4️⃣ `src/App.tsx`

📌 **Main component (parent)**

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

### Why this exists

* `App` is the **root React component**
* It combines other components

💡 Think of `App` as a **manager**
It tells which components appear on the page.

---

## 5️⃣ `Header.tsx`

📌 **One small UI part**

```tsx
function Header() {
  return (
    <header style={{ backgroundColor: "#282c34", padding: "15px" }}>
      <h1 style={{ color: "white", textAlign: "center" }}>
        React Component Architecture
      </h1>
    </header>
  );
}

export default Header;
```

### Why components?

* Reusable
* Easy to understand
* One responsibility

---

## 6️⃣ `Content.tsx`

```tsx
function Content() {
  return (
    <main style={{ padding: "20px" }}>
      <h2>What is a Component?</h2>
      <p>
        A component is a small, reusable part of the user interface.
      </p>
    </main>
  );
}

export default Content;
```

---

## 7️⃣ `Footer.tsx`

```tsx
function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "10px" }}>
      © 2026 React Demo
    </footer>
  );
}

export default Footer;
```

---

## 8️⃣ `index.css`

📌 **Global styles**

```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
```

---

## 9️⃣ `package.json` (Scripts)

```json
"scripts": {
  "start": "rspack serve"
}
```

### Meaning

* `npm start` → runs Rspack server
* Opens app on `localhost:3000`

---

# ▶️ STEP 4: Run the App

```bash
npm start
```

Open browser:

```
http://localhost:3000
```

---

# 🧠 HOW EVERYTHING CONNECTS (VERY IMPORTANT)

```
Browser
  ↓
index.html
  ↓
bundle.js
  ↓
index.tsx
  ↓
App.tsx
  ↓
Header | Content | Footer
```

---





* `.git` = Git engine (brain)
* `.gitignore` = Instruction list

---

## 🧠 What Is the `.git` Folder?

`.git` is a **hidden folder** created when Git is initialized.

It contains:

* Commit history
* Branch info
* Git configuration

If a folder has `.git` inside it:
👉 That folder is a **Git repository**

---

## 🧠 Why We Want to Delete `.git` (In Your Case)

You want:

```
ONE GitHub repository
└── many React projects
```

But Create React App created:

```
react-components-demo3/
 └── .git   ❌ (nested repo)
```

Nested Git repositories cause:

* Confusion
* Push errors
* Broken Git history

So we remove `.git` **inside each project**, and keep **only ONE Git repo at TAL level**.

---

## ⚠️ VERY IMPORTANT SAFETY RULE

Deleting `.git`:

* ❌ Does NOT delete your code
* ❌ Does NOT break your React app
* ✅ Only removes Git tracking

---

## 🧩 How to Delete `.git` Folder (Step-by-Step)

### 🔹 Method 1: Using File Explorer (EASIEST)

1️⃣ Open **File Explorer**
2️⃣ Go to:

```
C:\Users\sathi\OneDrive\Desktop\05Jan\TAL\react-components-demo3
```

3️⃣ Enable **Hidden files**

* Click **View**
* Tick ✅ **Hidden items**

4️⃣ You will see:

```
.git   ← folder (NOT a file)
```

5️⃣ Right-click `.git`
6️⃣ Click **Delete**

✅ Done.

---

### 🔹 Method 2: Using Command Line (Safe & Clean)

Make sure you are **inside the project folder**:

```bash
cd react-components-demo3
```

Then run:

```bash
rmdir /s /q .git
```

⚠️ Be careful:

* This deletes **only the `.git` folder**
* Type exactly `.git`

---

## ❓ What About `.gitignore`?

📄 `.gitignore` is a **normal text file**

Example:

```
node_modules/
build/
```

### 👉 DO NOT delete `.gitignore`

Why?

* It tells Git what **NOT to upload**
* Needed when TAL becomes the Git repo

---

## 🧠 After Deleting `.git`, What Happens?

If you run:

```bash
git status
```

You will see:

```
fatal: not a git repository
```

✔ This is EXPECTED
✔ This is GOOD

Later, when you run `git init` in `TAL`, Git will work again.

---

## 🧠 Quick Memory Trick

| Item           | Meaning       | Action                   |
| -------------- | ------------- | ------------------------ |
| `.git`         | Hidden folder | ❌ Delete (project-level) |
| `.gitignore`   | Text file     | ✅ Keep                   |
| `node_modules` | Dependencies  | ❌ Don’t upload           |
| Source code    | Your work     | ✅ Safe                   |

---


