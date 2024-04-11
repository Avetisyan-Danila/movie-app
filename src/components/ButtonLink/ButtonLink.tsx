import styles from './ButtonLink.module.css';
import { ButtonLinkProps } from './ButtonLink.props.ts';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

export const ButtonLink = ({
  children,
  activeState = true,
  ...props
}: ButtonLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(styles['link'], {
          [styles['active']]: isActive && activeState,
        })
      }
      {...props}
    >
      {children}
    </NavLink>
  );
};
