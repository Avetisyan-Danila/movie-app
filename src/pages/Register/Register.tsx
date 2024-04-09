import { FormEvent } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.ts";
import styles from "../Login/Login.module.css";
import { AuthForm } from "../../components/AuthForm/AuthForm.tsx";
import Input from "../../components/Input/Input.tsx";
import { Button } from "../../components/Button/Button.tsx";

interface RegisterForm {
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
  const submit = (e: FormEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & RegisterForm;
    const { email, password, copyPassword } = target;

    if (password !== copyPassword) {
      alert("Пароли не совпадают");
      return;
    }

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AuthForm title="Регистрация" className={styles["form"]} onSubmit={submit}>
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
        label="Придумайте пароль"
        name="password"
        type="password"
        placeholder="Пароль"
        required
      />

      <Input
        id="password"
        label="Повторите пароль"
        name="password"
        type="copy-password"
        placeholder="Пароль"
        required
      />

      <Button className={styles["button"]} color="white">
        Зарегистрироваться
      </Button>
    </AuthForm>
  );
};