
---

# 1️⃣ First: Props & State

## 🧠 Think in real life terms

### 👨 Parent = App component

### 👶 Child = Message component

---

## 📦 What are **Props**?

**Props = information given to a child**

### Real-life example:

* Father tells child: “Say Hello”
* Child just repeats what father said

Child **cannot change** the message.

### In React:

```tsx
<Message text="This text is passed as props" />
```

* `text` = prop
* Passed from **App → Message**
* Message only **reads**, never changes it

---

## 🔄 What is **State**?

**State = memory of a component**

### Real-life example:

* You have a counter in your head
* Every time you click a button, the number increases
* Screen updates automatically

### In React:

```tsx
const [count, setCount] = useState(0);
```

* `count` = current value
* `setCount` = change value
* React re-draws the screen

---

## 🔁 Key difference (VERY IMPORTANT)

| Props               | State                |
| ------------------- | -------------------- |
| Given by parent     | Owned by component   |
| Read-only           | Can change           |
| Used for display    | Used for interaction |
| Child cannot modify | Component can modify |

---

# 2️⃣ Now let’s understand YOUR CODE (LINE BY LINE)

Here is the code again:

```tsx
import React, { useState } from "react";
```

### What is happening?

* We import React (needed for JSX)
* We import `useState` (needed for state)

---

## CHILD COMPONENT (Message)

```tsx
function Message(props: { text: string }) {
  return <h2>{props.text}</h2>;
}
```

### What is this?

* A **function**
* Receives `props`
* Displays `props.text`

💡 This component **does NOT run by itself**

It runs **ONLY when someone uses it**.

---

## PARENT COMPONENT (App)

```tsx
function App() {
```

This is the **main component**.

React starts from **App**, not Message.

---

### State creation

```tsx
const [count, setCount] = useState(0);
```

React says:

> “Remember a number called `count`. Start from 0.”

---

### JSX returned by App

```tsx
return (
  <div>
```

This is the **UI layout**.

---

### Output heading

```tsx
<h1>Props and State Demo</h1>
```

Shows on screen first.

---

### Using the child component

```tsx
<Message text="This text is passed as props" />
```

👉 IMPORTANT PART 👇

* React sees `<Message />`
* React says:
  “Oh, I need to run the `Message` function now”
* It passes `text` value to it

So **NOW** this runs:

```tsx
function Message(props) {
  return <h2>{props.text}</h2>;
}
```

That is why output appears **here**, not where Message is defined.

---

### Showing state

```tsx
<p>Count: {count}</p>
```

Displays:

```
Count: 0
```

---

### Button click

```tsx
<button onClick={() => setCount(count + 1)}>
```

When clicked:

1. `setCount()` updates value
2. React re-runs **App**
3. UI updates automatically

---

## Export

```tsx
export default App;
```

This tells React:

> “This is the main component to show”

---
