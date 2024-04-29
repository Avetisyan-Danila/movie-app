import { Heading } from '../../components/Heading/Heading.tsx';
import styles from '../Settings/Settings.module.css';
import { useSelector } from 'react-redux';
import { selectStatus } from '../../store/user/userSelectors.ts';
import { NameChangeForm } from '../../components/NameChangeForm/NameChangeForm.tsx';
import { useCallback } from 'react';
import { useAppDispatch } from '../../store/store.ts';
import { updateUserName } from '../../store/user/userThunks.ts';

export const Profile = () => {
  const status = useSelector(selectStatus);
  const dispatch = useAppDispatch();

  const handleNameSubmit = useCallback(
    (name: string, password: string) => {
      dispatch(updateUserName({ name, password }));
    },
    [dispatch],
  );

  return (
    <>
      <Heading>Профиль</Heading>

      <div className={styles['wrapper']}>
        <NameChangeForm status={status} onSubmit={handleNameSubmit} />
      </div>
    </>
  );
};
