import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import { store } from './store/store.ts';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage.tsx';
import { RequireAuth } from './helpers/RequireAuth.tsx';
import { AuthLayout } from './layout/Auth/AuthLayout.tsx';
import { Layout } from './layout/Layout/Layout.tsx';
import { Login } from './pages/Login/Login.tsx';
import { Register } from './pages/Register/Register.tsx';
import { Error as ErrorPage } from './pages/Error/Error.tsx';
import { Provider } from 'react-redux';
import { Favorites } from './pages/Favorites/Favorites.tsx';
import { WatchList } from './pages/WatchList/WatchList.tsx';
import { Popular } from './pages/Popular/Popular.tsx';
import { Settings } from './pages/Settings/Settings.tsx';
import { Notifications } from './pages/Notifications/Notifications.tsx';
import { FilmDetailed } from './pages/FilmDetailed/FilmDetailed.tsx';
import { Profile } from './pages/Profile/Profile.tsx';
import { ResetPassword } from './pages/ResetPassword/ResetPassword.tsx';
import { SearchPage } from './pages/SearchPage/SearchPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
      {
        path: '/watch-list',
        element: <WatchList />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/notifications',
        element: <Notifications />,
      },
      {
        path: 'film/:id',
        element: <FilmDetailed />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/popular/:type',
        element: <Popular />,
      },
      {
        path: '/search/:query',
        element: <SearchPage />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'reset-password',
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactNotifications />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
