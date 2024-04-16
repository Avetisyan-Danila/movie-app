import { logout } from '../../store/user/userThunks.ts';
import { useAppDispatch } from '../../store/store.ts';

import styles from './Menu.module.css';
import LogoIcon from '../../assets/logo-icon.svg';
import LogoText from '../../assets/logo-text.svg';
import FilmIcon from '../../assets/icons/film.svg';
import HeartIcon from '../../assets/icons/heart.svg';
import ClockIcon from '../../assets/icons/clock.svg';
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
      <div className={styles['logo']}>
        <img src={LogoIcon} alt="Логотип компании" />
        <img src={LogoText} alt="Название компании" />
      </div>

      <ButtonLink to={'/'} label="Главная">
        <img src={FilmIcon} alt="Главная" />
      </ButtonLink>

      <ButtonLink to={'/favorites'} label="Любимые">
        <img src={HeartIcon} alt="Любимые" />
      </ButtonLink>

      <ButtonLink to={'/favorites'} label="Смотреть позже">
        <img src={ClockIcon} alt="Смотреть позже" />
      </ButtonLink>

      <ButtonLink to={'/trendingUp'} label="Популярные">
        <img src={TrendingUpIcon} alt="Популярные" />
      </ButtonLink>

      <ButtonLink to={'/comingSoon'} label="Скоро выйдет">
        <img src={CalendarIcon} alt="Скоро выйдет" />
      </ButtonLink>

      <ButtonLink to={'/settings'} label="Настройки">
        <img src={SlidersIcon} alt="Настройки" />
      </ButtonLink>

      <ButtonLink to={'/auth'} onClick={onLogout} label="Выйти">
        <img src={LogoutIcon} alt="Выйти" />
      </ButtonLink>
    </div>
  );
};
