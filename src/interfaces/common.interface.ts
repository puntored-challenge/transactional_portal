import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Login, SignIn } from "./auth.interface";
import { Transaction } from "./transaction.interface";

export interface RegisterFieldProps {
  name: "name" | "lastname" | "username" | "password";
  rules: object;
  register: UseFormRegister<Login | SignIn>;
  errors: FieldErrors<Login | SignIn>;
}

export interface RegisterFieldTransactionProps {
  name: "cellPhone" | "supplierId" | "value"
  rules: object;
  register: UseFormRegister<Transaction>;
  errors: FieldErrors<Transaction>;
}