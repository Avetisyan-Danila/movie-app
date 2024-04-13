import styles from './Search.module.css';
import cn from 'classnames';
import { useRef } from 'react';
import { SearchProps } from './Search.props.ts';
import SearchIcon from '../../assets/icons/search.svg';
import { useOutsideAlerter } from '../../hooks/useClickOutside.ts';
import { addNotification } from '../../helpers/notification.ts';

export const Search = ({
  className,
  onSearch,
  isSearchActive,
  onSearchIconClick,
  ...props
}: SearchProps) => {
  const inputWrapperRef = useRef<HTMLDivElement | null>(null);
  useOutsideAlerter(inputWrapperRef, () => onSearchIconClick(false));

  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div
      className={cn(styles['input-wrapper'], {
        [styles['active']]: isSearchActive,
      })}
      ref={inputWrapperRef}
    >
      <img
        src={SearchIcon}
        alt="Поиск"
        className={styles['icon']}
        onClick={() => {
          if (!isSearchActive) {
            onSearchIconClick(true);
            inputRef.current?.focus();
          } else {
            inputRef.current?.blur();
            if (inputRef.current?.value) {
              onSearch(inputRef.current.value);
            } else {
              addNotification('Заполните поле поиска', 'warning');
            }
          }
        }}
      />

      <input
        ref={inputRef}
        className={cn(className, styles['input'], {
          [styles['active']]: isSearchActive,
        })}
        {...props}
      />
    </div>
  );
};
