import { AuthFormProps } from "./AuthForm.props.ts";
import styles from "./AuthForm.module.css";
import cn from "classnames";

export const AuthForm = ({
  children,
  title,
  className,
  ...props
}: AuthFormProps) => {
  return (
    <form className={cn(styles["auth-form"], className)} {...props}>
      <h2 className={styles["title"]}>{title}</h2>
      {children}
    </form>
  );
};
