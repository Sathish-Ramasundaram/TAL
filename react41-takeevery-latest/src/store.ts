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
