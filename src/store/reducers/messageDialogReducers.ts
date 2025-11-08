import { PayloadAction } from "@reduxjs/toolkit";
import { MessageDialog, messageDialogState } from "../../interfaces";

export const setOpen = (state: messageDialogState, action: PayloadAction<MessageDialog>) => {
  state.messageDialog = {...action.payload};
  state.open = true;
}

export const setClose = (state: messageDialogState) => {
  state.open = false;
  state.messageDialog = {
    title: "",
    message: "",
    confirmationText: "",
    redirectTo: undefined,
  };
}