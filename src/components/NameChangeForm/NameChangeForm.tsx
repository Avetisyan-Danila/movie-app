import { NameChangeFormProps } from './NameChangeForm.props.ts';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import Input from '../Input/Input.tsx';
import styles from './NameChangeForm.module.css';
import { Button } from '../Button/Button.tsx';
import { useSelector } from 'react-redux';
import { selectProfile } from '../../store/user/userSelectors.ts';
import { Confirm } from '../Confirm/Confirm.tsx';
import { STATUS_LOADING } from '../../helpers/constants.ts';
import { useChangeForm } from '../../hooks/useChangeForm.ts';

export const NameChangeForm = ({ status, onSubmit }: NameChangeFormProps) => {
  const [width, setWidth] = useState(0);

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
  }, [name, inputValueHideElem.current?.offsetWidth, isChanging]);

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

        {!isChanging && (
          <Button
            onClick={() => setIsChanging(true)}
            disabled={status === STATUS_LOADING}
            type="button"
          >
            Сменить Имя
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
