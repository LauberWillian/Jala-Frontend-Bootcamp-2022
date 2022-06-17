import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

import counterReducer from "./reducer/counterReducer";
import productReducer from "./reducer/shopReducer";

const reducers = {
  counter: counterReducer,
  product: productReducer,
};

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const allReducers = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, allReducers);

export default configureStore({
  reducer: { persistedReducer },
});
