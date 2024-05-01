import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Input from '../Input/Input.tsx';
import { useSelector } from 'react-redux';
import { selectProfile } from '../../store/user/userSelectors.ts';
import { Confirm } from '../Confirm/Confirm.tsx';
import { usePasswordConfirmationModal } from '../../hooks/usePasswordConfirmationModal.ts';
import { ProfileAvatarUploaderProps } from './ProfileAvatarUploader.props.ts';
import { Button } from '../Button/Button.tsx';
import { addNotification } from '../../helpers/notification.ts';
import { setJwt } from '../../store/user/userSlice.ts';
import { useAuth } from '../../hooks/useAuth.ts';
import { useAppDispatch } from '../../store/store.ts';
import {
  STATUS_FAILED,
  STATUS_LOADING,
  STATUS_SUCCESS,
} from '../../helpers/constants.ts';
import Avatar from '../../assets/icons/avatar.svg';
import styles from './ProfileAvatarUploader.module.css';

export const ProfileAvatarUploader = ({
  status,
  onSubmit,
}: ProfileAvatarUploaderProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  const { isModalOpen, password, setPassword, openModal, closeModal } =
    usePasswordConfirmationModal();

  const uid = useAuth();
  const dispatch = useAppDispatch();
  const profile = useSelector(selectProfile);

  useEffect(() => {
    if (status === STATUS_FAILED || status === STATUS_SUCCESS) {
      onCancel();
    }
  }, [profile?.photoUrl, status]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const src = URL.createObjectURL(file);

      setFile(file);
      setPreviewSrc(src);

      e.target.value = '';
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!uid) {
      addNotification('Пользователь не авторизован', 'warning');
      dispatch(setJwt(null));
      return;
    }

    if (!file) {
      addNotification('Файл не выбран', 'warning');
      return;
    }

    openModal();
  };

  const onCancel = () => {
    setFile(null);
    setPreviewSrc(null);
  };

  const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleModalConfirm = () => {
    if (!uid) {
      addNotification('Пользователь не авторизован', 'warning');
      dispatch(setJwt(null));
      return;
    }

    if (!file) {
      addNotification('Файл не выбран', 'warning');
      return;
    }

    onSubmit(file, password, uid);
    closeModal();
  };

  const handleModalCancel = () => {
    closeModal();
    onCancel();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles['form']}>
        <div className={styles['upload-block']}>
          <img
            className={styles['avatar']}
            src={previewSrc || profile?.photoUrl || Avatar}
            alt="Аватар пользователя"
          />

          <input
            className={styles['input']}
            type="file"
            onChange={handleFileChange}
            disabled={status === STATUS_LOADING}
          />

          <div className={styles['upload-button']}>Загрузить фото</div>
        </div>

        {file && (
          <div className={styles['actions']}>
            <Button type="submit" disabled={status === STATUS_LOADING}>
              Сохранить
            </Button>

            <Button
              onClick={onCancel}
              type="button"
              color="danger"
              disabled={status === STATUS_LOADING}
            >
              Отмена
            </Button>
          </div>
        )}
      </form>

      {isModalOpen && (
        <Confirm
          title="Подтверждение"
          message="Введите пароль для подтверждения смены почты"
          onConfirm={handleModalConfirm}
          onCancel={handleModalCancel}
        >
          <input
            className="visually-hidden"
            type="text"
            readOnly={true}
            autoComplete="username email"
            value={profile?.email}
          />

          <Input
            id="password"
            label="Пароль"
            type="password"
            placeholder="Пароль"
            autoComplete="new-password"
            value={password}
            onChange={handlePasswordInputChange}
            required={true}
          />
        </Confirm>
      )}
    </>
  );
};
