import { FormEvent } from 'react';
import styles from './ResetPassword.module.css';
import Input from '../../components/Input/Input.tsx';
import { AuthForm } from '../../components/AuthForm/AuthForm.tsx';
import { Button } from '../../components/Button/Button.tsx';
import { useAppDispatch } from '../../store/store.ts';
import { resetPassword } from '../../store/user/userThunks.ts';
import { useSelector } from 'react-redux';
import { selectStatus } from '../../store/user/userSelectors.ts';
import { STATUS_LOADING } from '../../helpers/constants.ts';
import { useNavigate } from 'react-router-dom';

interface ResetPasswordForm {
  email: {
    value: string;
  };
}

export const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const status = useSelector(selectStatus);

  const submit = async (e: FormEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & ResetPasswordForm;
    const { email } = target;

    await dispatch(resetPassword({ email: email.value }));
    navigate('/auth/login');
  };

  return (
    <AuthForm
      title="Восстановление пароля"
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

      <Button
        className={styles['button']}
        color="white"
        disabled={status === STATUS_LOADING}
      >
        Отправить письмо для восстановления пароля
      </Button>
    </AuthForm>
  );
};
