import { HeadingProps } from './Heading.props.ts';
import styles from './Heading.module.css';
import cn from 'classnames';

export const Heading = ({
  children,
  className,
  withMargin = true,
  appearance = 'big',
}: HeadingProps) => {
  return (
    <h3
      className={cn(styles['heading'], className, {
        [styles['with-margin']]: withMargin,
        [styles['big']]: appearance === 'big',
        [styles['small']]: appearance === 'small',
      })}
    >
      {children}
    </h3>
  );
};
