import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Login, SignIn } from "./auth.interface";

export interface RegisterFieldProps {
  name: "name" | "lastname" | "username" | "password";
  rules: object;
  register: UseFormRegister<Login | SignIn>;
  errors: FieldErrors<Login | SignIn>;
}