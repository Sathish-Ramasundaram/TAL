
👉 **CRA (Create React App)** starts the app
👉 CRA uses **Webpack internally**, NOT Rspack

So even though:

* You installed Rspack ✅
* You created `rspack.config.js` ✅

👉 **Rspack is completely ignored** ❌

---

## Why Rspack is NOT used automatically

CRA is opinionated (pre-configured).

Inside `package.json`, CRA already has this:

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build"
}
```

That means:

* `react-scripts` controls everything
* Webpack is hidden inside `react-scripts`
* CRA does **not look at `rspack.config.js`**

---

## Important Beginner Note:

> Installing Rspack ≠ Using Rspack

Rspack will work **ONLY IF**:

* You explicitly tell the project to use it
* OR you replace CRA’s default build system

---

For **learning React basics**, CRA + Webpack is **perfect**.

---

## When DOES Rspack actually start working?

Rspack works only if you do ONE of these:

### Option 1 Replace CRA build system (advanced ❌ for beginners)

* Eject CRA
* Configure Rspack manually
* Risky for beginners

### Option 2 Create a custom Rspack project (recommended later ✅)

* No CRA
* Rspack controls everything

### Option 3 Use tools like CRACO / custom scripts (intermediate)

👉 **Not recommended right now**, since you’re still learning basics.

---
