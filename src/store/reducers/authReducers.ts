import { PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../interfaces";

export const logout = (state: AuthState) => {
  state.token = null;
  state.isAuthenticated = false;
}

export const setToken = (state: AuthState, action: PayloadAction<string | null>) => {
  state.token = action.payload;
  state.isAuthenticated = !!action.payload;
}