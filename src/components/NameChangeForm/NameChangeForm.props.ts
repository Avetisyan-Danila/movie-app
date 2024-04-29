import { Status } from '../../types/status.ts';

export interface NameChangeFormProps {
  status: Status;
  onSubmit: (email: string, password: string) => void;
}
