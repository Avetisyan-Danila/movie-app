import { Status } from '../../types/status.ts';

export interface ProfileAvatarUploaderProps {
  status: Status;
  onSubmit: (file: File, password: string, uid: string) => void;
}
