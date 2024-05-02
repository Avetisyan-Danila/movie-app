import styles from './Search.module.css';
import cn from 'classnames';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
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
  const [value, setValue] = useState('');
  const inputWrapperRef = useRef<HTMLFormElement | null>(null);
  useOutsideAlerter(inputWrapperRef, () => onSearchIconClick(false));

  const inputRef = useRef<HTMLInputElement | null>(null);

  const submit = (e: FormEvent) => {
    e.preventDefault();

    if (!isSearchActive) {
      onSearchIconClick(true);
      inputRef.current?.focus();
      return;
    }

    inputRef.current?.blur();
    if (value) {
      onSearch(value);
      setValue('');
      onSearchIconClick(false);
    } else {
      addNotification('Заполните поле поиска', 'warning');
      inputRef.current?.focus();
    }
  };

  return (
    <form
      onSubmit={submit}
      className={cn(styles['input-wrapper'], {
        [styles['active']]: isSearchActive,
      })}
      ref={inputWrapperRef}
    >
      <button className={styles['search-button']}>
        <img src={SearchIcon} alt="Поиск" className={styles['icon']} />
      </button>

      <input
        ref={inputRef}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        className={cn(className, styles['input'], {
          [styles['active']]: isSearchActive,
        })}
        {...props}
      />
    </form>
  );
};
