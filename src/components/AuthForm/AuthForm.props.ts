import { FormHTMLAttributes, ReactNode } from 'react';

export interface AuthFormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;

  withBackArrow?: boolean;
  title?: string;
}
