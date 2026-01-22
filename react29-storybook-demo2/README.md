
### Storybook

**Storybook is a tool for developing and visualizing UI components in isolation by defining different states (stories) for each component.**

**Storybook allows developers to build, test, and document UI components such as buttons or sidebars independently by creating stories that represent different visual and behavioral states of those components.**

---

## Project Setup

```bash
npx create-react-app react29-storybook-demo2 --template typescript
cd react29-storybook-demo2
code .
```

---

## Clean Install (to avoid dependency issues)

```bash
rmdir /s /q node_modules
del package-lock.json
npm install
```

---

## Fix AJV dependency issue (Storybook + CRA)

```bash
npm install --save-dev ajv@8 ajv-keywords@5
```

---

## Install Storybook framework for CRA (Webpack 5)

```bash
npm install --save-dev @storybook/react-webpack5
```

---

## Update `tsconfig.json`

```json
"exclude": [
  "**/*.stories.ts",
  "**/*.stories.tsx"
]
```

---

## Run Storybook

```bash
npm run storybook
```

If the `storybook` script is missing:

```bash
npm run
```

Then initialize Storybook:

```bash
npx storybook@latest init
```

---

## Create Components and Stories

```txt
src/components/Button/
 ├─ Button.tsx
 └─ Button.stories.tsx
```

---

# 🧠 Explanation of Each Step (Very Important)

---

## 1️⃣ `npx create-react-app ... --template typescript`

**Purpose:**
Creates a new React application using:

* Create React App
* TypeScript support

This gives you:

* `tsconfig.json`
* `.tsx` files
* Type checking out of the box

---

## 2️⃣ `cd react29-storybook-demo2`

Moves into the newly created project directory.

---

## 3️⃣ `code .`

Opens the project in **VS Code**.

---

## 4️⃣ Remove `node_modules` and `package-lock.json`

```bash
rmdir /s /q node_modules
del package-lock.json
```

**Why this is done:**

* Clears broken or conflicting dependencies
* Ensures a fresh install
* Very useful when Storybook or CRA behaves strangely

---

## 5️⃣ `npm install`

Reinstalls all dependencies cleanly based on `package.json`.

---

## 6️⃣ Install AJV packages

```bash
npm install --save-dev ajv@8 ajv-keywords@5
```

**Why this is needed:**

* Storybook uses Webpack
* Webpack uses `schema-utils`
* `schema-utils` depends on `ajv`

This fixes:

```
Cannot find module 'ajv/dist/compile/codegen'
```

---

## 7️⃣ Install Storybook framework package

```bash
npm install --save-dev @storybook/react-webpack5
```

**Why this is required:**

* CRA uses **Webpack 5**
* Storybook v10 requires a **framework package**
* This package connects Storybook + CRA correctly

---

## 8️⃣ Update `tsconfig.json`

```json
"exclude": [
  "**/*.stories.ts",
  "**/*.stories.tsx"
]
```

**Reason:**

* CRA’s TypeScript checker scans all files in `src/`
* Story files are **development-only**
* Excluding them prevents TypeScript errors

👉 Storybook still works normally.

---

## 9️⃣ `npm run storybook`

Runs Storybook **only if** this script exists in `package.json`.

---

## 🔟 If `storybook` script is missing

```bash
npm run
```

Lists available scripts.

If `storybook` is not listed, run:

```bash
npx storybook@latest init
```

**What `storybook init` does:**

* Installs Storybook dependencies
* Creates `.storybook/` folder
* Adds `storybook` and `build-storybook` scripts

---

## 1️⃣1️⃣ Creating Components and Stories

```txt
Button.tsx          → React component
Button.stories.tsx → Visual states (stories)
```

### Conceptually:

* **Component** → reusable UI
* **Story** → that component with specific props

Example:

```tsx
<Button label="Save" disabled />
```

That single state becomes **one story**.

---

# ✅ Final One-Line Summary (Very Strong)

> **Storybook helps developers build, visualize, and document UI components in isolation by defining stories that represent different states of a component.**

Your understanding is solid now.
If you want next:

* 🎛 Storybook Controls
* 🧠 Interview-ready explanation
* 🧩 Storybook vs unit tests

Just say the word 👍
