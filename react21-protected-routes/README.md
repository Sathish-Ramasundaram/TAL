# React Protected Routes Demo

This project demonstrates how to protect routes in React.

## Pages
- / → Home (public)
- /login → Login (public)
- /dashboard → Dashboard (protected)
---

# What Are Protected Routes?

A **protected route** is a page that **only logged-in users can see**.

Examples:

| Page         | Who can see it       |
| ------------ | -------------------- |
| `/dashboard` | Only logged-in users |
| `/profile`   | Only logged-in users |
| `/login`     | Everyone             |

If a user is **not logged in** and tries to visit `/dashboard`, we **redirect them to `/login`**.

---

# How Do We “Protect” a Route?

1. Keep a **state** to know if the user is logged in (`isLoggedIn`)
2. Create a **wrapper component** (`ProtectedRoute`)
3. If logged in → show the page
4. If not → redirect to login page

---

# What We Will Build

* **Login Page** (`/login`) → enter username → “login”
* **Dashboard Page** (`/dashboard`) → protected
* **Home Page** (`/`) → public
* **Logout** → clears login

---

# Project Setup (Step by Step)

This is similar to previous projects:

---

## Step 1: Create CRA + TypeScript App

```bash
npx create-react-app react-protected-routes --template typescript
cd react-protected-routes
```

---

## Step 2: Install React Router

```bash
npm install react-router-dom
```

---

## Step 3: Install RSpack

```bash
npm install -D @rspack/cli @rspack/core
```

---

## Step 4: Create `rspack.config.js`

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
    historyApiFallback: true, // required for routing
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

## Step 5: Update `package.json` scripts

```json
"scripts": {
  "start": "rspack serve",
  "build": "rspack build"
}
```

---

## Step 6: Update `public/index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Protected Routes Demo</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="/bundle.js"></script>
  </body>
</html>
```

---

# 5️⃣ Project Structure

```
src/
 ├─ pages/
 │   ├─ Home.tsx
 │   ├─ Login.tsx
 │   └─ Dashboard.tsx
 ├─ components/
 │   └─ ProtectedRoute.tsx
 ├─ App.tsx
 └─ index.tsx
```

---

# 6️⃣ Full Code

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
import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  // Simple auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🔐 Protected Routes Demo</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        {isLoggedIn ? (
          <>
            <Link to="/dashboard">Dashboard</Link> |{" "}
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
```

---

## 📁 `src/components/ProtectedRoute.tsx`

```tsx
import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  isLoggedIn: boolean;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
```

✅ What this does:

* If `isLoggedIn = false` → redirect to `/login`
* Else → show children (protected page)

---

## 📁 `src/pages/Home.tsx`

```tsx
import React from "react";

function Home() {
  return <h2>🏠 Home Page (Public)</h2>;
}

export default Home;
```

---

## 📁 `src/pages/Login.tsx`

```tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  setIsLoggedIn: (val: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() !== "") {
      setIsLoggedIn(true);
      navigate("/dashboard");
    } else {
      alert("Enter username!");
    }
  };

  return (
    <div>
      <h2>🔑 Login Page</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
```

---

## 📁 `src/pages/Dashboard.tsx`

```tsx
import React from "react";

function Dashboard() {
  return <h2>📊 Dashboard (Protected)</h2>;
}

export default Dashboard;
```

---

# 7️⃣ How It Works (Plain English)

1. User visits `/dashboard`

   * If **not logged in** → redirect to `/login`
   * If **logged in** → show dashboard

2. Login page:

   * Enter username → click login
   * Sets `isLoggedIn = true` → redirect to `/dashboard`

3. Logout button:

   * Clears `isLoggedIn` → redirect to login

---

# Run the Project

```bash
npm start
```

Open:

* [http://localhost:3000](http://localhost:3000)

Try:

* Visit `/dashboard` directly → redirected to login
* Login → redirected to dashboard
* Logout → redirected to login

---

## Concepts Learned
- Protected routes
- Redirect using Navigate
- Authentication state
- useNavigate for programmatic navigation
```

---

# 🔑 Key Takeaways

✅ Protected routes require **auth check**
✅ `ProtectedRoute` component makes it reusable
✅ `Navigate` handles redirects
✅ `useNavigate` allows programmatic navigation

---
