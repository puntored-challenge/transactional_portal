import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slice/themeSlice";
import authSlice from "./slice/authSlice";
import messageDialogSlice from "./slice/messageDialogSlice";

export const store = configureStore({
  reducer: {
    themeState: themeSlice,
    authState: authSlice,
    messageDialogState: messageDialogSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
