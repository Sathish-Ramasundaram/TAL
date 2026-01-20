
---

### 2️⃣ Server-Side Rendering (SSR) with React

**What it is**
Rendering React components **on the server** instead of the browser.

**Why it’s used**

* Faster first page load 🚀
* Better SEO
* Better performance on slow devices

**Common tools**

* **Next.js** (most popular)
* Express + ReactDOMServer

**Flow**

```
Request → Server renders HTML → Browser hydrates React
```

---

### 3️⃣ Accessibility (a11y)

**What it is**
Making apps usable for **everyone**, including people with disabilities.

**Key concepts**

* Semantic HTML (`button`, `nav`, `main`)
* Keyboard navigation
* Screen readers
* ARIA attributes

**Example**

```jsx
<button aria-label="Close modal">X</button>
```

**Why it matters**

* Legal compliance
* Better UX
* Strong professional skill 💼

---

## 🔁 Redux & Redux-Saga – Design Patterns

---

### 4️⃣ Introduction to Redux-Saga

**What Saga is**
A **middleware** to handle **side effects**:

* API calls
* Delays
* Background tasks
* Complex async flows

**Why not just Redux Thunk?**

| Thunk          | Saga         |
| -------------- | ------------ |
| Simple         | Powerful     |
| Hard to test   | Easy to test |
| Callback-heavy | Clean flow   |

**Mental model**

> “Sagas are like **background workers** watching actions”

---

### 5️⃣ Setting up a Saga

**Steps**

1. Install redux-saga
2. Create a saga (generator function)
3. Run saga middleware
4. Connect saga to store

**Basic example**

```js
function* mySaga() {
  yield takeEvery("FETCH_DATA", fetchData)
}
```

---

### 6️⃣ Effects (`take`, `put`, `call`, `fork`)

**Effects are instructions, not actions**

| Effect | Purpose                |
| ------ | ---------------------- |
| `take` | Wait for an action     |
| `put`  | Dispatch an action     |
| `call` | Call async function    |
| `fork` | Run task in background |

**Example**

```js
yield call(api.fetchUsers)
yield put({ type: "SUCCESS" })
```

---

### 7️⃣ Generator Functions & `yield`

**Why generators?**
They allow **pause and resume** execution.

**Key idea**

```js
function* saga() {
  yield call(api)
  yield put(action)
}
```

**yield means**

> “Pause here, let middleware handle this step”

This makes async logic **look synchronous** 👍

---

### 8️⃣ Error Handling & `takeEvery` / `takeLatest`

**Error handling**

```js
try {
  yield call(api)
} catch (e) {
  yield put({ type: "ERROR" })
}
```

**Action handlers**

| Effect       | Use case                     |
| ------------ | ---------------------------- |
| `takeEvery`  | Handle all actions           |
| `takeLatest` | Cancel previous, keep latest |

**Example**

* Search box → `takeLatest`
* Logging → `takeEvery`

---

### 9️⃣ Testing Sagas

**Why easy to test**

* Sagas return plain objects (effects)

**Tools**

* `redux-saga-test-plan`
* `Jest`

**Test idea**

```js
expect(generator.next().value)
  .toEqual(call(api.fetch))
```

**Big advantage**

* No mocking hell 😌

---

### 🔟 Best Practices

**Structure**

```
sagas/
 ├─ userSaga.js
 ├─ productSaga.js
 └─ rootSaga.js
```

**Guidelines**

* One saga per feature
* Keep sagas small
* Don’t put business logic in reducers
* Use selectors (`select`)

---

### 1️⃣1️⃣ Advanced Saga Effects

| Effect     | Purpose                          |
| ---------- | -------------------------------- |
| `race`     | Compete effects (timeout vs API) |
| `cancel`   | Stop a running saga              |
| `all`      | Run effects in parallel          |
| `select`   | Read state from store            |
| `throttle` | Limit action frequency           |

**Example**

```js
yield race({
  data: call(api),
  timeout: delay(5000)
})
```

---

## 🧭 Suggested Learning Order (Best Path)

1. Accessibility
2. Render Props
3. SSR (Next.js basics)
4. Redux-Saga basics
5. Effects & Generators
6. Error handling
7. Testing
8. Advanced effects

---

If you want, next I can:

* 📘 Convert this into a **30-day learning plan**
* 🧪 Give **real-world examples** for each Saga effect
* ⚛️ Show **CRA + TypeScript + Saga setup** (matching your mentor’s rules)

Just tell me 👍
