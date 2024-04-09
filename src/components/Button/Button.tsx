import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props.ts";
import cn from "classnames";

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(styles["button"], styles["accent"], className)}
      {...props}
    >
      {children}
    </button>
  );
};
