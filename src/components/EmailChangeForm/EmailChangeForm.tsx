import { EmailChangeFormProps } from './EmailChangeForm.props.ts';
import { ChangeEvent, useCallback, useEffect, useRef } from 'react';
import Input from '../Input/Input.tsx';
import styles from './EmailChangeForm.module.css';
import { useSelector } from 'react-redux';
import { selectProfile } from '../../store/user/userSelectors.ts';
import { STATUS_LOADING } from '../../helpers/constants.ts';
import { useChangeForm } from '../../hooks/useChangeForm.ts';
import { PasswordConfirmationModal } from '../PasswordConfirmationModal/PasswordConfirmationModal.tsx';
import { useInputWidth } from '../../hooks/useInputWidth.ts';
import { FormControls } from '../FormControls/FormControls.tsx';

export const EmailChangeForm = ({ status, onSubmit }: EmailChangeFormProps) => {
  const {
    value: email,
    isChanging,
    isModalOpen,
    password,
    handleChange,
    handleSubmit,
    handleCancel,
    handleModalConfirm,
    handleModalCancel,
    setPassword,
    setIsChanging,
  } = useChangeForm({ field: 'email', status, onSubmit });

  const { width, inputValueHideElem } = useInputWidth(email, isChanging);

  const profile = useSelector(selectProfile);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isChanging) {
      inputRef.current?.focus();
    }
  }, [isChanging]);

  const handlePasswordInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    [setPassword],
  );

  return (
    <>
      <form className={styles['form']} onSubmit={handleSubmit}>
        {/*Этот элемент нужен для того, чтобы рассчитать длину input*/}
        <span ref={inputValueHideElem} className={styles['hide']}>
          {email}
        </span>

        <Input
          ref={inputRef}
          id="email"
          label="Email"
          type="email"
          placeholder="Email"
          autoComplete="on"
          value={email}
          onChange={handleChange}
          className={styles['input']}
          style={{ width: width }}
          disabled={!isChanging}
          required={true}
        />

        <FormControls
          isChanging={isChanging}
          statusLoading={status === STATUS_LOADING}
          onEditClick={() => setIsChanging(true)}
          onSaveClick={handleSubmit}
          onCancelClick={handleCancel}
        />
      </form>

      <PasswordConfirmationModal
        isModalOpen={isModalOpen}
        email={profile?.email || ''}
        password={password}
        onPasswordChange={handlePasswordInputChange}
        onConfirm={handleModalConfirm}
        onCancel={handleModalCancel}
      />
    </>
  );
};
