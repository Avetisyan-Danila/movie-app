import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../firebase.ts';
import { getUserData } from '../../helpers/getUserData.ts';
import { addNotification } from '../../helpers/notification.ts';

export const login = createAsyncThunk(
  'user/login',
  async (params: { email: string; password: string }) => {
    return await signInWithEmailAndPassword(auth, params.email, params.password)
      .then(async () => {
        return await getUserData();
      })
      .catch(() => {
        throw new Error('Неверный логин или пароль');
      });
  },
);

export const register = createAsyncThunk(
  'user/register',
  async (params: { userName: string; email: string; password: string }) => {
    return await createUserWithEmailAndPassword(
      auth,
      params.email,
      params.password,
    )
      .then(async () => {
        if (auth.currentUser) {
          await updateProfile(auth.currentUser, {
            displayName: params.userName,
          });

          await sendEmailVerification(auth.currentUser).then(() => {
            addNotification(
              'Вам отправлено письмо для подтверждения эл. почты',
              'info',
              15000,
            );
          });
        }

        return await getUserData();
      })
      .catch((error) => {
        console.log(error);
        throw new Error('Ошибка при регистрации');
      });
  },
);

export const logout = createAsyncThunk('user/logout', async () => {
  await signOut(auth);
});

export const updateUserEmail = createAsyncThunk(
  'user/updateUserEmail',
  async (newEmail: string) => {
    if (auth.currentUser) {
      await updateEmail(auth.currentUser, newEmail)
        .then(async () => {
          addNotification('Email успешно изменен', 'success');

          if (auth.currentUser) {
            await sendEmailVerification(auth.currentUser).then(() => {
              addNotification(
                'Вам отправлено письмо для подтверждения эл. почты',
                'info',
                15000,
              );
            });
          }
        })
        .catch(() => {
          throw new Error('Произошла ошибка при смене Email');
        });
    }

    return await getUserData();
  },
);

export const updateUserPassword = createAsyncThunk(
  'user/updateUserPassword',
  async (newPassword: string) => {
    if (auth.currentUser) {
      await updatePassword(auth.currentUser, newPassword)
        .then(async () => {
          addNotification('Пароль успешно изменен', 'success');
        })
        .catch(() => {
          throw new Error('Произошла ошибка при смене пароля');
        });
    }

    return await getUserData();
  },
);
