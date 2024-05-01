import { EmailChangeFormProps } from './EmailChangeForm.props.ts';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import Input from '../Input/Input.tsx';
import styles from './EmailChangeForm.module.css';
import { Button } from '../Button/Button.tsx';
import { useSelector } from 'react-redux';
import { selectProfile } from '../../store/user/userSelectors.ts';
import { Confirm } from '../Confirm/Confirm.tsx';
import { STATUS_LOADING } from '../../helpers/constants.ts';
import { useChangeForm } from '../../hooks/useChangeForm.ts';

export const EmailChangeForm = ({ status, onSubmit }: EmailChangeFormProps) => {
  const [width, setWidth] = useState(0);

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

  const profile = useSelector(selectProfile);

  const inputValueHideElem = useRef<HTMLSpanElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isChanging) {
      inputRef.current?.focus();
    }
  }, [isChanging]);

  useEffect(() => {
    if (!isChanging) {
      setWidth(inputValueHideElem.current?.offsetWidth ?? 0);
    }
  }, [email, inputValueHideElem.current?.offsetWidth, isChanging]);

  const handlePasswordInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    [setPassword],
  );

  return (
    <>
      <form className={styles['form']} onSubmit={handleSubmit}>
        {/*Этот элемент нужен для потого чтобы рассчитать длину для input*/}
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

        {!isChanging && (
          <Button
            onClick={() => setIsChanging(true)}
            disabled={status === STATUS_LOADING}
            type="button"
          >
            Сменить Email
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
