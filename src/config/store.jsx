import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSTION__ && window.__REDUX_DEVTOOLS_EXTENSTION__()
);

export default store;
