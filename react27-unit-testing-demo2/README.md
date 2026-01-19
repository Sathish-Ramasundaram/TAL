
# 🧪 Unit Testing (Beginner Friendly – Detailed Notes)

---

## What is Unit Testing? (Very Simple)

### 🧠 Real-life analogy

Imagine a **calculator**:

* You don’t test the *entire calculator* at once
* You test **one button at a time**

  * Does `+` work correctly?
  * Does `-` work correctly?

👉 **Each small test = one unit test**

---

### In React

* A **unit** can be:

  * A function
  * A component
* **Unit testing** means:

  * Testing **one component at a time**
  * Testing it **in isolation**
  * Without running the full application

#### Examples:

```txt
Header component → test only Header
Button click → test only button behavior
```

This helps us identify issues early and ensures each piece works correctly on its own.

---

## What is “Coverage & Quality of Tests”?

---

### 🟢 Test Coverage (How much code is tested)

Test coverage answers this question:

> **“How much of my code is actually executed when tests run?”**

Typical coverage levels:

* **20%** → Very poor ❌
* **60%** → Acceptable ⚠️
* **80% or more** → Good ✅

Coverage usually measures:

* **Lines** – how many lines ran
* **Functions** – how many functions were called
* **Branches** – if/else paths that were executed

📌 **Important rules:**

* High coverage **does NOT always mean good tests**
* Low coverage usually means **risky or untested code**

---

### 🟢 Test Quality (How meaningful the tests are)

Coverage alone is not enough. **Quality matters more.**

#### ❌ Bad test example:

```txt
Check if the component renders
```

This only proves the app didn’t crash.

#### ✅ Good test example:

```txt
Check if clicking a button updates the counter
```

This tests **real user behavior**.

👉 **Golden rule:**

> Test what the **user does and sees**, not how the code is written.

This is why we use **React Testing Library (RTL)**.

---

## 🛠 Tools Used in This Project

* **Jest**

  * Test runner
  * Executes test files
  * Generates coverage reports
* **React Testing Library (RTL)**

  * Helps test components like a real user
  * Encourages better test quality

---

# 🧪 Hands-On Project: Unit Testing Demo

---

## Project Goal

We will build:

* A **Counter component**
* A **unit test for Counter**
* A **unit test for App**
* A **coverage report**

---

## Step 1: Create the Project

```bash
npx create-react-app react27-unit-testing-demo2 --template typescript
```

Move into the project folder:

```bash
cd react27-unit-testing-demo2
```

Open the project in VS Code:

```bash
code .
```

---

## ⚠️ Important Note About Rspack

In this project, **we are NOT using Rspack**.

Although the following command exists:

```bash
npm install -D @rspack/cli @rspack/core
```

👉 It is **not required** here and **not used**, because:

* CRA uses **Webpack internally**
* Jest works independently of the bundler

---

## Step 2: Install Testing Libraries

```bash
npm install -D @testing-library/react @testing-library/jest-dom
```

📌 **Note:**
Jest is already included with CRA, so no extra setup is needed.

`setupTests.ts` is also already present and correctly configured.

---

## Step 3: Create Counter Unit Test

### `Counter.test.tsx`

```ts
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("increments counter when button is clicked", () => {
  render(<Counter />);

  // Check initial state
  expect(screen.getByText("Count: 0")).toBeInTheDocument();

  // Click button
  fireEvent.click(screen.getByText("Increment"));

  // Check updated state
  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});
```

This test:

* Renders the component
* Simulates a user click
* Verifies UI updates

✅ This is a **high-quality unit test**

---

## Step 4: Run Tests

```bash
npm test
```

### Initial Result

You will see:

* ✅ `Counter.test.tsx` → PASS
* ❌ `App.test.tsx` → FAIL

---

## Why Did `App.test.tsx` Fail?

CRA creates a **default test** that checks for:

```txt
learn react
```

But your UI no longer contains that text.

👉 The test is outdated, not your app.

---

## Step 5: Fix `App.test.tsx`

Update it to match your actual UI:

```ts
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Unit Testing Demo heading", () => {
  render(<App />);
  expect(screen.getByText("Unit Testing Demo")).toBeInTheDocument();
});
```

Run tests again:

```bash
npm test
```

✅ Now both tests pass.

---

# 📊 Test Coverage

Run coverage command:

```bash
npm test -- --coverage
```

### What Gets Covered

* `App.tsx` → covered by `App.test.tsx`
* `Counter.tsx` → covered by `Counter.test.tsx`

✅ Good coverage
✅ Good test quality

---

## 🧠 Mental Model (Very Important)

```
Change UI → Update Test
Failing test ≠ broken app
Failing test = safety net working
```

---

## 🔴 Why Some Files Show Red in Coverage?

Files like:

* `index.tsx`
* `reportWebVitals.ts`

appear red because:

* Jest checks them automatically
* They contain **no business logic**
* They are **not meant for unit testing**

This is **normal and expected**.

---

## ✅ Correct Way to Fix Coverage Noise

Exclude non-business files from coverage.

Add this to **`package.json`**:

```json
"jest": {
  "collectCoverageFrom": [
    "src/**/*.{ts,tsx}",
    "!src/index.tsx",
    "!src/reportWebVitals.ts"
  ]
}
```

Now run:

```bash
npm test -- --coverage
```

🎯 Coverage now reflects **only meaningful code**

---

## 🏁 Final Takeaways (Memorize This)

* Unit tests focus on **small, isolated parts**
* Coverage shows **what was executed**
* Quality tests check **user behavior**
* Not all files need testing
* Coverage is a **guide**, not a score

---
