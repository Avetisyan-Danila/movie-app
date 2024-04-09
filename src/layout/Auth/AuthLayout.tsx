import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import styles from "./AuthLayout.module.css";
import Logo from "../../assets/logo.svg";
import { Button } from "../../components/Button/Button.tsx";

export const AuthLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={styles["layout"]}>
      {location.pathname === "/auth" && (
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
      )}

      <div className={styles["content"]}>
        <Outlet />
      </div>
    </div>
  );
};
