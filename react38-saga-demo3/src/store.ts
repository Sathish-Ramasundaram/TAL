import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga";

const initialState = {
  message: "Click the button",
};

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case "SET_MESSAGE":
      return { ...state, message: action.payload };
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
