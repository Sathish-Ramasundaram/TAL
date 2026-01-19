# 📘 Project Summary: React Props Demo (TypeScript)

## 🎯 Purpose
This project demonstrates how **React props** are used to pass data from a parent component down through multiple child components. It shows the flow of data in a **GrandParent → Parent → Child** hierarchy.

---

## 🖥️ Output
When you run the project, the UI displays:

```
React Props Demo
Dashboard
Profile
User Info
Username: Sathish
```

Here:
- `App` passes the `username` prop to `Dashboard`.
- `Dashboard` passes it to `Profile`.
- `Profile` passes it to `UserInfo`.
- Finally, `UserInfo` renders the username.

---

## 🔗 Data Flow
- **App (GrandParent)** → provides `username` = "Sathish"  
- **Dashboard (Parent)** → receives `username` and passes it down  
- **Profile (Child)** → receives `username` and passes it further  
- **UserInfo (GrandChild)** → receives `username` and displays it  

This illustrates **prop drilling** — data flows one step at a time through components.

---

## 📌 When is this useful?
- When you need to **share data across multiple nested components**.  
- For **simple projects or demos** where state management libraries (like Redux or Context API) are not required.  
- Helps beginners understand **how props work** before moving to advanced patterns.

---

## ⚙️ Setup Instructions
1. Create the project with TypeScript template:
   ```bash
   npx create-react-app react-props-demo --template typescript
   ```
2. Install additional dev dependencies:
   ```bash
   npm install --save-dev ajv@8 ajv-keywords@5
   ```
3. Clean and reinstall node modules if needed:
   ```bash
   rmdir /s /q node_modules
   del package-lock.json
   npm install
   ```

---

## 📂 Project Structure
```
src/
 ├── App.tsx
 └── components/
      ├── Dashboard.tsx
      ├── Profile.tsx
      └── UserInfo.tsx
```

---
