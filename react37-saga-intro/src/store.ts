import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga";

/* ---------- Reducer ---------- */

const initialState = {
  message: "Waiting...",
};

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case "SET_MESSAGE":
      return { ...state, message: action.payload };
    default:
      return state;
  }
}

/* ---------- Store ---------- */

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
