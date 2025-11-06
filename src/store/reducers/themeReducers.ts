import { PayloadAction } from "@reduxjs/toolkit";
import { ThemeState } from "../interfaces";

export const toggleMode = (state: ThemeState) => {
  state.mode = state.mode === "light" ? "dark" : "light";
};
