import {
  take,
  call,
  put,
  delay,
  fork,
  cancel,
} from "redux-saga/effects";

/* ---------- API call ---------- */
async function fetchTodos() {
  const response = await fetch("https://dummyjson.com/todos");

  if (!response.ok) {
    throw new Error("API failed");
  }

  return response.json();
}

/* ---------- Background polling task ---------- */
function* pollTodos() {
  while (true) {
    const data: {
      todos: { id: number; todo: string }[];
    } = yield call(fetchTodos);

    // Pick the first todo from the list
    const firstTodo = data.todos[0].todo;

    yield put({
      type: "SET_MESSAGE",
      payload: `Polling (${new Date().toLocaleTimeString()}): ${firstTodo}`,
    });

    // wait 5 seconds before next poll
    yield delay(5000);
  }
}

/* ---------- Main flow ---------- */
function* dashboardFlow() {
  while (true) {
    // wait for start action
    yield take("START_DASHBOARD");

    // small delay before first fetch (optional, for learning)
    yield delay(1000);

    const data: {
      todos: { id: number; todo: string }[];
    } = yield call(fetchTodos);

    yield put({
      type: "SET_MESSAGE",
      payload: `Loaded: ${data.todos[0].todo}`,
    });

    // start background polling
    const pollingTask = yield fork(pollTodos);

    // wait for stop action
    yield take("STOP_DASHBOARD");

    // cancel background polling
    yield cancel(pollingTask);

    yield put({
      type: "SET_MESSAGE",
      payload: "Dashboard stopped",
    });
  }
}

/* ---------- Root saga ---------- */
export function* rootSaga() {
  yield fork(dashboardFlow);
}
