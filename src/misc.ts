import { RegisterFieldProps } from "./interfaces";

   export const registerField = (
        { name, rules, register, errors }: RegisterFieldProps
    ) => {
        const field = register(name, rules);
        const error = errors[name as keyof typeof errors];
        return {
            ...field,
            error: !!error,
            helperText: typeof error?.message === 'string' ? error.message : '',
        };
    };