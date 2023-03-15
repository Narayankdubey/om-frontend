import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  premiumData: [],
  message: "",
  newPremiumData: {},
  premiumById: {},
};
const premiumSlice = createSlice({
  name: "premium",
  initialState,
  reducers: {
    setPremiumDetails(state, action) {
      state.premiumData = action.payload.data;
      state.message = action.payload.message;
    },
    addPremiumDetails(state, action) {
      state.newPremiumData = action.payload.data;
      state.message = action.payload.message;
    },
    deletePremium(state, action) {
      state.message = action.payload.message;
    },
    getPremiumById(state, action) {
      state.message = action.payload.message;
      state.premiumById = action.payload.data;
    },
  },
});

export const premiumActions = premiumSlice.actions;

export default premiumSlice;
