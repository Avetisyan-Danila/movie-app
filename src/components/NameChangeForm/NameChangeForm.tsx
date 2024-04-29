import { NameChangeFormProps } from './NameChangeForm.props.ts';
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import Input from '../Input/Input.tsx';
import styles from './NameChangeForm.module.css';
import { Button } from '../Button/Button.tsx';
import { useSelector } from 'react-redux';
import { selectProfile } from '../../store/user/userSelectors.ts';
import { Confirm } from '../Confirm/Confirm.tsx';
import { usePasswordConfirmationModal } from '../../hooks/usePasswordConfirmationModal.ts';
import {
  STATUS_FAILED,
  STATUS_LOADING,
  STATUS_SUCCESS,
} from '../../helpers/constants.ts';

export const NameChangeForm = ({ status, onSubmit }: NameChangeFormProps) => {
  const [width, setWidth] = useState(0);

  const [name, setName] = useState<string | undefined>('');
  const [isChanging, setIsChanging] = useState(false);

  const { isModalOpen, password, setPassword, openModal, closeModal } =
    usePasswordConfirmationModal();

  const profile = useSelector(selectProfile);

  const inputValueHideElem = useRef<HTMLSpanElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setName(profile?.name);
  }, [profile?.name]);

  useEffect(() => {
    if (status === STATUS_FAILED) {
      setName(profile?.name);
      setIsChanging(false);
    } else if (status === STATUS_SUCCESS) {
      setIsChanging(false);
    }
  }, [profile?.name, status]);

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

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (!name) return;

      if (name === profile?.name) {
        setIsChanging(false);
        return;
      }

      openModal();
    },
    [name, openModal, profile?.name],
  );

  const handleCancel = useCallback(() => {
    setIsChanging(false);
    setName(profile?.name);
  }, [profile?.name]);

  const handlePasswordInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    [setPassword],
  );

  const handleModalConfirm = useCallback(() => {
    if (!name) return;

    onSubmit(name, password);
    closeModal();
  }, [closeModal, name, onSubmit, password]);

  const handleModalCancel = useCallback(() => {
    closeModal();

    setIsChanging(false);
    setName(profile?.name);
  }, [closeModal, profile?.name]);

  return (
    <>
      <form className={styles['block']} onSubmit={handleSubmit}>
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
