import { createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "../interfaces";
import * as reducers from "../reducers/themeReducers"

const initialState: ThemeState = {
  mode: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers,
});

export const { toggleMode } = themeSlice.actions;
export default themeSlice.reducer;
