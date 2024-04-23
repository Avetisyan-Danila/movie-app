import { Heading } from '../../components/Heading/Heading.tsx';
import { Button } from '../../components/Button/Button.tsx';
import styles from './Settings.module.css';
import { useSelector } from 'react-redux';
import { selectStatus } from '../../store/user/userSelectors.ts';
import { useCallback } from 'react';
import { useAppDispatch } from '../../store/store.ts';
import {
  updateUserEmail,
  updateUserPassword,
} from '../../store/user/userThunks.ts';
import { EmailChangeForm } from '../../components/EmailChangeForm/EmailChangeForm.tsx';
import { PasswordChangeForm } from '../../components/PasswordChangeForm/PasswordChangeForm.tsx';

export const Settings = () => {
  const status = useSelector(selectStatus);
  const dispatch = useAppDispatch();

  const handleEmailSubmit = useCallback(
    (email: string) => {
      // TODO: Попросить юзера авторизоваться заново
      dispatch(updateUserEmail(email));
    },
    [dispatch],
  );

  const handlePasswordSubmit = useCallback(
    (password: string) => {
      // TODO: Попросить юзера авторизоваться заново
      dispatch(updateUserPassword(password));
    },
    [dispatch],
  );

  return (
    <>
      <Heading>Настройки</Heading>

      <div className={styles['wrapper']}>
        <EmailChangeForm status={status} onSubmit={handleEmailSubmit} />

        <PasswordChangeForm status={status} onSubmit={handlePasswordSubmit} />

        <div>
          <Button disabled={status === 'loading'} color="danger">
            Удалить аккаунт
          </Button>
        </div>
      </div>
    </>
  );
};
