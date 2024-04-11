import styles from './Input.module.css';
import cn from 'classnames';
import { forwardRef, useState } from 'react';
import { InputProps } from './Input.props.ts';
import EyeClosedIcon from '../../assets/icons/eye-closed.svg';
import EyeOpenedIcon from '../../assets/icons/eye-opened.svg';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, className, type = 'text', ...props },
  ref,
) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles['field']}>
      {label && <label htmlFor={id}>{label}</label>}

      <input
        id={id}
        ref={ref}
        type={!showPassword ? type : 'text'}
        className={cn(styles['input'], className, styles.input)}
        {...props}
      />

      {type === 'password' && (
        <button
          className={styles['eye']}
          onClick={() => setShowPassword(!showPassword)}
          type="button"
        >
          {!showPassword ? (
            <img src={EyeClosedIcon} alt="Показать пароль" />
          ) : (
            <img src={EyeOpenedIcon} alt="Скрыть пароль" />
          )}
        </button>
      )}
    </div>
  );
});

export default Input;
