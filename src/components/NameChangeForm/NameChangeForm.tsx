import { NameChangeFormProps } from './NameChangeForm.props.ts';
import { ChangeEvent, useEffect, useRef } from 'react';
import Input from '../Input/Input.tsx';
import styles from './NameChangeForm.module.css';
import { useSelector } from 'react-redux';
import { selectProfile } from '../../store/user/userSelectors.ts';
import { STATUS_LOADING } from '../../helpers/constants.ts';
import { useChangeForm } from '../../hooks/useChangeForm.ts';
import { PasswordConfirmationModal } from '../PasswordConfirmationModal/PasswordConfirmationModal.tsx';
import { useInputWidth } from '../../hooks/useInputWidth.ts';
import { FormControls } from '../FormControls/FormControls.tsx';

export const NameChangeForm = ({ status, onSubmit }: NameChangeFormProps) => {
  const {
    value: name,
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
  } = useChangeForm({ field: 'name', status, onSubmit });

  const { width, inputValueHideElem } = useInputWidth(name, isChanging);

  const profile = useSelector(selectProfile);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isChanging) {
      inputRef.current?.focus();
    }
  }, [isChanging]);

  const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <form className={styles['form']} onSubmit={handleSubmit}>
        {/*Этот элемент нужен для того, чтобы рассчитать длину input*/}
        <span ref={inputValueHideElem} className={styles['hide']}>
          {name}
        </span>

        <Input
          ref={inputRef}
          id="name"
          label="Имя"
          placeholder="Имя"
          autoComplete="on"
          value={name}
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
