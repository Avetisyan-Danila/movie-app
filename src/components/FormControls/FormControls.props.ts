import { FormEvent } from 'react';

export interface FormControlsProps {
  isChanging: boolean;
  statusLoading: boolean;
  onEditClick: () => void;
  onSaveClick: (e: FormEvent) => void;
  onCancelClick: () => void;
  isPasswordChange?: boolean;
}
