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

export const PasswordChangeForm = ({
  status,
  onSubmit,
}: PasswordChangeFormProps) => {
  const [password, setPassword] = useState('');
  const [isChanging, setIsChanging] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (status === 'rejected') {
      setPassword('');
      setIsChanging(false);
    } else if (status === 'received') {
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

      onSubmit(password);
    },
    [password, onSubmit],
  );

  const handleCancel = useCallback(() => {
    setIsChanging(false);
    setPassword('');
  }, []);

  return (
    <form className={styles['block']} onSubmit={handleSubmit}>
      {isChanging && (
        <Input
          ref={inputRef}
          id="password"
          label="Пароль"
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={handleChange}
          className={styles['input']}
          disabled={!isChanging}
          required={true}
        />
      )}

      {!isChanging && (
        <Button
          onClick={() => setIsChanging(true)}
          disabled={status === 'loading'}
          type="button"
        >
          Сменить пароль
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
