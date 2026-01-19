**React Context is a built‑in API that allows you to share data across a component tree without manually passing props through every level. It’s designed to solve the problem of “prop drilling,” where values must be handed down step by step from parent to child even if intermediate components don’t use them.**

---

## 🔹 What React Context Does
- **Global Store**: Context creates a centralized store for values (like user info, theme, or language).
- **Provider**: Wraps part of the component tree and supplies data to all children inside it.
- **Consumer (`useContext`)**: Any component inside the tree can directly access the provided data without receiving props explicitly.

---

## 🔹 Why It’s Useful
- **Avoids Prop Drilling**: Instead of passing `username` from `App → Dashboard → Profile → UserInfo`, Context lets `UserInfo` access it directly.
- **Cleaner Code**: Reduces boilerplate and makes components easier to maintain.
- **Type Safety with TypeScript**: Ensures that the data structure is consistent across the app.
- **Scales Well**: Useful for medium‑sized apps where global state libraries (Redux, Zustand) may be overkill.

---

## 🔹 Example Flow
Without Context:
```
App → Dashboard → Profile → UserInfo
```
Each component must pass `username` as a prop.

With Context:
```
App (Provider supplies username)
   └─ UserInfo (consumes username directly)
```

---

## 🔹 Common Use Cases
- **User Authentication**: Share logged‑in user details across the app.
- **Theme Management**: Toggle between light/dark mode globally.
- **Localization**: Provide language settings to all components.
- **Configuration Data**: Share app‑wide settings without repetitive props.

---

👉 Would you like me to also add a **diagram** (like a simple tree showing Provider → Consumer) to your README so the data flow is visually clear?

---

# **React Context Demo (CRA + TS + Rspack)**

---

## **Step 1 — Create CRA with TypeScript**

1. Open terminal/command prompt.
2. Run:

```bash
npx create-react-app react-context-demo --template typescript
```

3. Go into project folder:

```bash
cd react-context-demo
```

---

## **Step 2 — Install Rspack (optional dev packages)**

1. Run:

```bash
npm install --save-dev @rspack/core @rspack/cli
```

2. Fix CRA dependency conflicts:

```bash
npm install --save-dev ajv@8 ajv-keywords@5
```

3. Delete `node_modules` and `package-lock.json`:

Windows:

```bash
rmdir /s /q node_modules
del package-lock.json
npm install
```

Mac/Linux:

```bash
rm -rf node_modules package-lock.json
npm install
```

4. Start CRA to verify:

```bash
npm start
```

You should see the CRA default page.

---

## **Step 3 — Understand React Context (Concept)**

1. Context solves **prop drilling**.
2. 3 parts:

| Part            | Purpose                  |
| --------------- | ------------------------ |
| `createContext` | Create a global store    |
| `Provider`      | Supply data to the store |
| `useContext`    | Consume data anywhere    |

3. Nested example:

```
App
 └─ Dashboard
      └─ Profile
           └─ UserInfo
```

* Without Context: data must pass through props.
* With Context: `UserInfo` can access data directly.

---

## **Step 4 — Setup Context Files**

### **4.1 — Create `context` folder**

* Inside `src/`, create folder:

```
src/context/
```

### **4.2 — Create `UserContext.tsx`**

* Inside `context/` folder, create:

```
UserContext.tsx
```

---

### **4.3 — Import React**

```ts
import React from "react";
```

---

### **4.4 — Define Context Type (TypeScript)**

```ts
type UserContextType = {
  username: string;
};
```

---

### **4.5 — Create Context**

```ts
export const UserContext = React.createContext<UserContextType>({
  username: "",
});
```

---

### **4.6 — Create UserProvider Component**

```ts
type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  return (
    <UserContext.Provider value={{ username: "Sathish" }}>
      {children}
    </UserContext.Provider>
  );
};
```

---

### **4.7 — Wrap App with UserProvider**

1. Open `src/index.tsx`
2. Add import:

```ts
import { UserProvider } from "./context/UserContext";
```

3. Wrap `<App />`:

```tsx
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
```

---

## **Step 5 — Create Nested Components**

### **5.1 — Create `components` folder**

```
src/components/
```

### **5.2 — Create `Dashboard.tsx`**

```tsx
import React from "react";
import Profile from "./Profile";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Profile />
    </div>
  );
};

export default Dashboard;
```

---

### **5.3 — Create `Profile.tsx`**

```tsx
import React from "react";
import UserInfo from "./UserInfo";

const Profile = () => {
  return (
    <div>
      <h3>Profile</h3>
      <UserInfo />
    </div>
  );
};

export default Profile;
```

---

### **5.4 — Create `UserInfo.tsx`**

```tsx
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserInfo = () => {
  const { username } = useContext(UserContext);

  return (
    <div>
      <h4>User Info</h4>
      <p>Username: {username}</p>
    </div>
  );
};

export default UserInfo;
```

---

### **5.5 — Update `App.tsx`**

```tsx
import React from "react";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <h1>React Context Demo</h1>
      <Dashboard />
    </div>
  );
}

export default App;
```

---

## **Step 6 — Run the App**

1. Start CRA:

```bash
npm start
```

2. Open browser → `http://localhost:3000`

You should see:

```
React Context Demo
Dashboard
Profile
User Info
Username: Sathish
```

✅ Full React Context flow works.

* Changing `username` in `UserProvider` updates `UserInfo` automatically.
* No props were passed from App → Dashboard → Profile → UserInfo.

---

### ✅ Key Takeaways

1. **Context solves prop drilling**.
2. **Provider supplies data**, `useContext` consumes it.
3. **TypeScript ensures type safety**.
4. Folder structure:

```
src/
 ├── context/
 │    └── UserContext.tsx
 ├── components/
 │    ├── Dashboard.tsx
 │    ├── Profile.tsx
 │    └── UserInfo.tsx
 ├── App.tsx
 └── index.tsx
```

