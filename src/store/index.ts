import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import usersReducer from "./flights.reducer";

const composeEnhancers =
  // @ts-ignore
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

const store = createStore(
  usersReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
