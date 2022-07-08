import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import userReducer from "./slices/users";

export const makeStore = () =>
  configureStore({
    reducer: {
      users: userReducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
