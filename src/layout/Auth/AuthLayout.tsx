import { Outlet } from "react-router-dom";
import styles from "./AuthLayout.module.css";
import Logo from "../../assets/logo.svg";
import { Button } from "../../components/Button/Button.tsx";

export const AuthLayout = () => {
  return (
    <div className={styles["layout"]}>
      <div className={styles["welcome"]}>
        <img src={Logo} alt="Логотип компании" />
        <span>Погрузитесь в мир новинок кино</span>
        <Button>Войти</Button>
      </div>

      <div className={styles["content"]}>
        <Outlet />
      </div>
    </div>
  );
};
