import { ChangeEvent, useCallback, useEffect, useRef } from 'react';
import Input from '../Input/Input.tsx';
import styles from './PasswordChangeForm.module.css';
import { Button } from '../Button/Button.tsx';
import { PasswordChangeFormProps } from './PasswordChangeForm.props.ts';
import { Confirm } from '../Confirm/Confirm.tsx';
import { useSelector } from 'react-redux';
import { selectProfile } from '../../store/user/userSelectors.ts';
import { STATUS_LOADING } from '../../helpers/constants.ts';
import { useChangeForm } from '../../hooks/useChangeForm.ts';

export const PasswordChangeForm = ({
  status,
  onSubmit,
}: PasswordChangeFormProps) => {
  const {
    value: newPassword,
    isChanging,
    isModalOpen,
    password: oldPassword,
    handleChange: handleNewPasswordChange,
    handleSubmit,
    handleCancel,
    handleModalConfirm,
    handleModalCancel,
    setPassword: setOldPassword,
    setIsChanging,
  } = useChangeForm({
    status,
    onSubmit,
    isPasswordChange: true,
  });

  const profile = useSelector(selectProfile);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isChanging) {
      inputRef.current?.focus();
    }
  }, [isChanging]);

  const handleOldPasswordInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setOldPassword(e.target.value);
    },
    [setOldPassword],
  );

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
              value={newPassword}
              onChange={handleNewPasswordChange}
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
