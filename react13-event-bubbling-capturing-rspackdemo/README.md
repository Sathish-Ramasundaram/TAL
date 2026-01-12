
---

# Event Bubbling & Capturing 

## 🔰 First, forget React for a moment

Imagine **three boxes inside each other**:

```
Grandparent
 └── Parent
      └── Child (Button)
```

When you **click the button**, the event can travel in **two directions**.

---

## 🔁 Event Bubbling (Default Behavior)

👉 **Inside → Outside**

1. Button handles the click
2. Parent handles the click
3. Grandparent handles the click

🧠 Real-life example:

> You shout in a room → sound goes out to hallway → then outside

📌 **React uses event bubbling by default**

---

## ⬇️ Event Capturing (Trickling Phase)

👉 **Outside → Inside**

1. Grandparent handles the click
2. Parent handles the click
3. Button handles the click

🧠 Real-life example:

> Security checks at building → floor → room

📌 In React, capturing uses `onClickCapture`

---

## 🧠 Key Words to Remember (Viva Ready)

| Term            | Meaning                         |
| --------------- | ------------------------------- |
| Bubbling        | Event moves from child → parent |
| Capturing       | Event moves from parent → child |
| Synthetic Event | React’s wrapped browser event   |
| stopPropagation | Stops event movement            |

---

# 🧱 React + TypeScript + Rspack Project Setup

We will:

* Click a button
* See **bubbling**
* See **capturing**
* See **stopPropagation**

---

## 📁 Folder Structure

```
react-rspack-bubbling-demo/
├── package.json
├── rspack.config.js
├── tsconfig.json
├── public/
│   └── index.html
└── src/
    ├── index.tsx
    └── App.tsx
```

---

## 1️⃣ Create Project

```bash
mkdir react-rspack-bubbling-demo
cd react-rspack-bubbling-demo
code .
```

---

## 2️⃣ Install Dependencies

```bash
npm init -y
```

```bash
npm install react react-dom
npm install -D typescript @types/react @types/react-dom
npm install -D @rspack/core @rspack/cli @rspack/dev-server
```

---

## 3️⃣ `package.json`

```json
{
  "name": "react-rspack-bubbling-demo",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "rspack serve",
    "build": "rspack build"
  }
}
```
## 🔍 What You Will See (IMPORTANT)

### When you click the button:

### 1️⃣ Capturing phase (TOP → DOWN)

```
Grandparent CAPTURE
Parent CAPTURE
Button CAPTURE
```

### 2️⃣ Bubbling phase (BOTTOM → UP)

```
Child button clicked
```

🚫 Parent & Grandparent bubbling stopped because:

```ts
event.stopPropagation()
```

---

## 🧠 How to Explain in Viva (Use This)

> “In React, events are handled using a Synthetic Event system.
> By default, events bubble from child to parent.
> If we want to handle events in the capturing phase, we use `onClickCapture`.
> To stop event propagation, we use `event.stopPropagation()`.”

---
