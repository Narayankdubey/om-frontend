import premiumSlice from "./premium-slice";
import uiSlice from "./ui-slice";
import userSlice from "./user-slice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    ui: uiSlice.reducer,
    user: userSlice.reducer,
    premium: premiumSlice.reducer,
  },
});
