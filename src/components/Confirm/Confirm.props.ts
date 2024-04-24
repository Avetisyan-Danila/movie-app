import { ReactNode } from 'react';

export interface ConfirmProps {
  children: ReactNode;
  title: string;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
}
