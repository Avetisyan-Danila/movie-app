import { ChangeEvent, useEffect, useRef } from 'react';
import Input from '../Input/Input.tsx';
import styles from './PasswordChangeForm.module.css';
import { PasswordChangeFormProps } from './PasswordChangeForm.props.ts';
import { useSelector } from 'react-redux';
import { selectProfile } from '../../store/user/userSelectors.ts';
import { STATUS_LOADING } from '../../helpers/constants.ts';
import { useChangeForm } from '../../hooks/useChangeForm.ts';
import { PasswordConfirmationModal } from '../PasswordConfirmationModal/PasswordConfirmationModal.tsx';
import { FormControls } from '../FormControls/FormControls.tsx';

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

  const handleOldPasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOldPassword(e.target.value);
  };

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

        <FormControls
          isChanging={isChanging}
          statusLoading={status === STATUS_LOADING}
          onEditClick={() => setIsChanging(true)}
          onSaveClick={handleSubmit}
          onCancelClick={handleCancel}
          isPasswordChange={true}
        />
      </form>

      <PasswordConfirmationModal
        isModalOpen={isModalOpen}
        email={profile?.email || ''}
        password={oldPassword}
        onPasswordChange={handleOldPasswordInputChange}
        onConfirm={handleModalConfirm}
        onCancel={handleModalCancel}
      />
    </>
  );
};
