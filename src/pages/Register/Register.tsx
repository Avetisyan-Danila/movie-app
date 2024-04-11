import { FormEvent, useEffect } from "react";
import styles from "./Register.module.css";
import Input from "../../components/Input/Input.tsx";
import { AuthForm } from "../../components/AuthForm/AuthForm.tsx";
import { Button } from "../../components/Button/Button.tsx";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../store/user/userThunks.ts";
import { useAppDispatch } from "../../store/store.ts";
import { useSelector } from "react-redux";
import { selectJwt, selectStatus } from "../../store/user/userSelectors.ts";
import { addNotification } from "../../helpers/notification.ts";

interface RegisterForm {
  userName: {
    value: string;
  };
  email: {
    value: string;
  };
  password: {
    value: string;
  };
  copyPassword: {
    value: string;
  };
}

export const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const status = useSelector(selectStatus);
  const jwt = useSelector(selectJwt);

  useEffect(() => {
    if (jwt) {
      navigate("/");
    }
  }, [jwt, navigate]);

  const submit = (e: FormEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & RegisterForm;
    const { userName, email, password, copyPassword } = target;

    if (password.value !== copyPassword.value) {
      addNotification("Пароли не совпадают", "danger");
      return;
    }

    dispatch(
      register({
        userName: userName.value,
        email: email.value,
        password: password.value,
      }),
    );
  };

  return (
    <AuthForm
      title="Регистрация"
      className={styles["form"]}
      onSubmit={submit}
      withBackArrow={true}
    >
      <Input
        id="name"
        label="Ваше имя"
        name="userName"
        placeholder="Имя"
        required
        autoComplete="on"
      />

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
        label="Придумайте пароль"
        name="password"
        type="password"
        placeholder="Пароль"
        required
        autoComplete="on"
      />

      <Input
        id="copy-password"
        label="Повторите пароль"
        name="copyPassword"
        type="password"
        placeholder="Пароль"
        required
        autoComplete="on"
      />

      <Button
        className={styles["button"]}
        color="white"
        disabled={status === "loading"}
      >
        Зарегистрироваться
      </Button>

      <div className={styles["links"]}>
        <span>Уже есть аккаунт?</span>
        <Link to="/auth/login">Войти</Link>
      </div>
    </AuthForm>
  );
};
