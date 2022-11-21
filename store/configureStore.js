import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import rootReducer from "../reducers";

const isDev = process.env.NODE_ENV === "development";

const createStore = () => {
  // store
  const store = configureStore({
    reducer: rootReducer,
    devTools: isDev,
  });
  return store;
};

// wrapper
const wrapper = createWrapper(createStore);

export default wrapper;
