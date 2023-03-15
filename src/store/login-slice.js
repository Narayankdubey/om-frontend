import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails(state, action) {
      state.isAuth = true;
      state.user = action.payload.user;
      // window.location.replace("/home");
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
