import { FieldErrors, FieldValues, Path, RegisterOptions, UseFormRegister } from "react-hook-form";
import { Recharge } from "./transaction.interface";

export interface RegisterFieldProps<T extends FieldValues> {
  name: Path<T>;
  rules?: RegisterOptions<T, Path<T>>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
}

export interface RegisterFieldTransactionProps {
  name: "cellPhone" | "supplierId" | "value"
  rules: object;
  register: UseFormRegister<Recharge>;
  errors: FieldErrors<Recharge>;
}

export interface MessageDialog {
  title: string;
  message: string;
  confirmationText: string;
  redirectTo?: string;
}

export interface messageDialogState {
  messageDialog: MessageDialog;
  open: boolean;
}