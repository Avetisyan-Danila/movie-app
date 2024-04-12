import styles from './ButtonLink.module.css';
import { ButtonLinkProps } from './ButtonLink.props.ts';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

export const ButtonLink = ({
  children,
  activeState = true,
  className,
  label,
  ...props
}: ButtonLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(className, styles['button-link'], {
          [styles['active']]: isActive && activeState,
        })
      }
      {...props}
    >
      <>
        {children}
        {label && <span className={styles['label']}>{label}</span>}
      </>
    </NavLink>
  );
};
