import styles from './Header.module.css';
import cn from 'classnames';
import BellIcon from '../../assets/icons/bell.svg';
import Avatar from '../../assets/avatar.png';

import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Search } from '../Search/Search.tsx';
import { ButtonLink } from '../ButtonLink/ButtonLink.tsx';
import { Link } from '../Link/Link.tsx';
import { useScroll } from '../../hooks/useScroll.ts';
import { selectProfile } from '../../store/user/userSelectors.ts';
import { useEffect, useRef, useState } from 'react';
import { HeaderProps } from './Header.props.ts';

export const Header = ({ className }: HeaderProps) => {
  const [bgWidth, setBgWidth] = useState<number | undefined>();

  const scroll = useScroll();
  const profile = useSelector(selectProfile);
  const controlsBlockRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setBgWidth(controlsBlockRef.current?.getBoundingClientRect().width);
    }, 100);
  }, [profile?.name]);

  return (
    <header
      className={cn(className, styles['header'], {
        [styles['scroll']]: scroll > 0,
      })}
    >
      <div className={cn(styles['block'], styles['links'])}>
        <Link to={'/films'}>Фильмы</Link>
        <Link to={'/series'}>Сериалы</Link>
        <Link to={'/documentaries'}>Документальные фильмы</Link>
      </div>

      <div
        ref={controlsBlockRef}
        className={cn(styles['block'], styles['controls'])}
      >
        <Search />

        <ButtonLink to={'/notifications'} activeState={false}>
          <img src={BellIcon} alt="Уведомления" />
        </ButtonLink>

        <NavLink to={'/profile'} className={styles['user']}>
          <img
            className={styles['avatar']}
            src={Avatar}
            alt="Аватар пользователя"
          />
          <span>{profile?.name ?? ''}</span>
        </NavLink>
      </div>

      <div
        style={{
          width: bgWidth,
          padding: bgWidth ? '10px' : 0,
        }}
        className={styles['background']}
      ></div>
    </header>
  );
};
