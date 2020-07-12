import { combineReducers, createStore } from "redux";

import State from "./State";
import appReducer from "./reducers/AppReducer";

const reducers = combineReducers<State>({
  app: appReducer,
});

const store = createStore(reducers);

export default store;
