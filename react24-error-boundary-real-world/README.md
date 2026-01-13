Error Boundaries.

with:

* ✅ Header (always works)
* ❌ Dashboard (crashes)
* ✅ Footer (always works)
* 🧯 Error Boundary **only around Dashboard**

So you can **see with your own eyes** what stays and what breaks.

---

# 🎯 What You Will See (Before Code)

When you run the app, the screen will show:

```
🔷 HEADER (Always Visible)

⚠️ Dashboard failed to load

🔷 FOOTER (Always Visible)
```

👉 Header & Footer work
👉 Dashboard is replaced
👉 App does NOT crash

This is **exactly how real apps behave**.

---

---

# 👀 What You Visually Observe

### ✅ Header renders

### ❌ Dashboard crashes → replaced by error message

### ✅ Footer still renders

This proves:

> **Only the broken part is removed.
> The rest of the app survives.**

---

# 🧠 Mental Model (Very Important)

Think of Error Boundary like this:

```
[ Header ]  ← safe
[  🧯  ]    ← error boundary
[ Footer ]  ← safe
```

Explosion inside 🧯 does **not** spread.

---

# 🔑 One-Line Summary

> **Error Boundaries isolate failures so one broken component doesn’t kill the whole app.**

---

---

## 🧯 Error Boundary Is Like Insurance

You don’t buy insurance **after** an accident.

You buy it because:

* Accidents *can* happen
* You want protection

Same with Error Boundaries.

---

## 📌 Important Rule (Very Important)

Error Boundaries work at the **component-tree level**, not per line.

They protect:

```
<ErrorBoundary>
  A
  B
  C
</ErrorBoundary>
```

If **A, B, or C** crashes → fallback UI shows.

---

## 🧠 Another Visual Example

```tsx
<ErrorBoundary>
  <ProductList />
  <ProductChart />
  <ProductReviews />
</ErrorBoundary>
```

You don’t know:

* Which API fails
* Which chart library crashes

But:
👉 One error = whole block replaced
👉 Rest of app survives

---

## ⚠️ One Important Limitation (Know This)

Error Boundaries:

* ❌ Do NOT catch click-handler errors
* ❌ Do NOT catch async errors automatically

They catch **render-time crashes only**.

(This is why we still use `try/catch` + `console.log`.)

---

## ✅ Final Clear Answer

Question:

> “We need to know which one is problem component, then only we can use Error Boundary?”

### Correct answer:

👉 **No**

### Real usage:

👉 Wrap **risky UI sections**
👉 Let Error Boundary protect you **when something unexpected happens**

---

