import { Reducer, Store, combineReducers, createStore } from "redux";
import { placeListReducer } from "./states";
const rootReducer: Reducer = combineReducers({
  placeListReducer: placeListReducer,
});

const store: Store = createStore(rootReducer);

export default store;
