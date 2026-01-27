import { takeEvery, put, call } from "redux-saga/effects";
import { fetchTodo } from "./api";

/* Worker Saga */
function* handleButtonClick() {
  try {
    const data: { title: string } = yield call(fetchTodo);

    yield put({
      type: "SET_MESSAGE",
      payload: data.title,
    });
  } catch (error) {
    yield put({
      type: "SET_MESSAGE",
      payload: "Error fetching data",
    });
  }
}

/* Watcher Saga */
export function* rootSaga() {
  yield takeEvery("BUTTON_CLICKED", handleButtonClick);
}
