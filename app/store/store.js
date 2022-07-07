import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { Action } from "react-redux";

import userReducer from "./slices/users";

export const makeStore = () =>
  configureStore({
    reducer: {
      users: userReducer,
    },
    devTools: true,
  });

// export  AppStore = ReturnType<typeof makeStore>;
// export AppState = ReturnType<AppStore["getState"]>;
// export  AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   AppState,
//   unlnown,
//   Action
// >;

export const wrapper = createWrapper(makeStore);
