import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import { Menu } from '../../components/Menu/Menu.tsx';
import { Header } from '../../components/Header/Header.tsx';
import { useState } from 'react';

export const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles['layout']}>
      <div className={styles['sidebar']}>
        <Menu
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}
        />
      </div>

      <div className={styles['content']}>
        <Outlet />
      </div>

      <Header isMenuOpen={isMenuOpen} className={styles['header-layout']} />
    </div>
  );
};
