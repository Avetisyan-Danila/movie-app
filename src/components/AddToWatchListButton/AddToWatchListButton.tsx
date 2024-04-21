import styles from './AddToWatchListButton.module.css';
import cn from 'classnames';
import { AddToWatchListButtonProps } from './AddToWatchListButton.props.ts';

export const AddToWatchListButton = ({
  className,
  appearance = 'small',
  isActive = false,
  ...props
}: AddToWatchListButtonProps) => {
  return (
    <button
      className={cn(styles['add-to-watch-list-button'], className, {
        [styles['small']]: appearance === 'small',
        [styles['big']]: appearance === 'big',
        [styles['active']]: isActive === true,
      })}
      {...props}
    >
      {!isActive && (
        <svg
          fill="#ffffff"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M19,19 L19,17 L21,17 L21,19 L23,19 L23,21 L21,21 L21,23 L19,23 L19,21 L17,21 L17,19 L19,19 Z M4,8 L20,8 L20,5 L18,5 L18,6 L16,6 L16,5 L8,5 L8,6 L6,6 L6,5 L4,5 L4,8 Z M4,10 L4,20 L14,20 L14,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,5 C2,3.8954305 2.8954305,3 4,3 L6,3 L6,2 L8,2 L8,3 L16,3 L16,2 L18,2 L18,3 L20,3 C21.1045695,3 22,3.8954305 22,5 L22,14 L20,14 L20,10 L4,10 Z"
          />
        </svg>
      )}

      {isActive && (
        <svg
          fill="#ffffff"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M20,8 L20,5 L18,5 L18,6 L16,6 L16,5 L8,5 L8,6 L6,6 L6,5 L4,5 L4,8 L20,8 Z M20,10 L4,10 L4,20 L20,20 L20,10 Z M18,3 L20,3 C21.1045695,3 22,3.8954305 22,5 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,5 C2,3.8954305 2.8954305,3 4,3 L6,3 L6,2 L8,2 L8,3 L16,3 L16,2 L18,2 L18,3 Z M11,15.5857864 L15.2928932,11.2928932 L16.7071068,12.7071068 L11,18.4142136 L7.29289322,14.7071068 L8.70710678,13.2928932 L11,15.5857864 Z"
          />
        </svg>
      )}
    </button>
  );
};
