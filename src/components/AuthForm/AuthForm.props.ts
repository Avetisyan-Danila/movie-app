import { FormHTMLAttributes, ReactNode } from "react";

export interface AuthFormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  title?: string;
  withBackArrow?: boolean;
}
