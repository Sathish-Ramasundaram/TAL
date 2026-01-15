
---

# 🚀 GOAL (What we are building)

A **React app** that:

* Uses **GraphQL**
* Uses **Apollo Client**
* Uses **TypeScript**
* Uses **Rspack**
* Shows **Users (name, email, phone)**

---

# 🧱 STEP 0: Open Terminal

Open **Command Prompt / PowerShell / VS Code Terminal**

Go to the folder where you keep projects:

```bash
cd C:\Training\TAL
```

---

# 🧱 STEP 1: Create Project Folder

```bash
mkdir react-graphql-users
cd react-graphql-users
```

---

# 🧱 STEP 2: Initialize npm project

```bash
npm init -y
```

This creates `package.json`.

---

# 🧱 STEP 3: Install REQUIRED dependencies

### 📦 Runtime dependencies (React + GraphQL)

```bash
npm install react react-dom @apollo/client graphql
```

### 📦 Dev dependencies (TypeScript + Rspack)

```bash
npm install -D typescript @types/react @types/react-dom @rspack/core @rspack/cli @rspack/dev-server
```

✅ **Do NOT skip `graphql`**
(This was your earlier error)

---

# 🧱 STEP 4: Create folder structure

```bash
mkdir src public
```

Inside `src`:

```bash
type nul > src/index.tsx
type nul > src/App.tsx
type nul > src/index.css
```

Inside `public`:

```bash
type nul > public/index.html
```

In root:

```bash
type nul > tsconfig.json
type nul > rspack.config.js
```

---

# 🧱 STEP 5: package.json (UPDATE)

👉 Open `package.json` and **replace fully** with this:

```json
{
  "name": "react-graphql-users",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "start": "rspack serve",
    "build": "rspack build"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@apollo/client": "^3.9.0",
    "graphql": "^16.8.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.2.2",
    "@rspack/core": "^0.6.5",
    "@rspack/cli": "^0.6.5",
    "rspack-dev-server": "^0.6.5"
  }
}
```

---

# 🧱 STEP 6: tsconfig.json

👉 Paste this exactly:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "lib": ["DOM", "ES6"],
    "jsx": "react",
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

---

# 🧱 STEP 7: rspack.config.js

👉 Paste this exactly:

```js
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "builtin:swc-loader"
      },
      {
        test: /\.css$/,
        type: "css"
      }
    ]
  },
  devServer: {
    port: 3000,
    static: "./public",
    hot: true
  }
};
```

🚫 **DO NOT add css-loader / style-loader**
Rspack handles CSS internally.

---

# 🧱 STEP 8: public/index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>React GraphQL App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

---

# 🧱 STEP 9: src/index.css

```css
body {
  font-family: Arial, sans-serif;
}
```

---

# 🧱 STEP 10: src/index.tsx

```ts
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container not found");
}

const root = createRoot(container);
root.render(<App />);
```

---

# 🧱 STEP 11: src/App.tsx (GraphQL + React)

```ts
import React from "react";

// Apollo core
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// Apollo React bindings
import { ApolloProvider, useQuery } from "@apollo/client/react";

// GraphQL Query
const GET_USERS = gql`
  query {
    users(options: { paginate: { page: 1, limit: 5 } }) {
      data {
        id
        name
        email
        phone
      }
    }
  }
`;

function UsersList() {
  const { loading, error, data } = useQuery(GET_USERS);

  console.log("Loading:", loading);
  console.log("Error:", error);
  console.log("Data:", data);

  if (loading) return <h2>Loading users...</h2>;
  if (error) return <h2>Error loading users</h2>;

  return (
    <div>
      {data.users.data.map((user: any) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

// Apollo Client
const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div style={{ padding: "20px" }}>
        <h1>GraphQL Users</h1>
        <UsersList />
      </div>
    </ApolloProvider>
  );
}

export default App;
```

---

# ▶️ STEP 12: Run the App

```bash
npm start
```

Open browser:

```
http://localhost:3000
```

---

# ✅ WHAT YOU SHOULD SEE

✔ Page title: **GraphQL Users**
✔ 5 users with name, email, phone
✔ Console logs showing loading → data

---

# 🧠 FINAL MENTAL MODEL (VERY IMPORTANT)

| Thing          | Meaning                   |
| -------------- | ------------------------- |
| ApolloProvider | Connects React ↔ GraphQL  |
| gql            | Writes GraphQL query      |
| useQuery       | Sends query automatically |
| loading        | true → false              |
| data           | arrives later             |
| UI             | re-renders automatically  |

---

## 🎉 Congratulations

You have now:

* Built a **GraphQL app from ZERO**
* Understood **why REST vs GraphQL differ**
* Debugged **real GraphQL issues**
* Used **React + TypeScript + Rspack**

---

Next steps (your choice):
1️⃣ GraphQL variables
2️⃣ GraphQL mutations
3️⃣ Error handling
4️⃣ REST vs GraphQL comparison app
5️⃣ Authentication

Just tell me 👌
