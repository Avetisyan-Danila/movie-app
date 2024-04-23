import cn from 'classnames';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props.ts';

export const Button = ({
  children,
  className,
  appearance = 'small',
  color = 'accent',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles['button'], className, {
        [styles['small']]: appearance === 'small',
        [styles['big']]: appearance === 'big',
        [styles['accent']]: color === 'accent',
        [styles['white']]: color === 'white',
        [styles['danger']]: color === 'danger',
      })}
      {...props}
    >
      {children}
    </button>
  );
};
