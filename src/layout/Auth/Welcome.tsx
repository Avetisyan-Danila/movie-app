import styles from "./Welcome.module.css";
import Logo from "../../assets/logo.svg";
import { Button } from "../../components/Button/Button.tsx";
import { Link, useNavigate } from "react-router-dom";

export const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className={styles["welcome"]}>
      <img className={styles["logo"]} src={Logo} alt="Логотип компании" />
      <span>Погрузитесь в мир новинок кино</span>
      <Button
        onClick={() => navigate("/auth/login")}
        className={styles["button"]}
        appearance="big"
      >
        Войти
      </Button>

      <div className={styles["links"]}>
        <span>Нет аккаунта?</span>
        <Link to="/auth/register">Зарегистрироваться</Link>
      </div>
    </div>
  );
};
