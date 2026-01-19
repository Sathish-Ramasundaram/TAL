
# React Simple State Example (To Demonstrate Re-renders)

## 📖 Overview
This project demonstrates a **basic React state example** using the `useState` hook.  
It shows how React re‑renders a component whenever state changes, and logs each render in the console.

---

## 🖥️ Output
When you run the app, you’ll see:

```
App rendered
```
(in the browser console each time the component re‑renders)

On the page:
```
1
[ + button ]
```

- The number (`count`) starts at **1**.  
- Clicking the **+ button** increases the count by 1.  
- Each click triggers a re‑render, which you can observe in the console.

---

## 📂 Project Structure
```
src/
 ├── App.tsx 
 ├── App.css
 └── index.tsx 
```

---

## ⚙️ Code Explanation
```jsx
function App() {
  // Declare state variable 'count' with initial value 1
  const [count, setCount] = React.useState(1);

  // Log each render
  console.log('App rendered');

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
```

- `useState(1)` → initializes `count` with value `1`.  
- `setCount(count + 1)` → updates the state when the button is clicked.  
- `console.log('App rendered')` → shows how React re‑renders the component whenever state changes.

---

---

## 🎯 Key Takeaway
This project is a **minimal example** to understand how React’s `useState` works and how **render cycles** happen.  
Every time state changes, React re‑renders the component, which you can observe in the console.

---
