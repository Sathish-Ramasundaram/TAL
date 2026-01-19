---

👉 **Project name:** `normal-dom-demo`

---

## 📌 What this project is about

This project demonstrates how the **Normal DOM (Real DOM)** works using:

* Plain **HTML**
* Plain **JavaScript**
* ❌ No React
* ❌ No TypeScript
* ❌ No build tools

You will clearly see **how the browser directly updates the page** whenever JavaScript changes something.

---

## 🧠 What is DOM (Simple Explanation)

* DOM = **Document Object Model**
* It is the **real structure of the web page**
* JavaScript talks **directly** to this structure

Whenever JavaScript updates the DOM:

* The browser **immediately updates the screen**
* This can be **slow** if updates happen many times

---

## 📁 Folder Structure

```
normal-dom-demo
│
├── index.html
└── script.js
```

---

## 📄 index.html

* Creates the page structure
* Has text, button, and a log box
* Loads JavaScript using `<script>`

---

## 📄 script.js

* Stores a counter value
* Finds real DOM elements using `document.getElementById`
* Updates the DOM **directly** on every button click

Each click:

* Changes the number on screen
* Changes the text in the log box
* Forces the browser to update immediately

---

## ▶️ How to Run This Project

1. Open the folder `normal-dom-demo`
2. Double-click `index.html`
3. The page opens in your browser
4. Click the **Increase Count** button
5. Open **DevTools → Console** to see logs

✅ That’s it — no installation needed

---

## 🎯 What You Learn from This

* How JavaScript directly updates the real DOM
* Why frequent DOM updates can be slow
* How traditional websites worked before React

---

## ⚠️ Limitation of Normal DOM

* Every update touches the real page
* Many updates = performance issues
* Hard to manage in large applications

👉 This problem is what **React’s Virtual DOM solves**

---
