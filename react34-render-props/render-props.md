## Render Props

> **“A pattern where a component shares logic by accepting a function as a prop and calling it to render UI.”**

This is the definition of **Render Props**.

We’ll split it into parts 👇

---

## 1️⃣ “A component shares logic”

Imagine you have **logic** like:

* tracking mouse position
* fetching data
* toggling open/close state

That logic should be **reusable** across multiple components.

❌ Without reuse → you duplicate code
✅ With reuse → one place, many usages

---

## 2️⃣ “Accepting a function as a prop”

Normally, props are **data**:

```jsx
<User name="Sathish" />
```

With **render props**, the prop is a **function**:

```jsx
<DataProvider render={() => {}} />
```

So instead of:

* passing **values**
  you pass:
* **a function**

---

## 3️⃣ “Calling it to render UI”

The component that owns the logic:

* **calls that function**
* **passes logic data to it**
* **lets the caller decide UI**

This is the most important part.

---

## Simple Real-World Analogy 🧠

### Think of a coffee machine ☕

* Coffee machine = **logic**
* Cup design = **UI**

You bring **your own cup**
The machine only pours coffee

```text
Machine: "I give coffee"
You: "I decide the cup"
```

---

## Basic Example (Very Simple)

### Step 1: Logic Component

```jsx
function Counter({ render }) {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      {render(count, () => setCount(count + 1))}
    </div>
  );
}
```

👉 This component:

* owns **state (logic)**
* does **NOT decide UI**

---

### Step 2: UI Component uses it

```jsx
function App() {
  return (
    <Counter
      render={(count, increment) => (
        <button onClick={increment}>
          Clicked {count} times
        </button>
      )}
    />
  );
}
```

---

## What happened here?

* `Counter` **shares logic** (`count`, `increment`)
* `App` **controls UI**
* Logic and UI are **decoupled**

---

## Why is this powerful?

Because the **same logic** can render **different UI**.

### Example: Reuse same logic, different UI

```jsx
<Counter
  render={(count, increment) => (
    <h1 onClick={increment}>{count}</h1>
  )}
/>

<Counter
  render={(count, increment) => (
    <p onMouseOver={increment}>Hovered {count}</p>
  )}
/>
```

Same logic ✔
Different UI ✔

---

## Why is it called “Render Props”?

Because:

* the prop (`render`)
* **returns JSX**
* and is used during rendering

---

## Common Variations

### 1️⃣ `children` as a function (very common)

```jsx
function Counter({ children }) {
  const [count, setCount] = React.useState(0);
  return children(count, () => setCount(count + 1));
}
```

Usage:

```jsx
<Counter>
  {(count, inc) => <button onClick={inc}>{count}</button>}
</Counter>
```

---

## Why Render Props are less common today?

Because **Hooks** do the same job more cleanly:

```jsx
const { count, increment } = useCounter();
```

But…

👉 You **must understand Render Props** to:

* read older code
* understand why hooks exist
* crack interviews 💡

---

## One-line Summary (Very Important)

> **Render Props = Logic in one component, UI decided by the caller using a function prop**

---
