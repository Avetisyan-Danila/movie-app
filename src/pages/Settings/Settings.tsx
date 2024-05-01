import { Heading } from '../../components/Heading/Heading.tsx';
import styles from './Settings.module.css';
import { useSelector } from 'react-redux';
import { selectStatus } from '../../store/user/userSelectors.ts';
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

  const handleEmailSubmit = (email: string, password: string) => {
    dispatch(updateUserEmail({ newEmail: email, password }));
  };

  const handlePasswordSubmit = (newPassword: string, oldPassword: string) => {
    dispatch(updateUserPassword({ newPassword, oldPassword: oldPassword }));
  };

  const handleDeleteAccount = (password: string) => {
    dispatch(deleteAccount({ password }));
  };

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
