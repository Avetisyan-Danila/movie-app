import { HeadingProps } from './Heading.props.ts';
import styles from './Heading.module.css';

export const Heading = ({ children }: HeadingProps) => {
  return <h3 className={styles['heading']}>{children}</h3>;
};
