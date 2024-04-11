import { FormEvent, useEffect } from 'react';
import styles from './Login.module.css';
import Input from '../../components/Input/Input.tsx';
import { AuthForm } from '../../components/AuthForm/AuthForm.tsx';
import { Button } from '../../components/Button/Button.tsx';
import { useAppDispatch } from '../../store/store.ts';
import { login } from '../../store/user/userThunks.ts';
import { useSelector } from 'react-redux';
import { selectJwt, selectStatus } from '../../store/user/userSelectors.ts';
import { useNavigate } from 'react-router-dom';

interface LoginForm {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
}

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const status = useSelector(selectStatus);
  const jwt = useSelector(selectJwt);

  useEffect(() => {
    if (jwt) {
      navigate('/');
    }
  }, [jwt, navigate]);

  const submit = (e: FormEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & LoginForm;
    const { email, password } = target;

    dispatch(login({ email: email.value, password: password.value }));
  };

  return (
    <AuthForm
      title="Вход"
      className={styles['form']}
      onSubmit={submit}
      withBackArrow={true}
    >
      <Input
        id="email"
        label="Ваш email"
        name="email"
        type="email"
        placeholder="Email"
        required
        autoComplete="on"
      />

      <Input
        id="password"
        label="Ваш пароль"
        name="password"
        type="password"
        placeholder="Пароль"
        required
        autoComplete="on"
      />

      <Button
        className={styles['button']}
        color="white"
        disabled={status === 'loading'}
      >
        Войти
      </Button>
    </AuthForm>
  );
};
