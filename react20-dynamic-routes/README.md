# Dynamic Routes and Route Parameters

This project demonstrates how to use dynamic routes in React Router.

## Routes
- / → Home
- /users → Users list
- /user/:id → User details page

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
- Dynamic routes
- Route parameters
- useParams hook
- Client-side navigation
```

---

# 🔑 Key Takeaways (Very Important)

✅ Dynamic routes reuse components
✅ `:id` means “variable value”
✅ `useParams()` reads URL values
✅ Same page, different data

---

---

# First: What Is a Dynamic Route? 

So far, you used **fixed routes**:

```
/about
/contact
```

But what if you want URLs like:

```
/user/1
/user/2
/user/3
```

👉 You **cannot create a separate route for every user**.

Instead, you use **dynamic routes**.

---

# What Is a Route Parameter?

A **route parameter** is a **variable part of the URL**.

Example:

```
/user/:id
```

Here:

* `:id` is a **parameter**
* It can be `1`, `2`, `99`, etc.

React Router **reads this value** and gives it to your component.

---

# Real-World Analogy 🧠

Think of this URL:

```
amazon.com/product/123
```

* `123` is the product ID
* Same page layout
* Different data

That’s exactly what **dynamic routing** does.

---

# What We Will Build

A small app with:

* Home page (`/`)
* Users page (`/users`)
* User details page (`/user/:id`)

Example URLs:

```
/user/1
/user/2
/user/3
```

---

## 📌 Step 1: Create CRA + TypeScript App

```bash
npx create-react-app react-dynamic-routes --template typescript
cd react-dynamic-routes
```

---

## 📌 Step 2: Install React Router

```bash
npm install react-router-dom
```

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
    historyApiFallback: true, // REQUIRED for dynamic routes
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
    <title>Dynamic Routes</title>
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
 ├─ pages/
 │   ├─ Home.tsx
 │   ├─ Users.tsx
 │   └─ UserDetails.tsx
 ├─ App.tsx
 └─ index.tsx
```

---

# Full Code (Beginner Friendly)

---

## 📁 `src/index.tsx`

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

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

---

## 📁 `src/App.tsx`

```tsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dynamic Routes Demo</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/users">Users</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<UserDetails />} />
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

## 📁 `src/pages/Users.tsx`

```tsx
import React from "react";
import { Link } from "react-router-dom";

function Users() {
  return (
    <div>
      <h2>👥 Users List</h2>

      <ul>
        <li><Link to="/user/1">User 1</Link></li>
        <li><Link to="/user/2">User 2</Link></li>
        <li><Link to="/user/3">User 3</Link></li>
      </ul>
    </div>
  );
}

export default Users;
```

---

## 📁 `src/pages/UserDetails.tsx`

```tsx
import React from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>👤 User Details</h2>
      <p>User ID from URL: <strong>{id}</strong></p>
    </div>
  );
}

export default UserDetails;
```

---

# How Dynamic Routes Work (Plain English)

### 🔹 URL visited:

```
/user/2
```

### 🔹 Route defined:

```tsx
<Route path="/user/:id" element={<UserDetails />} />
```

### 🔹 React Router:

* Reads `id` from URL
* Passes it to component

### 🔹 Component:

```ts
const { id } = useParams();
```

Now you can:

* Fetch user data
* Show different content
* Use same component

---

# Run the Project

```bash
npm start
```

Open:
👉 [http://localhost:3000](http://localhost:3000)

Click:

* Users
* User 1 / User 2 / User 3

Watch:

* URL changes
* Page updates
* No refresh

---


