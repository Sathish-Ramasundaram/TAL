---

# 🎯 Project Goal

Demonstrate **when and why** to use:

* `takeEvery` → **handle all actions**
* `takeLatest` → **cancel previous, keep latest**

in the **same app**.

---

# 🧠 Scenario (very realistic)

### Feature 1: Logging clicks → `takeEvery`

* Every button click should be logged
* Nothing should be cancelled

### Feature 2: Search API → `takeLatest`

* User types fast
* Old requests should be cancelled
* Only latest result should update UI

---

# 📁 Project Structure

```
src/
├── api.ts
├── saga.ts
├── store.ts
├── App.tsx
└── index.tsx
```

---

# STEP 1️⃣ API layer

### `src/api.ts`

```ts
export async function searchTodos(query: string) {
  const response = await fetch(
    `https://dummyjson.com/todos/search?q=${query}`
  );

  if (!response.ok) {
    throw new Error("Search failed");
  }

  return response.json();
}
```

---

# STEP 2️⃣ Saga (CORE OF THE PROJECT)

### `src/saga.ts`

```ts
import {
  takeEvery,
  takeLatest,
  call,
  put,
  delay,
  all,
} from "redux-saga/effects";
import { searchTodos } from "./api";

/* ---------- takeEvery example (LOGGING) ---------- */
function* logClickSaga(action: any) {
  console.log("Button clicked:", action.payload);

  yield put({
    type: "SET_LOG",
    payload: `Clicked at ${new Date().toLocaleTimeString()}`,
  });
}

function* watchClicks() {
  yield takeEvery("BUTTON_CLICKED", logClickSaga);
}

/* ---------- takeLatest example (SEARCH) ---------- */
function* searchSaga(action: any) {
  try {
    // artificial delay to make cancellation visible
    yield delay(500);

    const data: { todos: { todo: string }[] } = yield call(
      searchTodos,
      action.payload
    );

    yield put({
      type: "SET_RESULT",
      payload: data.todos.map(t => t.todo).join(", "),
    });
  } catch (error) {
    yield put({
      type: "SET_RESULT",
      payload: "Search error",
    });
  }
}

function* watchSearch() {
  yield takeLatest("SEARCH", searchSaga);
}

/* ---------- Root saga ---------- */
export function* rootSaga() {
  yield all([
    watchClicks(),
    watchSearch(),
  ]);
}
```

---

# STEP 3️⃣ Redux Store

### `src/store.ts`

```ts
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga";

const initialState = {
  log: "",
  result: "",
};

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case "SET_LOG":
      return { ...state, log: action.payload };
    case "SET_RESULT":
      return { ...state, result: action.payload };
    default:
      return state;
  }
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
```

---

# STEP 4️⃣ React UI

### `src/App.tsx`

```tsx
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const log = useSelector((state: any) => state.log);
  const result = useSelector((state: any) => state.result);

  return (
    <div style={{ padding: 20 }}>
      <h2>takeEvery vs takeLatest</h2>

      {/* takeEvery */}
      <button
        onClick={() =>
          dispatch({
            type: "BUTTON_CLICKED",
            payload: "User clicked",
          })
        }
      >
        Click Me (takeEvery)
      </button>

      <p>Log: {log}</p>

      <hr />

      {/* takeLatest */}
      <input
        placeholder="Search todos..."
        onChange={(e) =>
          dispatch({
            type: "SEARCH",
            payload: e.target.value,
          })
        }
      />

      <p>Result: {result}</p>
    </div>
  );
}
```

---

# STEP 5️⃣ Entry Point

### `src/index.tsx`

```ts
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

---

# 🔄 What happens at runtime (IMPORTANT)

## 🟢 `takeEvery` behavior

* Click button 5 times
* Saga runs **5 times**
* Nothing is cancelled
* Every click is logged

✅ **All actions are handled**

---

## 🔵 `takeLatest` behavior

* Type fast: `a → ab → abc`
* Previous searches are **cancelled**
* Only the **latest query** updates UI

✅ **Old requests are ignored**

---

# 🧠 Final Mapping to Your Topic

| Topic          | Status             |
| -------------- | ------------------ |
| Error handling | ✅ Used             |
| `takeEvery`    | ✅ Implemented      |
| `takeLatest`   | ✅ Implemented      |
| Real use cases | ✅ Logging & Search |

---

# Interview-ready explanation ✅

> `takeEvery` is used when all actions must be processed, such as logging.
> `takeLatest` is used when only the latest action matters, such as search, where previous requests should be cancelled.

---

## 🎯 Final confirmation

With **this project**, you have now **fully completed topic 8️⃣**:

✔ Error handling
✔ takeEvery
✔ takeLatest
✔ Correct use cases
