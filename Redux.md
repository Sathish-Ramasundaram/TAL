

# 🧩 Redux-Saga Learning Path — One Simple Project per Topic

---

## 1️⃣ Introduction to Sagas

### **Project: Button Click Logger**

**Goal**
Understand *why* sagas exist and how they differ from normal reducers.

**What you build**

* One button: **“Click Me”**
* On click → dispatch an action
* Saga listens to that action and logs a message after 2 seconds

**Why this helps**

* Shows that **reducers are synchronous**
* Shows that **sagas handle side effects (delay, async work)**

**Core learning**

* Saga runs **outside** React components
* Logic is **not event-driven inside components**, but centralized

---

## 2️⃣ Setting up a Saga

### **Project: User Fetch on Page Load**

**Goal**
Learn how to **connect saga to Redux store**.

**What you build**

* On app load → dispatch `FETCH_USER`
* Saga listens and fetches dummy user data (fake API or timeout)
* Store data in Redux and show username

**Files you touch**

* `store.ts`
* `rootSaga.ts`
* `userSaga.ts`

**Core learning**

* `createSagaMiddleware`
* `sagaMiddleware.run(rootSaga)`
* Connecting saga → store

---

## 3️⃣ Effects (`take`, `put`, `call`, `fork`)

### **Project: Login Flow Simulator**

**Goal**
Understand **what effects do**, not memorize them.

**What you build**

* Login form (username only)
* On submit → saga:

  1. `take` LOGIN action
  2. `call` fake login API
  3. `put` LOGIN_SUCCESS
  4. `fork` background logger saga

**Core learning**

| Effect | Meaning                |
| ------ | ---------------------- |
| `take` | Wait for action        |
| `call` | Call async function    |
| `put`  | Dispatch action        |
| `fork` | Run saga in background |

---

## 4️⃣ Generator Functions

### **Project: Step-by-Step Counter**

**Goal**
Understand **how `yield` pauses execution**.

**What you build**

* Button: “Next Step”
* Saga runs steps like:

  1. Log “Step 1”
  2. Wait for NEXT
  3. Log “Step 2”
  4. Wait again

**Core learning**

* Saga ≠ async/await
* Generator **pauses and resumes**
* `yield` controls flow

---

## 5️⃣ Error Handling + `takeEvery` / `takeLatest`

### **Project: Search Box**

**Goal**
Learn **real-world saga patterns**.

**What you build**

* Input field (search users)
* Typing triggers API calls

**Behavior**

* `takeLatest` → cancel old requests while typing
* API randomly fails → handled via `try/catch`
* Show error message on UI

**Core learning**

* Why `takeLatest` is used for search
* How saga errors don’t crash the app

---

## 6️⃣ Testing Sagas

### **Project: Test the Login Saga**

**Goal**
Learn how to **test logic without UI**.

**What you test**

* Given `LOGIN_REQUEST`
* Saga should:

  * call API
  * dispatch success or failure

**Tools**

* Jest
* `redux-saga-test-plan`

**Core learning**

* Testing **generator output**
* Verifying effects (`call`, `put`)

---

## 7️⃣ Best Practices

### **Project: Todo App with Clean Saga Structure**

**Goal**
Learn **how professionals organize sagas**.

**What you build**

* Simple Todo CRUD
* Async save (fake API)

**Structure**

```
sagas/
 ├── index.ts (rootSaga)
 ├── todoSaga.ts
 ├── userSaga.ts
```

**Core learning**

* One saga per feature
* Watcher vs worker sagas
* Clean, scalable structure

---

## 8️⃣ Advanced Topics

### **Project: Auto-Save Form**

**Goal**
Learn **powerful saga patterns**.

**What you build**

* Profile form (name, email)
* Auto-save while typing

**Saga features used**

| Effect     | Usage                |
| ---------- | -------------------- |
| `select`   | Read form data       |
| `throttle` | Save every 3 seconds |
| `race`     | Save OR cancel       |
| `cancel`   | Stop on logout       |
| `all`      | Run multiple sagas   |

**Core learning**

* Control async behavior like a pro
* Handle complex flows cleanly

---

# 🔥 How I Recommend You Do This

1. **Reuse same project**
2. Add **one feature per topic**
3. Commit after each topic
4. By the end → you have **one solid Saga app**

If you want, next I can:

* 👉 Start with **Project 1** and give **exact files + code**
* 👉 Or design **folder structure** for all 8 upfront
* 👉 Or convert this into a **mentor-style checklist**

Just tell me how you want to proceed 👌
