// code of the project


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
