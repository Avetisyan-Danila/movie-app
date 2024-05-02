import styles from './Header.module.css';
import cn from 'classnames';
import BellIcon from '../../assets/icons/bell.svg';
import Avatar from '../../assets/icons/avatar.svg';

import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Search } from '../Search/Search.tsx';
import { ButtonLink } from '../ButtonLink/ButtonLink.tsx';
import { Link } from '../Link/Link.tsx';
import { useScroll } from '../../hooks/useScroll.ts';
import { selectProfile } from '../../store/user/userSelectors.ts';
import { useState } from 'react';
import { HeaderProps } from './Header.props.ts';
import { useObserveElementWidth } from '../../hooks/useObserveElementWidth.ts';

export const Header = ({ className }: HeaderProps) => {
  const { elementWidth, refElement } = useObserveElementWidth<HTMLDivElement>();
  const [isSearchActive, setIsSearchActive] = useState(false);

  const { scroll } = useScroll();
  const profile = useSelector(selectProfile);

  const onSearchIconClick = (value: boolean) => {
    setIsSearchActive(value);
  };

  const onSearch = (value: string) => {
    console.log('value -', value);
  };

  const bgWidthCondition = () => {
    if (isSearchActive) {
      if (scroll > 0) {
        return '100%';
      } else {
        return '200px';
      }
    } else {
      return elementWidth;
    }
  };

  return (
    <header
      className={cn(className, styles['header'], {
        [styles['scroll']]: scroll > 0,
      })}
    >
      <div className={cn(styles['block'], styles['links'])}>
        <Link to={'/popular/films'}>Популярные фильмы</Link>
        <Link to={'/popular/series'}>Популярные сериалы</Link>
        <Link to={'/popular/documentaries'}>Лучшие документальные фильмы</Link>
      </div>

      <div ref={refElement} className={cn(styles['block'], styles['controls'])}>
        <Search
          onSearch={onSearch}
          isSearchActive={isSearchActive}
          onSearchIconClick={onSearchIconClick}
        />

        <ButtonLink
          to={'/notifications'}
          className={styles['notifications']}
          activeState={false}
        >
          <img src={BellIcon} alt="Уведомления" />
        </ButtonLink>

        <NavLink to={'/profile'} className={styles['user']}>
          <img
            className={styles['avatar']}
            src={profile?.photoUrl || Avatar}
            alt="Аватар пользователя"
          />
          <span>{profile?.name ?? ''}</span>
        </NavLink>
      </div>

      <div
        style={{
          width: bgWidthCondition(),
        }}
        className={styles['background']}
      ></div>
    </header>
  );
};
