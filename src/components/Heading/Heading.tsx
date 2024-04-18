import { HeadingProps } from './Heading.props.ts';
import styles from './Heading.module.css';
import cn from 'classnames';

export const Heading = ({ children, withMargin = true }: HeadingProps) => {
  return (
    <h3
      className={cn(styles['heading'], {
        [styles['with-margin']]: withMargin,
      })}
    >
      {children}
    </h3>
  );
};
