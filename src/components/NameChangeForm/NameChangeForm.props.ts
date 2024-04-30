import { Status } from '../../types/status.ts';

export interface NameChangeFormProps {
  status: Status;
  onSubmit: (name: string, password: string) => void;
}
