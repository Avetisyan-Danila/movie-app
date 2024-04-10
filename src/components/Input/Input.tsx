import styles from "./Input.module.css";
import cn from "classnames";
import { forwardRef, useState } from "react";
import { InputProps } from "./Input.props.ts";
import EyeClosed from "../../assets/eye-closed.svg";
import EyeOpened from "../../assets/eye-opened.svg";

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, className, type = "text", ...props },
  ref,
) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles["field"]}>
      {label && <label htmlFor={id}>{label}</label>}

      <input
        id={id}
        ref={ref}
        type={!showPassword ? type : "text"}
        className={cn(styles["input"], className, styles.input)}
        {...props}
      />

      {type === "password" && (
        <button
          className={styles["eye"]}
          onClick={() => setShowPassword(!showPassword)}
          type="button"
        >
          {!showPassword ? (
            <img src={EyeClosed} alt="Показать пароль" />
          ) : (
            <img src={EyeOpened} alt="Скрыть пароль" />
          )}
        </button>
      )}
    </div>
  );
});

export default Input;
