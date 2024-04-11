import { logout } from '../../store/user/userThunks.ts';
import { useAppDispatch } from '../../store/store.ts';

import styles from './Menu.module.css';
import FilmIcon from '../../assets/icons/film.svg';
import HeartIcon from '../../assets/icons/heart.svg';
import TrendingUpIcon from '../../assets/icons/trending-up.svg';
import CalendarIcon from '../../assets/icons/calendar.svg';
import SlidersIcon from '../../assets/icons/sliders.svg';
import LogoutIcon from '../../assets/icons/log-out.svg';
import { ButtonLink } from '../ButtonLink/ButtonLink.tsx';

export const Menu = () => {
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles['menu']}>
      <ButtonLink to={'/'}>
        <img src={FilmIcon} alt="Главная" />
      </ButtonLink>

      <ButtonLink to={'/favorites'}>
        <img src={HeartIcon} alt="Любимые" />
      </ButtonLink>

      <ButtonLink to={'/trendingUp'}>
        <img src={TrendingUpIcon} alt="В тренде" />
      </ButtonLink>

      <ButtonLink to={'/comingSoon'}>
        <img src={CalendarIcon} alt="Скоро выйдет" />
      </ButtonLink>

      <ButtonLink to={'/settings'}>
        <img src={SlidersIcon} alt="Настройки" />
      </ButtonLink>

      <ButtonLink to={'/auth'} onClick={onLogout}>
        <img src={LogoutIcon} alt="Выйти" />
      </ButtonLink>
    </div>
  );
};
