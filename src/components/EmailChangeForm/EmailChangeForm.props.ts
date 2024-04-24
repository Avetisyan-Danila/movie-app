import { Status } from '../../types/status.ts';

export interface EmailChangeFormProps {
  status: Status;
  onSubmit: (email: string, password: string) => void;
}
