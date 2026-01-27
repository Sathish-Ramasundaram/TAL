## What this project demonstrates (in one line)

> This project demonstrates how **Redux-Saga** manages **API calls, delays, background polling, and cancellation** in a React + Rspack + TypeScript application.

---

## Why Redux-Saga is used here

Redux reducers:

* must be **pure**
* must be **synchronous**
* **cannot** call APIs
* **cannot** wait or poll

Redux-Saga solves this by acting as a **background worker** that:

* listens for Redux actions
* performs async work
* dispatches results back to Redux

---

## Big-picture architecture

```
User Action (button click)
        ↓
Redux Action dispatched
        ↓
Saga listens in background
        ↓
Saga performs async logic
(API / delay / polling)
        ↓
Saga dispatches result
        ↓
Reducer updates state
        ↓
React re-renders UI
```

---

## What async problems are demonstrated

| Feature             | How it is demonstrated               |
| ------------------- | ------------------------------------ |
| API calls           | Fetch todos from `dummyjson.com`     |
| Delays              | Artificial delay before first load   |
| Background tasks    | Poll API every 5 seconds             |
| Complex async flows | Start → Fetch → Poll → Stop → Cancel |

---

## Core idea to remember

> **React never calls the API.
> Reducers never call the API.
> Sagas own all async logic.**

---

# 📁 Project Structure

```
project-root/
├── public/
│   └── index.html
├── src/
│   ├── index.tsx        # React entry point
│   ├── App.tsx          # UI buttons + display
│   ├── store.ts         # Redux store + saga middleware
│   ├── saga.ts          # All async logic (this example)
│   └── api.ts           # API abstraction
├── rspack.config.js
├── package.json
└── README.md
```

---

# 🧠 How the Saga Works (Step-by-Step)

## 1️⃣ Start action

User clicks **Start Dashboard**:

```ts
dispatch({ type: "START_DASHBOARD" });
```

React does **nothing else**.

---

## 2️⃣ Saga hears the action

```ts
yield take("START_DASHBOARD");
```

Saga wakes up and begins a controlled async flow.

---

## 3️⃣ Delay (optional but educational)

```ts
yield delay(1000);
```

Demonstrates:

* Saga can pause
* UI does NOT freeze
* Control flow is explicit

---

## 4️⃣ API call

```ts
yield call(fetchTodos);
```

Saga:

* waits for API response
* does not block UI
* handles async cleanly

---

## 5️⃣ Update Redux state

```ts
yield put({
  type: "SET_MESSAGE",
  payload: "Loaded: ..."
});
```

Reducer updates state → UI updates automatically.

---

## 6️⃣ Background polling starts

```ts
const pollingTask = yield fork(pollTodos);
```

* `fork` starts a **background task**
* UI remains responsive
* Polling runs independently

---

## 7️⃣ Polling loop

```ts
while (true) {
  fetch → update UI → wait 5 seconds
}
```

This is a **true background process**.

---

## 8️⃣ Stop action

```ts
yield take("STOP_DASHBOARD");
```

Saga waits until user stops the flow.

---

## 9️⃣ Cancel background task

```ts
yield cancel(pollingTask);
```

Polling stops immediately.

This is **real cancellation**, not a hack.

---

# 📘 FULL README.md (Copy-Paste Ready)

```md
# React + Rspack + TypeScript + Redux-Saga (Advanced Example)

This project demonstrates how **Redux-Saga** handles:

- API calls
- Delays
- Background polling
- Cancellation
- Complex async workflows

using **React**, **Rspack**, and **TypeScript**.

---

## 🚀 What this project demonstrates

✔ API calls using Redux-Saga  
✔ Artificial delays using `delay`  
✔ Background polling using `fork`  
✔ Cancellation using `cancel`  
✔ Clean separation of concerns  

> React never performs async work.  
> Reducers remain pure and synchronous.

---

## 🧠 Mental Model

```

UI → dispatch action
Saga → listens in background
Saga → async work (API / delay / polling)
Saga → dispatch result
Reducer → update state
UI → re-render

```

---

## 📁 Project Structure

```

src/
├── App.tsx        # UI
├── index.tsx      # React entry
├── store.ts       # Redux store + middleware
├── saga.ts        # All async logic
└── api.ts         # API abstraction

````

---

## 🛠️ Setup

```bash
npm install
npm start
````

App runs at:

```
http://localhost:3000
```

---

## ▶️ How the App Works

### Buttons

* **Start Dashboard**

  * Fetches data
  * Starts background polling every 5 seconds

* **Stop Dashboard**

  * Cancels polling
  * Stops background work

---

## 🔄 Saga Flow

1. Wait for `START_DASHBOARD`
2. Delay for 1 second
3. Fetch todos from API
4. Update Redux state
5. Start polling in background
6. Wait for `STOP_DASHBOARD`
7. Cancel polling task

---

## 🌐 API Used

```
https://dummyjson.com/todos
```

Response:

```json
{
  "todos": [
    { "id": 1, "todo": "...", "completed": false }
  ]
}
```

Saga extracts:

```ts
data.todos[0].todo
```

---

## 🧪 Why timestamps are used

Polling data may not change.
A timestamp proves the background task is running:

```
Polling (10:45:01): ...
Polling (10:45:06): ...
```

---

## 🎯 Learning Outcomes

After this project, you can:

* Explain why Redux-Saga exists
* Write sagas using `call`, `put`, `delay`
* Create background tasks with `fork`
* Cancel tasks safely
* Handle complex async flows cleanly

---

## 🧠 Key Takeaway

> Redux-Saga is not just for API calls.
> It is a **workflow orchestration tool** for async logic.

---

## 📌 Next Steps

* Add loading state
* Add error handling
* Use `takeLatest`
* Test sagas
* Compare with Redux Thunk

---

Happy learning 🚀

```

---

## ✅ Final Summary

You now have an example that demonstrates **all** of this:

✔ API calls  
✔ Delays  
✔ Background tasks  
✔ Complex async flows  
✔ Cancellation  

