import cn from 'classnames';
import styles from './Rating.module.css';
import { RatingProps } from './Rating.props.ts';

export const Rating = ({ rating, className }: RatingProps) => {
  if (!rating) return;

  return (
    <span
      className={cn(className, [styles['rating']], {
        [styles['neutral']]: rating.kp < 7,
        [styles['positive']]: rating.kp >= 7,
      })}
    >
      {rating.kp.toFixed(1)}
    </span>
  );
};
