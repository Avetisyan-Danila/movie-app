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

export const EmailChangeForm = ({ status, onSubmit }: EmailChangeFormProps) => {
  const [width, setWidth] = useState(0);

  const [email, setEmail] = useState<string | undefined>('');
  const [isChanging, setIsChanging] = useState(false);

  const inputValueHideElem = useRef<HTMLSpanElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const profile = useSelector(selectProfile);

  useEffect(() => {
    setEmail(profile?.email);
  }, [profile?.email]);

  useEffect(() => {
    if (status === 'rejected') {
      setEmail(profile?.email);
      setIsChanging(false);
    } else if (status === 'received') {
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

      onSubmit(email);
    },
    [email, onSubmit, profile?.email],
  );

  const handleCancel = useCallback(() => {
    setIsChanging(false);
    setEmail(profile?.email);
  }, [profile?.email]);

  return (
    <form className={styles['block']} onSubmit={handleSubmit}>
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
          disabled={status === 'loading'}
          type="button"
        >
          Сменить Email
        </Button>
      )}

      {isChanging && (
        <>
          <Button disabled={status === 'loading'} type="submit">
            Сохранить
          </Button>

          <Button
            color="danger"
            onClick={handleCancel}
            disabled={status === 'loading'}
            type="button"
          >
            Отмена
          </Button>
        </>
      )}
    </form>
  );
};
