import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../interfaces";
import * as reducers from "../reducers/authReducers"

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers,
});

export const { logout, setToken } = authSlice.actions;
export default authSlice.reducer;
