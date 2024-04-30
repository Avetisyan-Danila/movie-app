import { useState, useEffect } from 'react';
import { db } from '../firebase.ts';
import { doc, getDoc, setDoc, deleteDoc, Timestamp } from 'firebase/firestore';
import { addNotification } from '../helpers/notification.ts';
import { ShortFilmInfo } from '../types/shortFilmInfo.ts';
import { setJwt } from '../store/user/userSlice.ts';
import { useAppDispatch } from '../store/store.ts';

export const useFavorites = (
  id: number | string,
  name: string,
  uid: string | undefined,
) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const filmRef = doc(db, `users/${uid}/favorites`, id.toString());

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

    getDoc(filmRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setIsFavorite(true);
        }
      })
      .catch((error) => {
        console.error(error);
        addNotification(
          `Ошибка при попытке получить информацию об избранном фильме - (${name})`,
          'danger',
        );
      });
  }, [filmRef, id, name, uid]);

  const addToFavorite = (filmData: ShortFilmInfo) => {
    checkAuth();

    setDoc(filmRef, {
      ...filmData,
      createdAt: Timestamp.fromDate(new Date()),
    })
      .then(() => setIsFavorite(true))
      .catch((error) => {
        console.error(error);
        addNotification(
          `Ошибка при добавлении фильма в избранное - (${name})`,
          'danger',
        );
      });
  };

  const deleteFromFavorite = () => {
    checkAuth();

    deleteDoc(filmRef)
      .then(() => setIsFavorite(false))
      .catch((error) => {
        console.error(error);
        addNotification(
          `Ошибка при удалении фильма из избранного - (${name})`,
          'danger',
        );
      });
  };

  return { isFavorite, addToFavorite, deleteFromFavorite };
};
