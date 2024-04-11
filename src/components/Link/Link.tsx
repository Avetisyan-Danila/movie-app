import styles from './Link.module.css';
import { LinkProps } from './Link.props.ts';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

export const Link = ({ children, ...props }: LinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(styles['link'], {
          [styles['active']]: isActive,
        })
      }
      {...props}
    >
      {children}
    </NavLink>
  );
};
