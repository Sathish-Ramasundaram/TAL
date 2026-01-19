# Runtime Error Demo (JavaScript)

## 📖 Overview
This simple HTML + JavaScript example demonstrates how **direct property access** on a `null` or `undefined` object causes a **runtime error**, and how to fix it using a **safe conditional check (`&&`)**.

---

## ⚡ Intentional Error
If you uncomment the following code:

```js
document.getElementById("output").textContent = "User name is: " + user.name;
```

Since `user` is `null`, JavaScript will throw:

```
TypeError: Cannot read properties of null (reading 'name')
```

This simulates the same kind of error you might see in React when trying to render `{user.name}` before `user` is loaded.

---

## ✅ Correct Code
The corrected version uses a safe check:

```js
if (user && user.name) {
  document.getElementById("output").textContent = "User name is: " + user.name;
} else {
  document.getElementById("output").textContent = "No user available yet.";
}
```

- If `user` exists and has a `name`, it displays the name.
- If `user` is `null` or missing, it safely shows `"No user available yet."`.

---

## 🛠️ How to Run
1. Save the file as `runtime-error-demo.html`.
2. Open it in any modern browser.
3. Observe:
   - With `user = null`, the safe check prevents errors and shows `"No user available yet."`.
   - Uncomment the direct access line to see the intentional runtime error.
   - Uncomment the `user = { name: "Sathish", age: 25 }` block to see the correct output `"User name is: Sathish"`.

---

## 🎯 Key Takeaway
- **Unsafe:** `user.name` → crashes if `user` is `null` or `undefined`.
- **Safe:** `user && user.name` → checks existence first, avoids runtime error.
- In modern JavaScript/React, you can also use **optional chaining**:
  ```js
  document.getElementById("output").textContent = "User name is: " + (user?.name || "No user available yet");
  ```

---
