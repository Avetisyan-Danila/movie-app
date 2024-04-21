import styles from './Loader.module.css';
import cn from 'classnames';
import { LoaderProps } from './Loader.props.tsx';

export const Loader = ({ className }: LoaderProps) => {
  return <span className={cn(styles['loader'], className)}></span>;
};
