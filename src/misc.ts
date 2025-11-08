import { FieldValues } from "react-hook-form";
import { RegisterFieldProps, RegisterFieldTransactionProps } from "./interfaces";

export const registerField = <T extends FieldValues>({
    name,
    rules,
    register,
    errors,
  }: RegisterFieldProps<T>) => {
    const field = register(name as any, rules);
    const error = errors[name];
  
    return {
      ...field,
      error: !!error,
      helperText: typeof error?.message === 'string' ? error.message : '',
    };
  };

export const registerFieldTransaction = (
    { name, rules, register, errors }: RegisterFieldTransactionProps
) => {
    const field = register(name, rules);
    const error = errors[name as keyof typeof errors];
    return {
        ...field,
        error: !!error,
        helperText: typeof error?.message === 'string' ? error.message : '',
    };
};