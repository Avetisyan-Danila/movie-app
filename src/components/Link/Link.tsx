import styles from './Link.module.css';
import { LinkProps } from './Link.props.ts';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

export const Link = ({ children, className, ...props }: LinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(className, styles['link'], {
          [styles['active']]: isActive,
        })
      }
      {...props}
    >
      {children}
    </NavLink>
  );
};
