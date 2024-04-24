import { auth } from '../firebase.ts';
import { EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import { NEED_REAUTHORIZATION_MESSAGE } from './constants.ts';

export const reauthenticateCurrentUser = async (password: string) => {
  if (!auth.currentUser || !auth.currentUser.email) {
    throw new Error(NEED_REAUTHORIZATION_MESSAGE);
  }

  const credential = EmailAuthProvider.credential(
    auth.currentUser.email,
    password,
  );

  await reauthenticateWithCredential(auth.currentUser, credential);
};
