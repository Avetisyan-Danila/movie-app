import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  deleteUser,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from 'firebase/auth';
import { FirebaseError } from '@firebase/util';
import { auth, db, storage } from '../../firebase.ts';
import { getUserData } from '../../helpers/getUserData.ts';
import AuthErrorMap from '../../helpers/AuthErrorMap.ts';
import { reauthenticateCurrentUser } from '../../helpers/reauthenticateCurrentUser.ts';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';

export const login = createAsyncThunk(
  'user/login',
  async (params: { email: string; password: string }) => {
    try {
      await signInWithEmailAndPassword(auth, params.email, params.password);
      return getUserData();
    } catch (error) {
      if (error instanceof FirebaseError) {
        throw new Error(AuthErrorMap[error.code]);
      } else {
        throw new Error(AuthErrorMap['login-unknown-error']);
      }
    }
  },
);

export const register = createAsyncThunk(
  'user/register',
  async (params: { userName: string; email: string; password: string }) => {
    try {
      await createUserWithEmailAndPassword(auth, params.email, params.password);

      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: params.userName,
        });

        await sendEmailVerification(auth.currentUser);
      }

      return getUserData();
    } catch (error) {
      if (error instanceof FirebaseError) {
        throw new Error(AuthErrorMap[error.code]);
      } else {
        throw new Error(AuthErrorMap['register-unknown-error']);
      }
    }
  },
);

export const logout = createAsyncThunk('user/logout', async () => {
  try {
    await signOut(auth);
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw new Error(AuthErrorMap[error.code]);
    } else {
      throw new Error(AuthErrorMap['logout-unknown-error']);
    }
  }
});

export const updateUserName = createAsyncThunk(
  'user/updateUserName',
  async (params: { name: string; password: string }) => {
    try {
      await reauthenticateCurrentUser(params.password);

      await updateProfile(auth.currentUser!, {
        displayName: params.name,
      });

      return getUserData();
    } catch (error) {
      if (error instanceof FirebaseError) {
        throw new Error(AuthErrorMap[error.code]);
      } else {
        throw new Error(AuthErrorMap['updateName-unknown-error']);
      }
    }
  },
);

export const updateProfileAvatar = createAsyncThunk(
  'user/updateProfileAvatar',
  async (params: { file: File; password: string; uid: string }) => {
    try {
      await reauthenticateCurrentUser(params.password);

      // Создание ссылки на файл в Firebase Storage
      const storageRef = ref(storage, `avatars/${params.uid}/avatar.jpg`);

      // Загрузка файла
      await uploadBytes(storageRef, params.file);

      // Получение URL загруженного файла
      const avatarURL = await getDownloadURL(storageRef);

      // Обновление профиля пользователя в Firestore
      const userDocRef = doc(db, 'users', params.uid);
      await setDoc(userDocRef, {
        avatarURL: avatarURL,
      });

      await updateProfile(auth.currentUser!, {
        photoURL: avatarURL,
      });

      return getUserData();
    } catch (error) {
      if (error instanceof FirebaseError) {
        throw new Error(AuthErrorMap[error.code]);
      } else {
        throw new Error(AuthErrorMap['updateAvatar-unknown-error']);
      }
    }
  },
);

export const updateUserEmail = createAsyncThunk(
  'user/updateUserEmail',
  async (params: { newEmail: string; password: string }) => {
    try {
      await reauthenticateCurrentUser(params.password);

      await updateEmail(auth.currentUser!, params.newEmail);

      await sendEmailVerification(auth.currentUser!);

      return getUserData();
    } catch (error) {
      if (error instanceof FirebaseError) {
        throw new Error(AuthErrorMap[error.code]);
      } else {
        throw new Error(AuthErrorMap['updateEmail-unknown-error']);
      }
    }
  },
);

export const updateUserPassword = createAsyncThunk(
  'user/updateUserPassword',
  async (params: { newPassword: string; oldPassword: string }) => {
    try {
      await reauthenticateCurrentUser(params.oldPassword);

      await updatePassword(auth.currentUser!, params.newPassword);

      return getUserData();
    } catch (error) {
      if (error instanceof FirebaseError) {
        throw new Error(AuthErrorMap[error.code]);
      } else {
        throw new Error(AuthErrorMap['updatePassword-unknown-error']);
      }
    }
  },
);

export const deleteAccount = createAsyncThunk(
  'user/deleteAccount',
  async (params: { password: string }) => {
    try {
      await reauthenticateCurrentUser(params.password);

      await deleteUser(auth.currentUser!);
    } catch (error) {
      if (error instanceof FirebaseError) {
        throw new Error(AuthErrorMap[error.code]);
      } else {
        throw new Error(AuthErrorMap['deleteAccount-unknown-error']);
      }
    }
  },
);
