import { FormEvent, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.ts";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copyPassword, setCopyPassword] = useState("");
  const [error, setError] = useState("");

  const register = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== copyPassword) {
      setError("Пароли не совпадают");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setPassword("");
        setCopyPassword("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={register}>
        <h2>Create an account</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          autoComplete="off"
        />
        <input
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          autoComplete="off"
        />
        <input
          placeholder="Повторите пароль"
          value={copyPassword}
          onChange={(e) => setCopyPassword(e.target.value)}
          type="password"
          autoComplete="off"
        />

        <button>Create</button>

        <div>{error && "Ошибка: " + error}</div>
      </form>
    </div>
  );
};
