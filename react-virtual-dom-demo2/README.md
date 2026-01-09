
**Project name:** `react-virtual-dom-demo2`
---

## 1️⃣ First: What problem are we solving?

Web pages are made using **HTML**.
When the browser loads HTML, it creates something called the **DOM**.

### DOM (Document Object Model)

* DOM = Browser’s internal tree of your page
* Every `<div>`, `<p>`, `<button>` becomes a DOM node

⚠️ Updating the DOM is **slow**.

Example:

```html
<p>Count: 0</p>
```

If this changes to `1`, the browser may:

* Recalculate layout
* Repaint pixels

For **big apps**, this becomes slow.

---

## 2️⃣ Normal DOM (without React)

This is how websites worked before React.

### Example (Normal DOM)

```html
<p id="count">0</p>
<button onclick="increase()">Increase</button>

<script>
  let count = 0;
  function increase() {
    count = count + 1;
    document.getElementById("count").innerText = count;
  }
</script>
```

### What is happening?

1. Button click runs JavaScript
2. JavaScript directly changes the DOM
3. Browser immediately updates the page

This works, but:

* You must manage everything yourself
* Performance becomes bad in large apps

---

## 3️⃣ React’s solution: Virtual DOM

React does **NOT** directly change the real DOM every time.

Instead, React uses a **Virtual DOM**.

### Virtual DOM (simple words)

* A **fake DOM** kept in memory
* Written using JavaScript objects
* Very fast to update

### React process

1. Create Virtual DOM
2. User clicks button
3. React updates Virtual DOM
4. React compares old vs new Virtual DOM (diffing)
5. React updates ONLY the changed part in real DOM

✅ Faster
✅ Cleaner code

---

## 4️⃣ What we are building

A **simple counter app**:

* Button increases number
* React updates UI using Virtual DOM

---


## Create the project

```bash
npx create-react-app react-virtual-dom-demo2 --template typescript
cd react-virtual-dom-demo2
npm start
```

Open browser:

```
http://localhost:3000
```

---

## Folder structure (important)

```text
react-virtual-dom-demo2
│
├── public
│   └── index.html
├── src
│   ├── App.tsx
│   └── index.tsx
├── package.json
└── tsconfig.json
```

Do NOT panic. We will explain everything.

---

## `public/index.html`

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### Why this exists

* Browser loads this file
* React needs ONE root element
* React controls everything inside `#root`

---

## `src/index.tsx` (React entry point)

```tsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
```

### Line-by-line explanation

```ts
import React from "react";
```

* Brings React into this file

```ts
import { createRoot } from "react-dom/client";
```

* Connects React to browser DOM

```ts
import App from "./App";
```

* Loads your main component

```ts
createRoot(...).render(<App />);
```

* React takes control of `#root`
* Virtual DOM starts here

---

## `src/App.tsx` (Virtual DOM in action)

```tsx
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Virtual DOM Demo</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default App;
```

### Explanation (slow)

```ts
useState(0)
```

* Stores data in memory
* Initial value = 0

```ts
setCount(count + 1)
```

* Updates Virtual DOM
* React compares changes

```tsx
<p>Count: {count}</p>
```

* Only this text changes in real DOM

You did NOT touch the DOM manually.
React did it efficiently.

---

## What ACTUALLY happens when button is clicked

1. Button click triggers event
2. `setCount` updates state
3. React updates Virtual DOM
4. React finds difference
5. Only number text is updated

❗ Entire page is NOT reloaded

---
