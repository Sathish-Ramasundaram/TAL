


I’ll show you:

1. how to **create**
2. how to **write a unit test**
3. how to **run it**
4. how to **see coverage**

---

```

📌 **Important**
CRA already includes:

* Jest
* Testing Library
* Test configuration

👉 **No extra installation needed**

---

## ✅ Step 1: Understand where tests live

CRA automatically looks for:

* `*.test.ts`
* `*.test.tsx`

Anywhere inside `src/`.

---

## ✅ Step 2: Create a simple function (unit to test)

### Create a folder

```txt
src/utils/
```

### Create file: `src/utils/add.ts`

```ts
export function add(a: number, b: number) {
  return a + b;
}
```

🧠 This is our **unit** (smallest piece of logic).

---

## ✅ Step 3: Create a test for the function

### Create file: `src/utils/add.test.ts`

```ts
import { add } from "./add";

test("adds two numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
});

test("adds negative numbers correctly", () => {
  expect(add(-2, -3)).toBe(-5);
});
```

---

## 🧠 What each line means

```ts
test("adds two numbers correctly", () => {
```

➡️ Defines one test case (description)

```ts
expect(add(2, 3)).toBe(5);
```

➡️ Assertion
➡️ “I expect this result to be exactly 5”

---

## ✅ Step 4: Run the tests

```bash
npm test
```

What happens:

* Jest starts
* Finds `add.test.ts`
* Runs the tests
* Shows result in terminal

You’ll see:

```
PASS  src/utils/add.test.ts
```

🎉 Your first unit test ran successfully.

---

## ✅ Step 5: Run tests once (CI-style)

CRA runs tests in watch mode by default.

To run **once**:

```bash
npm test -- --watch=false
```

---

## ✅ Step 6: Check test coverage

```bash
npm test -- --coverage
```

Output example:

```txt
File     | % Stmts | % Branch | % Funcs | % Lines
add.ts   |   100   |   100    |   100   |   100
```

Include the following Jest configuration in package.json to control coverage collection and exclude files like index.tsx and reportWebVitals.ts from coverage checks.

✅ Your Code (No changes needed)
"jest": {
  "collectCoverageFrom": [
    "src/**/*.{ts,tsx}",
    "!src/index.tsx",
    "!src/reportWebVitals.ts"
  ]
}

This configuration ensures Jest measures coverage only for meaningful application code, not boilerplate files.

✅ Collects coverage from all TypeScript files
❌ Excludes entry-point files
❌ Excludes performance reporting files
🎯 Focuses coverage on business logic and components


🧠 Meaning:

* 100% of this file is tested

CRA also creates:

```txt
coverage/
```

(Open `coverage/lcov-report/index.html` in browser)

---

# 🧪 STEP-BY-STEP: Unit Testing a React Component

Now let’s test a **component**, not just a function.

---

## ✅ Step 7: Create a simple component

### `src/components/Greeting.tsx`

```tsx
type GreetingProps = {
  name: string;
};

export const Greeting = ({ name }: GreetingProps) => {
  return <h1>Hello, {name}</h1>;
};
```

---

## ✅ Step 8: Create test for the component

### `src/components/Greeting.test.tsx`

```tsx
import { render, screen } from "@testing-library/react";
import { Greeting } from "./Greeting";

test("renders greeting with name", () => {
  render(<Greeting name="Sathish" />);
  expect(screen.getByText("Hello, Sathish")).toBeInTheDocument();
});
```

---

## 🧠 What’s happening here

```ts
render(<Greeting name="Sathish" />);
```

➡️ Renders component **without running the full app**

```ts
screen.getByText("Hello, Sathish");
```

➡️ Finds text on screen

```ts
toBeInTheDocument();
```

➡️ Verifies it exists

---

## ✅ Step 9: Run tests again

```bash
npm test
```

You’ll now see:

```
PASS src/utils/add.test.ts
PASS src/components/Greeting.test.tsx
```

---

# 📊 Coverage vs Quality (Simple Understanding)

### Coverage

* Tells **how much code ran**
* Not enough alone

### Quality

Good test:

* Tests behavior
* Breaks when code breaks

Bad test:

* Tests implementation
* Always passes

---

# 🧠 Important Note About Rspack

You mentioned **CRA + TS + Rspack**.

👉 **Unit testing does NOT depend on Webpack or Rspack**

Why?

* Jest runs in **Node.js**
* It does not bundle code

So:

```
CRA → Jest → Unit Tests
```

Rspack matters for **build**, not **tests**.

---

# ✅ Final Mental Model (lock this in)

```
Unit test = input → output check
Component test = render → verify UI
Jest = test runner
Coverage = how much code ran
Quality = how useful tests are
```

---

## 🏁 One-line summary

> **Unit testing verifies individual functions or components in isolation using Jest to ensure correctness and confidence in code changes.**

---



