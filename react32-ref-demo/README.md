
# React Ref Demo — No Re-render

## 📖 Overview
This project demonstrates how to use the **`useRef` hook** in React to store and update values **without triggering a re-render**. Unlike `useState`, updating a ref does not cause the component to re-render, making it useful for persisting values across renders without affecting the UI lifecycle.

---

## 🖥️ Output
When you run the app:
- The page shows a number (`0` initially).
- Clicking the **+ button** increments the internal `countRef.current` value.
- The displayed number **does not change**, because updating a ref does not trigger a re-render.
- In the console, you’ll see `"App Rendered"` only once (on initial render).

---

## 📂 Project Structure
```
src/
 ├── App.tsx (or App.js)
 └── index.tsx (or index.js)
```

---

## ⚙️ Code Explanation
```tsx
function App() {
  const countRef = useRef(0); // Ref initialized with 0

  console.log("App Rendered"); // Logs only once

  return (
    <>
      <h1>{countRef.current}</h1>
      <button onClick={() => countRef.current++}>+</button>
    </>
  );
}
```

- `useRef(0)` → creates a ref object with `.current = 0`.  
- `countRef.current++` → updates the value inside the ref.  
- **No re-render happens** because refs don’t trigger re-renders when updated.  
- The UI stays the same, even though the internal value changes.

---

## 🎯 Project Objective
- To **illustrate the difference between `useState` and `useRef`** in React.  
- Show that **`useState` causes re-renders** when updated, while **`useRef` does not**.  
- Help beginners understand when to use refs:
  - Storing values across renders without re-rendering.
  - Accessing DOM elements directly.
  - Keeping mutable variables (like timers, counters, or cached values).

---
