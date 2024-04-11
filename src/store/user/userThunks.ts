import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../firebase.ts';
import { getUserData } from '../../helpers/getUserData.ts';

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
        await updateProfile(auth.currentUser!, {
          displayName: params.userName,
        });

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
