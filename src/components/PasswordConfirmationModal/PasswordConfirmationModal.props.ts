import { ChangeEvent } from 'react';

export interface PasswordConfirmationModalProps {
  isModalOpen: boolean;
  email: string;
  password: string;
  onPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onConfirm: () => void;
  onCancel: () => void;
}
