
# 📌 What this example is (one-line)

> This example shows **how Redux-Saga fetches data from an API** in response to a user action and updates the UI, while keeping React and reducers clean.

That’s it. Nothing more, nothing less.

---

# 🧠 Big Picture Architecture

Before code, understand this flow:

```
User clicks button
   ↓
React dispatches an action
   ↓
Redux-Saga listens in background
   ↓
Saga calls API
   ↓
Saga dispatches result
   ↓
Reducer updates state
   ↓
React re-renders UI
```

👉 **React never calls the API**
👉 **Reducer never calls the API**
👉 **Saga owns async work**

---

# STEP 1️⃣ Project Setup (what you already did)

You created a **minimal React app** using:

* React
* Rspack (instead of CRA/Webpack)
* TypeScript

This gives us:

* JSX rendering
* Fast dev server
* Build output (`dist/`)

At this stage, React only renders UI.

---

# STEP 2️⃣ Why Redux is added

React alone:

* Manages local UI state
* Does not manage complex async flows well

Redux is added to:

* Hold **global state**
* Centralize updates
* Make data predictable

In this example, Redux stores:

```ts
{
  message: string
}
```

---

# STEP 3️⃣ Why Redux-Saga is added

Redux reducers:

* Must be **pure**
* Must be **synchronous**
* Cannot call APIs

So we add **Redux-Saga** as middleware.

> Redux-Saga is a **background process** that reacts to Redux actions.

---

# STEP 4️⃣ Redux Store (`store.ts`)

### Purpose

* Create Redux store
* Attach Saga middleware
* Start Saga

### Key ideas

```ts
const sagaMiddleware = createSagaMiddleware();
```

👉 Creates the Saga engine

```ts
applyMiddleware(sagaMiddleware)
```

👉 Connects Saga to Redux

```ts
sagaMiddleware.run(rootSaga);
```

👉 Starts listening for actions

📌 **Important**
Saga starts running as soon as the app loads.

---

# STEP 5️⃣ Reducer (pure & boring by design)

```ts
function reducer(state, action) {
  switch (action.type) {
    case "SET_MESSAGE":
      return { message: action.payload };
    default:
      return state;
  }
}
```

### What reducer does NOT do

❌ No API calls
❌ No delays
❌ No async logic

👉 Reducer only **transforms state**.

This is correct Redux design.

---

# STEP 6️⃣ API layer (`api.ts`)

```ts
export async function fetchTodo() {
  const response = await fetch("...");
  return response.json();
}
```

### Why API is separate

* Keeps Saga clean
* Reusable
* Testable
* Replaceable (mock later)

📌 Saga **calls** this function, but does not define it.

---

# STEP 7️⃣ Saga (`saga.ts`) — the heart of the example

This is where learning really happens.

---

## 7.1 Watcher Saga

```ts
yield takeEvery("BUTTON_CLICKED", handleButtonClick);
```

Meaning:

> “Every time BUTTON_CLICKED happens, run the worker saga.”

This is the **background listener**.

---

## 7.2 Worker Saga

```ts
function* handleButtonClick() {
  const data = yield call(fetchTodo);
  yield put({ type: "SET_MESSAGE", payload: data.title });
}
```

Read this like English:

1. Pause until API finishes
2. Get response
3. Dispatch new action with result

### Why `call`

* Saga can pause
* Saga can cancel later
* Saga can be tested

### Why `put`

* Dispatches Redux action
* Reducer updates state
* UI updates automatically

📌 **Saga never touches UI directly**

---

# STEP 8️⃣ React-Redux binding (`index.tsx`)

```ts
<Provider store={store}>
  <App />
</Provider>
```

### Why this exists

* Connects Redux to React
* Allows components to:

  * read state
  * dispatch actions

Without this, React cannot see Redux.

---

# STEP 9️⃣ App component (`App.tsx`)

```ts
dispatch({ type: "BUTTON_CLICKED" });
```

### What App does

✔️ Dispatches action
✔️ Reads state
❌ No API call
❌ No async logic

This is **ideal React design**.

---

# STEP 🔟 What happens when you click the button

Let’s walk it slowly.

### 1️⃣ User clicks button

```ts
dispatch({ type: "BUTTON_CLICKED" });
```

---

### 2️⃣ Saga hears it

```ts
takeEvery("BUTTON_CLICKED", handleButtonClick);
```

Saga wakes up.

---

### 3️⃣ Saga calls API

```ts
yield call(fetchTodo);
```

Saga pauses until API responds.

---

### 4️⃣ Saga dispatches result

```ts
yield put({ type: "SET_MESSAGE" });
```

---

### 5️⃣ Reducer updates state

```ts
message = "delectus aut autem"
```

---

### 6️⃣ React re-renders

UI shows API data.

✅ End-to-end async flow complete.

---

# Why the text appears immediately (important)

You observed:

> “It doesn’t wait 2 seconds.”

That’s correct.

Because:

* API is fast
* No artificial delay
* Saga only waits as long as async work takes

Saga **does not add delay by default**.

---

# What this example demonstrates (precisely)

✔️ Saga listens to actions
✔️ Saga handles API calls
✔️ Async logic is centralized
✔️ Reducers remain pure
✔️ React stays simple

This is **core Redux-Saga usage**.

---

# What this example intentionally avoids

❌ Loading spinners
❌ Error UI
❌ Cancellation
❌ Advanced effects

Those come **after** understanding this flow.

---

# 🧠 Final mental model (memorize this)

> Redux-Saga is a background worker that reacts to Redux actions, performs async work, and dispatches results back to the store.

