
---

This project demonstrates how to create and use forms in React using:
- Create React App
- TypeScript
- RSpack

## Features
- Controlled inputs
- useState hook
- Form submission handling

# What is a Form in React? (Very Simple Explanation)

A **form** is how a user enters data:

* Name
* Email
* Password
* Feedback
* etc.

In **plain HTML**, the browser controls the form.

In **React**, **we control the form using state**.

This means:

* React stores the input value
* React updates the value
* React decides what happens on submit

This is called a **Controlled Component**.

---

# Important Concepts (Beginner Level)

## 🔹 JSX

Looks like HTML, but it’s actually JavaScript syntax used in React.

```tsx
<input />
```

---

## 🔹 State (`useState`)

State is **memory for the component**.

Example:

```ts
const [name, setName] = useState("");
```

* `name` → current value
* `setName` → function to update the value

---

## 🔹 Event Handling

When user types:

```tsx
onChange={(e) => setName(e.target.value)}
```

When user submits:

```tsx
onSubmit={handleSubmit}
```

---

# 3️⃣ What We Will Build

✅ A simple **User Registration Form**
Fields:

* Name
* Email
* Password

On submit:

* Prevent page refresh
* Show entered data on the screen

---

# Step-by-Step: Create the Project

---

### Create CRA + TypeScript App

```bash
npx create-react-app react-forms-demo --template typescript
cd react-forms-demo
```

---

## Step : Install RSpack

```bash
npm install -D @rspack/cli @rspack/core
```

---

### 📌 Step Add RSpack Config

Create a file **`rspack.config.js`** in project root:

```js
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    static: "./public",
    port: 3000,
    hot: true,
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

THIS LINE IS REQUIRED in index.html FOR RSPACK

<script src="/bundle.js"></script>

---

### 📌 Step Update `package.json`

Replace **scripts** section:

```json
"scripts": {
  "start": "rspack serve",
  "build": "rspack build"
}
```

---

### 🔹 When user types:

* `onChange` fires
* React updates state
* Input value changes automatically

### 🔹 When user clicks **Register**:

* `handleSubmit` runs
* Page refresh is stopped
* Data is shown in alert

---

## Run the Project
1. Install Node.js
2. Run `npm install`
3. Run `npm start`
4. Open http://localhost:3000

## Concepts Covered
- JSX
- State
- Events
- Controlled Forms
```

---

# What You Learned 🎯

✅ What React forms are
✅ What state is
✅ How input values are stored
✅ How form submission works
✅ How CRA + TypeScript + RSpack works

---

Key Lesson (Very Important)

🔑 React does NOT read values from the DOM
🔑 React renders from state only

So:
Want to show value → set state
Want to clear value → reset state