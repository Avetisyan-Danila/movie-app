import styles from "./Input.module.css";
import cn from "classnames";
import { forwardRef } from "react";
import { InputProps } from "./Input.props.ts";

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, className, ...props },
  ref,
) {
  return (
    <div className={styles["field"]}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        ref={ref}
        className={cn(styles["input"], className, styles.input)}
        {...props}
      />
    </div>
  );
});

export default Input;
