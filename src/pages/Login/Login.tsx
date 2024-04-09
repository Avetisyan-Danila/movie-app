import { FormEvent } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.ts";
import { AuthForm } from "../../components/AuthForm/AuthForm.tsx";
import styles from "./Login.module.css";
import Input from "../../components/Input/Input.tsx";
import { Button } from "../../components/Button/Button.tsx";

interface LoginForm {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
}

export const Login = () => {
  const submit = (e: FormEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & LoginForm;
    const { email, password } = target;
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AuthForm title="Вход" className={styles["form"]} onSubmit={submit}>
      <Input
        id="email"
        label="Ваш email"
        name="email"
        type="email"
        placeholder="Email"
        required
      />

      <Input
        id="password"
        label="Ваш пароль"
        name="password"
        type="password"
        placeholder="Пароль"
        required
      />

      <Button className={styles["button"]} color="white">
        Войти
      </Button>
    </AuthForm>
  );
};
