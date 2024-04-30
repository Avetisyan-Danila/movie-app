import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import Input from '../Input/Input.tsx';
import styles from './PasswordChangeForm.module.css';
import { Button } from '../Button/Button.tsx';
import { PasswordChangeFormProps } from './PasswordChangeForm.props.ts';
import { Confirm } from '../Confirm/Confirm.tsx';
import { useSelector } from 'react-redux';
import { selectProfile } from '../../store/user/userSelectors.ts';
import { usePasswordConfirmationModal } from '../../hooks/usePasswordConfirmationModal.ts';
import {
  STATUS_FAILED,
  STATUS_LOADING,
  STATUS_SUCCESS,
} from '../../helpers/constants.ts';

export const PasswordChangeForm = ({
  status,
  onSubmit,
}: PasswordChangeFormProps) => {
  const [password, setPassword] = useState('');
  const [isChanging, setIsChanging] = useState(false);

  const {
    isModalOpen,
    password: oldPassword,
    setPassword: setOldPassword,
    openModal,
    closeModal,
  } = usePasswordConfirmationModal();

  const profile = useSelector(selectProfile);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (status === STATUS_FAILED) {
      setPassword('');
      setIsChanging(false);
    } else if (status === STATUS_SUCCESS) {
      setIsChanging(false);
    }
  }, [status]);

  useEffect(() => {
    if (isChanging) {
      inputRef.current?.focus();
    }
  }, [isChanging]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (!password) return;

      openModal();
    },
    [openModal, password],
  );

  const handleCancel = useCallback(() => {
    setIsChanging(false);
    setPassword('');
  }, []);

  const handleOldPasswordInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setOldPassword(e.target.value);
    },
    [setOldPassword],
  );

  const handleModalConfirm = useCallback(() => {
    if (!password) return;

    onSubmit(password, oldPassword);
    closeModal();
  }, [password, onSubmit, oldPassword, closeModal]);

  const handleModalCancel = useCallback(() => {
    closeModal();

    setIsChanging(false);
    setPassword('');
  }, [closeModal]);

  return (
    <>
      <form className={styles['form']} onSubmit={handleSubmit}>
        {isChanging && (
          <>
            <input
              className="visually-hidden"
              type="text"
              readOnly={true}
              autoComplete="username email"
              value={profile?.email}
            />

            <Input
              ref={inputRef}
              id="password"
              label="Пароль"
              type="password"
              placeholder="Пароль"
              autoComplete="new-password"
              value={password}
              onChange={handleChange}
              disabled={!isChanging}
              required={true}
              minLength={6}
            />
          </>
        )}

        {!isChanging && (
          <Button
            onClick={() => setIsChanging(true)}
            disabled={status === STATUS_LOADING}
            type="button"
          >
            Сменить пароль
          </Button>
        )}

        {isChanging && (
          <>
            <Button disabled={status === STATUS_LOADING} type="submit">
              Сохранить
            </Button>

            <Button
              color="danger"
              onClick={handleCancel}
              disabled={status === STATUS_LOADING}
              type="button"
            >
              Отмена
            </Button>
          </>
        )}
      </form>

      {isModalOpen && (
        <Confirm
          title="Подтверждение"
          message="Введите пароль для подтверждения смены пароля"
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
            value={oldPassword}
            onChange={handleOldPasswordInputChange}
            required={true}
          />
        </Confirm>
      )}
    </>
  );
};
