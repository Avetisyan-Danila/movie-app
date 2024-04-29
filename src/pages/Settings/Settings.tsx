import { Heading } from '../../components/Heading/Heading.tsx';
import styles from './Settings.module.css';
import { useSelector } from 'react-redux';
import { selectStatus } from '../../store/user/userSelectors.ts';
import { useCallback } from 'react';
import { useAppDispatch } from '../../store/store.ts';
import {
  deleteAccount,
  updateUserEmail,
  updateUserPassword,
} from '../../store/user/userThunks.ts';
import { EmailChangeForm } from '../../components/EmailChangeForm/EmailChangeForm.tsx';
import { PasswordChangeForm } from '../../components/PasswordChangeForm/PasswordChangeForm.tsx';
import { DeleteAccount } from '../../components/DeleteAccount/DeleteAccount.tsx';

export const Settings = () => {
  const status = useSelector(selectStatus);
  const dispatch = useAppDispatch();

  const handleEmailSubmit = useCallback(
    (email: string, password: string) => {
      dispatch(updateUserEmail({ newEmail: email, password }));
    },
    [dispatch],
  );

  const handlePasswordSubmit = useCallback(
    (newPassword: string, oldPassword: string) => {
      dispatch(updateUserPassword({ newPassword, oldPassword: oldPassword }));
    },
    [dispatch],
  );

  const handleDeleteAccount = useCallback(
    (password: string) => {
      dispatch(deleteAccount({ password }));
    },
    [dispatch],
  );

  return (
    <>
      <Heading>Настройки</Heading>

      <div className={styles['wrapper']}>
        <EmailChangeForm status={status} onSubmit={handleEmailSubmit} />

        <PasswordChangeForm status={status} onSubmit={handlePasswordSubmit} />

        <DeleteAccount status={status} onSubmit={handleDeleteAccount} />
      </div>
    </>
  );
};
