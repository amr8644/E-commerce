import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const UserSlice = createSlice({
  name: "users",
  initialState: {
    username: null,
    email: null,
    password: null,
  },
  reducers: {
    register: (state, action) => {
      state.username = action.payload;
      state.email = action.payload;
      state.password = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.username = action.payload.user.username;
      state.email = action.payload.user.email;
      state.password = action.payload.user.password;
    },
  },
});

export const { register } = UserSlice.actions;

export default UserSlice.reducer;
