
---

## Synthetic Event System in React

## Description
This project demonstrates React's Synthetic Event system using button clicks and input changes.

## Concepts Covered
- What Synthetic Events are
- onClick and onChange in React
- Handling events in React
- Updating state based on events
---

## First: What is an “Event”?

In a web page, an **event** is something that happens because of a **user action**.

Examples:

* Clicking a button
* Typing in an input box
* Moving the mouse
* Pressing a key

Example (real life):

* You press a switch → light turns ON
  That press is an **event**.

---

## Events in Normal HTML (Before React)

In plain HTML + JavaScript, events look like this:

```html
<button onclick="sayHello()">Click me</button>
```

Problems with this:

* Works differently in different browsers
* Harder to manage in large apps
* Not consistent

---

## Why React Created “Synthetic Events”

React created **Synthetic Events** to solve these problems.

### ✅ What is a Synthetic Event?

> A **Synthetic Event** is a wrapper around the browser’s native event that works **the same way in all browsers**.

### In simple words:

* React **captures the real browser event**
* React **wraps it**
* React gives you a **clean, consistent event object**

You **don’t deal with browser differences**.

---

## Important Beginner Rule (Very Important)

👉 **In React, you NEVER write `onclick`**
👉 **You always write `onClick` (camelCase)**

This is part of the **Synthetic Event system**.

---

## Basic Synthetic Event Example

### What we will build:

* A button
* When clicked:

  * Count increases
  * Console logs the event
  * Screen updates automatically

---

## Full Code Example

### 📄 `src/App.tsx`

```tsx
import React, { useState } from "react";

function App() {
  // State to store click count
  const [count, setCount] = useState<number>(0);

  // Synthetic Event handler
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Synthetic Event:", event);
    console.log("Button clicked!");

    setCount(count + 1);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Synthetic Event Demo</h1>

      <p>Button clicked {count} times</p>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;
```

---

## What is Happening Line by Line

### State

```ts
const [count, setCount] = useState(0);
```

* Stores number of clicks
* React remembers it

---

### Event Handler

```ts
const handleClick = (event) => { ... }
```

* This `event` is a **Synthetic Event**
* Provided by React
* Same behavior in all browsers

---

### Event Trigger

```tsx
<button onClick={handleClick}>
```

* `onClick` is a **React Synthetic Event**
* React handles the real browser event internally

---

## Common Synthetic Events You’ll Use

| React Event    | Happens When         |
| -------------- | -------------------- |
| `onClick`      | Click                |
| `onChange`     | Input value changes  |
| `onSubmit`     | Form submitted       |
| `onMouseEnter` | Mouse enters element |
| `onKeyDown`    | Key pressed          |

All of these are **Synthetic Events**.

---

## Input Example (onChange Event)

### 📄 Update `App.tsx`

```tsx
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Synthetic Event:", event);
    setName(event.target.value);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Synthetic Event Input Demo</h1>

      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
      />

      <p>Your name: {name}</p>
    </div>
  );
}

export default App;
```

---

## 🔍 Important Observations

* `event.target.value` comes from **Synthetic Event**
* React normalizes it
* Same code works everywhere

---

