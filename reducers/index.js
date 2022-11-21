import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import guestBookSlice from "./guestBook";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        guestBook: guestBookSlice.reducer,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
