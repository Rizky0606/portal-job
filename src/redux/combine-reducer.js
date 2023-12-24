import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import CounterReducer from "./counter/reducer";
import counter from "./counter/reducer";

const persistConfig = {
  key: "root",
  storage,
};
const combineReducer = combineReducers({
  counter,
});

const persistedReducer = persistReducer(persistConfig, combineReducer);

export default persistedReducer;
