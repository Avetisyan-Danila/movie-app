import { Status } from '../../types/status.ts';

export interface PasswordChangeFormProps {
  status: Status;
  onSubmit: (password: string) => void;
}
