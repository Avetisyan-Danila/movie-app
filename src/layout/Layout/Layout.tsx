import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import { Menu } from '../../components/Menu/Menu.tsx';
import { Header } from '../../components/Header/Header.tsx';

export const Layout = () => {
  return (
    <div className={styles['layout']}>
      <Header />

      <div className={styles['sidebar']}>
        <Menu />
      </div>

      <div className={styles['content']}>
        <Outlet />
      </div>
    </div>
  );
};
