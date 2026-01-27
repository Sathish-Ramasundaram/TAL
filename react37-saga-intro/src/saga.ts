import { takeEvery, put, delay } from "redux-saga/effects";

/* Worker Saga */
function* handleClickSaga() {
  // pause for 2 seconds
  yield delay(2000);

  // dispatch action
  yield put({
    type: "SET_MESSAGE",
    payload: "Hello from Saga 👋",
  });
}

/* Watcher Saga */
export function* rootSaga() {
  yield takeEvery("BUTTON_CLICKED", handleClickSaga);
}
