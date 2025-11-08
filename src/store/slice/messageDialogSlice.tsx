import { createSlice } from "@reduxjs/toolkit";
import * as reducers from "../reducers/messageDialogReducers"
import { messageDialogState } from "../../interfaces";

const initialState: messageDialogState = {
  open: false,
  messageDialog: {
    title: "",
    message: "",
    confirmationText: "",
    redirectTo: undefined,
  }
};

export const messageDialogSlice = createSlice({
  name: "messageDialog",
  initialState,
  reducers,
});

export const { setOpen, setClose } = messageDialogSlice.actions;
export default messageDialogSlice.reducer;
