

# STEP 1 — Understand the Problem (WHY Context exists)

### ❌ Problem without Context (Prop Drilling)

Imagine this structure:

```
App
 └── Parent
      └── Child
           └── GrandChild
```

You want to pass a value like **username = "Sathish"** to `GrandChild`.

Without Context:

* App → Parent → Child → GrandChild
* Even if **Parent** and **Child** don’t need it, they must pass it.

This is called **prop drilling** ❌
It makes code:

* Hard to read
* Hard to maintain
* Error-prone

---

### ✅ Solution: React Context

**React Context allows data to be shared globally**
without passing props manually at every level.

Used for:

* Theme (dark/light)
* Language
* Logged-in user
* App settings

---

### 🔑 One-line definition (important for interviews)

> **React Context lets you share data across components without prop drilling.**

---

### ❗ Very important rule

Context is **NOT** for:

* Heavy logic
* Frequent updates (can cause re-renders)

Context **IS** for:

* App-level data

---

## 🧠 Concept we will build (Simple & Real)

We will build:

* A **UserContext**
* Store a username
* Read it inside a deeply nested component

---

---

# Create CRA + TypeScript + Rspack Project

## 2.1 Create CRA with TypeScript

Open **Command Prompt / Terminal** and run:

```bash
npx create-react-app react-context-demo --template typescript
```

📌 This creates:

* React
* TypeScript
* Default CRA structure

Wait until it finishes.

---

## 2.2 Go inside the project

```bash
cd react-context-demo
```

---

code . 
To open in new VS window

## 2.3 Install Rspack dependencies

Run **exactly this**:

```bash
npm install --save-dev @rspack/core @rspack/cli rspack-plugin-html
```

Error: 

C:\Training\TAL\react-context-demo>npm install --save-dev @rspack/core @rspack/cli rspack-plugin-html
npm error code E404
npm error 404 Not Found - GET https://registry.npmjs.org/rspack-plugin-html - Not found
npm error 404
npm error 404  The requested resource 'rspack-plugin-html@*' could not be found or you do not have permission to access it.
npm error 404
npm error 404 Note that you can also install from a
npm error 404 tarball, folder, http url, or git url.
npm error A complete log of this run can be found in: C:\Users\sathi\AppData\Local\npm-cache\_logs\2026-01-19T06_02_39_028Z-debug-0.log


```
npm error 404 Not Found - rspack-plugin-html
```

👉 **`rspack-plugin-html` does NOT exist** as an npm package.

That package name is often confused with **HtmlWebpackPlugin**, but Rspack **does not require** a separate HTML plugin when used with CRA.

---

# 🧠 CRITICAL CONCEPT (Mentor-level clarity)

### CRA + Rspack reality

* CRA **already hides the bundler**
* CRA **does NOT support replacing Webpack with Rspack directly**
* You **cannot just “install Rspack” and expect CRA to use it**

So when your mentor says:

> “Use CRA + TypeScript + Rspack”

It means:

* CRA project structure
* TypeScript
* Rspack **for learning / tooling / Storybook / custom builds**
* NOT ejecting CRA right now

# ✅ Correct Fix (What to do NOW)

### Step 2.3 — Install ONLY valid Rspack packages

Run this instead:

```bash
npm install --save-dev @rspack/core @rspack/cli
```

❌ Do **NOT** install `rspack-plugin-html`

---

## 2.4 Verify again

```bash
npm start
```

Error: 
Cannot find module 'ajv/dist/compile/codegen'

Excellent — thanks for pasting the **full error** 👍
This is a **known compatibility issue**, not a React mistake.

We’ll fix it **safely**, **one step**, and **without breaking CRA**.

---

# 🔴 What went wrong (simple explanation)

Error:

```
Cannot find module 'ajv/dist/compile/codegen'
```

### Why this happens

* **CRA (react-scripts)** depends on **Webpack**
* Webpack depends on **ajv + ajv-keywords**
* Installing **Rspack pulled a newer ajv version**
* CRA expects **older ajv**
* Result → ❌ version mismatch

👉 This is a **dependency conflict**, not your code.

---

# ✅ Correct Fix (Industry-safe)

We will **pin ajv to the version CRA expects**.

---

## STEP 2.5 — Install compatible ajv versions

Run **exactly these commands**:

```bash
npm install --save-dev ajv@8 ajv-keywords@5
```

⚠️ Do **NOT** use `--force`
⚠️ Do **NOT** run `npm audit fix --force`

---

## STEP 2.6 — Clean install (important)

Now reset node modules properly:

```bash
rm -rf node_modules package-lock.json
npm install
```

👉 If `rm -rf` doesn’t work on Windows, use:

```bash
rmdir /s /q node_modules
del package-lock.json
npm install
```

---

## STEP 2.7 — Start the app again

```bash
npm start
```

---

## ✅ Expected Result

* App starts successfully
* Browser opens
* No red error screen
* You see default CRA page

The **DeprecationWarning is harmless** — ignore it for now.

---

**side-by-side mental flow diagrams** Props vs Context

---

## 🔴 FLOW 1: Props (Prop Drilling)

### Goal

Send `username = "Sathish"` from `App` to `UserInfo`

### Component Tree

```
App
 └── Dashboard
      └── Profile
           └── UserInfo
```

### Flow Diagram (Props)

```
App
│
│  username="Sathish"
│
▼
Dashboard
│
│  props.username
│
▼
Profile
│
│  props.username
│
▼
UserInfo
│
│  uses props.username
▼
Display username
```

### ❌ Problems

* Dashboard & Profile **don’t need** username
* They still must pass it
* Any rename breaks multiple files

---

## 🟢 FLOW 2: React Context (`useContext`)

### Goal

Send `username = "Sathish"` **directly** to `UserInfo`

### Component Tree

```
<UserProvider>
  App
   └── Dashboard
        └── Profile
             └── UserInfo
</UserProvider>
```

### Flow Diagram (Context)

```
UserContext (Global Store)
│
│  value = { username: "Sathish" }
│
├───────────────┐
│               │
▼               ▼
App           UserInfo
                │
                │ useContext(UserContext)
                ▼
           Display username
```

### ✅ Benefits

* No prop passing
* Components access data **only if needed**
* Cleaner, scalable

---

## 🧠 One-line comparison (very important)

| Props                | Context                 |
| -------------------- | ----------------------- |
| Parent → Child       | Global access           |
| Manual passing       | Automatic subscription  |
| Good for small trees | Good for app-level data |

---

## 🎯 Interview Power Line

> Props pass data down explicitly, while Context allows components to consume shared data directly without prop drilling using useContext.

---