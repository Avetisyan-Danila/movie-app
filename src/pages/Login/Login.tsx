import { FormEvent } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.ts";

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
    <div>
      <form onSubmit={submit}>
        <h2>Sign in</h2>

        <input name="email" placeholder="Email" type="email" />
        <input name="password" placeholder="Пароль" type="password" />

        <button>Login</button>
      </form>
    </div>
  );
};
