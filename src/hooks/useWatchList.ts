import { useState, useEffect } from 'react';
import { db } from '../firebase.ts';
import { doc, getDoc, setDoc, deleteDoc, Timestamp } from 'firebase/firestore';
import { addNotification } from '../helpers/notification.ts';
import { ShortFilmInfo } from '../types/shortFilmInfo.ts';
import { useAppDispatch } from '../store/store.ts';
import { setJwt } from '../store/user/userSlice.ts';

export const useWatchList = (
  id: number | string,
  name: string,
  uid: string | undefined,
) => {
  const [isAdded, setIsAdded] = useState(false);
  const watchListRef = doc(db, `users/${uid}/watchList`, id.toString());

  const dispatch = useAppDispatch();

  const checkAuth = () => {
    if (!uid) {
      addNotification('Пользователь не авторизован', 'warning');
      dispatch(setJwt(null));
      return;
    }
  };

  useEffect(() => {
    if (!uid) return;

    getDoc(watchListRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setIsAdded(true);
        }
      })
      .catch((error) => {
        console.error(error);
        addNotification(
          `Ошибка при попытке получить информацию о наличии фильма в списке "Смотреть позже" - (${name})`,
          'danger',
        );
      });
  }, [watchListRef, id, name, uid]);

  const addToWatchList = (filmData: ShortFilmInfo) => {
    checkAuth();

    setDoc(watchListRef, {
      ...filmData,
      createdAt: Timestamp.fromDate(new Date()),
    })
      .then(() => setIsAdded(true))
      .catch((error) => {
        console.error(error);
        addNotification(
          `Ошибка при добавлении фильма в список "Смотреть позже" - (${name})`,
          'danger',
        );
      });
  };

  const deleteFromWatchList = () => {
    checkAuth();

    deleteDoc(watchListRef)
      .then(() => setIsAdded(false))
      .catch((error) => {
        console.error(error);
        addNotification(
          `Ошибка при удалении фильма из списка "Смотреть позже" - (${name})`,
          'danger',
        );
      });
  };

  return { isAdded, addToWatchList, deleteFromWatchList };
};
