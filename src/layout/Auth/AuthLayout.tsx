import { Outlet, useLocation } from 'react-router-dom';
import styles from './AuthLayout.module.css';
import { Welcome } from './Welcome.tsx';

export const AuthLayout = () => {
  const location = useLocation();

  return (
    <div className={styles['layout']}>
      {location.pathname === '/auth' && <Welcome />}

      <div className={styles['content']}>
        <Outlet />
      </div>
    </div>
  );
};
