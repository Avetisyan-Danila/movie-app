import { Status } from '../../types/status.ts';

export interface DeleteAccountProps {
  status: Status;
  onSubmit: (password: string) => void;
}
