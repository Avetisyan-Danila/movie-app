import { EmailChangeFormProps } from './EmailChangeForm.props.ts';
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import Input from '../Input/Input.tsx';
import styles from './EmailChangeForm.module.css';
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

export const EmailChangeForm = ({ status, onSubmit }: EmailChangeFormProps) => {
  const [width, setWidth] = useState(0);

  const [email, setEmail] = useState<string | undefined>('');
  const [isChanging, setIsChanging] = useState(false);

  const { isModalOpen, password, setPassword, openModal, closeModal } =
    usePasswordConfirmationModal();

  const profile = useSelector(selectProfile);

  const inputValueHideElem = useRef<HTMLSpanElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setEmail(profile?.email);
  }, [profile?.email]);

  useEffect(() => {
    if (status === STATUS_FAILED) {
      setEmail(profile?.email);
      setIsChanging(false);
    } else if (status === STATUS_SUCCESS) {
      setIsChanging(false);
    }
  }, [profile?.email, status]);

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

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (!email) return;

      if (email === profile?.email) {
        setIsChanging(false);
        return;
      }

      openModal();
    },
    [email, openModal, profile?.email],
  );

  const handleCancel = useCallback(() => {
    setIsChanging(false);
    setEmail(profile?.email);
  }, [profile?.email]);

  const handlePasswordInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    [setPassword],
  );

  const handleModalConfirm = useCallback(() => {
    if (!email) return;

    onSubmit(email, password);
    closeModal();
  }, [closeModal, email, onSubmit, password]);

  const handleModalCancel = useCallback(() => {
    closeModal();

    setIsChanging(false);
    setEmail(profile?.email);
  }, [closeModal, profile?.email]);

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
