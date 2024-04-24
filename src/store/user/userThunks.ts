import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  deleteUser,
  EmailAuthProvider,
  reauthenticateWithCredential,
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
      .catch(() => {
        throw new Error('Произошла ошибка при регистрации. Попробуйте позже.');
      });
  },
);

export const logout = createAsyncThunk('user/logout', async () => {
  await signOut(auth);
});

export const updateUserEmail = createAsyncThunk(
  'user/updateUserEmail',
  async (params: { newEmail: string; password: string }) => {
    if (auth.currentUser && auth.currentUser.email) {
      const credential = EmailAuthProvider.credential(
        auth.currentUser.email,
        params.password!,
      );

      await reauthenticateWithCredential(auth.currentUser, credential)
        .then(async () => {
          if (auth.currentUser) {
            await updateEmail(auth.currentUser, params.newEmail).then(
              async () => {
                if (auth.currentUser) {
                  await sendEmailVerification(auth.currentUser).then(() => {
                    addNotification(
                      'Вам отправлено письмо для подтверждения эл. почты',
                      'info',
                      15000,
                    );
                  });
                }
              },
            );
          }
        })
        .catch((error) => {
          if (error.code === 'auth/wrong-password') {
            throw new Error('Неверный пароль');
          } else {
            throw new Error(
              'Произошла ошибка при смене Email. Попробуйте позже.',
            );
          }
        });
    }

    return await getUserData();
  },
);

export const updateUserPassword = createAsyncThunk(
  'user/updateUserPassword',
  async (params: { newPassword: string; oldPassword: string }) => {
    if (auth.currentUser && auth.currentUser.email) {
      const credential = EmailAuthProvider.credential(
        auth.currentUser.email,
        params.oldPassword!,
      );

      await reauthenticateWithCredential(auth.currentUser, credential)
        .then(async () => {
          if (auth.currentUser) {
            await updatePassword(auth.currentUser, params.newPassword);
          }
        })
        .catch((error) => {
          if (error.code === 'auth/wrong-password') {
            throw new Error('Неверный пароль');
          } else {
            throw new Error(
              'Произошла ошибка при смене пароля. Попробуйте позже.',
            );
          }
        });
    }

    return await getUserData();
  },
);

export const deleteAccount = createAsyncThunk(
  'user/deleteAccount',
  async (params: { password: string }) => {
    if (auth.currentUser && auth.currentUser.email) {
      const credential = EmailAuthProvider.credential(
        auth.currentUser.email,
        params.password!,
      );

      await reauthenticateWithCredential(auth.currentUser, credential)
        .then(async () => {
          if (auth.currentUser) {
            await deleteUser(auth.currentUser);
          }
        })
        .catch((error) => {
          if (error.code === 'auth/wrong-password') {
            throw new Error('Неверный пароль');
          } else {
            throw new Error(
              'Произошла ошибка при удалении аккаунта. Попробуйте позже.',
            );
          }
        });
    }
  },
);
