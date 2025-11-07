import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slice/themeSlice";
import authSlice from "./slice/authSlice";
export const store = configureStore({
  reducer: {
    themeState: themeSlice,
    authState: authSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
