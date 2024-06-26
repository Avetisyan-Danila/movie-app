import { Heading } from '../../components/Heading/Heading.tsx';
import styles from '../Settings/Settings.module.css';
import { useSelector } from 'react-redux';
import { selectStatus } from '../../store/user/userSelectors.ts';
import { NameChangeForm } from '../../components/NameChangeForm/NameChangeForm.tsx';
import { useAppDispatch } from '../../store/store.ts';
import {
  updateProfileAvatar,
  updateUserName,
} from '../../store/user/userThunks.ts';
import { ProfileAvatarUploader } from '../../components/ProfileAvatarUploader/ProfileAvatarUploader.tsx';

export const Profile = () => {
  const status = useSelector(selectStatus);
  const dispatch = useAppDispatch();

  const handleAvatarSubmit = (file: File, password: string, uid: string) => {
    dispatch(updateProfileAvatar({ file, password, uid }));
  };

  const handleNameSubmit = (name: string, password: string) => {
    dispatch(updateUserName({ name, password }));
  };

  return (
    <>
      <Heading>Профиль</Heading>

      <div className={styles['wrapper']}>
        <ProfileAvatarUploader status={status} onSubmit={handleAvatarSubmit} />

        <NameChangeForm status={status} onSubmit={handleNameSubmit} />
      </div>
    </>
  );
};
