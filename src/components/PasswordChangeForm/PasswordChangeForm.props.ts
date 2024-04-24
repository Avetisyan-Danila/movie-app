import { Status } from '../../types/status.ts';

export interface PasswordChangeFormProps {
  status: Status;
  onSubmit: (newPassword: string, oldPassword: string) => void;
}
