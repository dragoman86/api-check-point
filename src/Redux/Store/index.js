import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "../Reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  // comined reducers
  rootReducer,
  // middleware
  composeEnhancers(applyMiddleware(thunk))
  // extension for redux devtools in chrome
);