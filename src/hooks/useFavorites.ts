import { useState, useEffect, useCallback, useMemo } from 'react';
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
  const [isLoading, setIsLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const filmRef = useMemo(
    () => doc(db, `users/${uid}/favorites`, id.toString()),
    [id, uid],
  );

  const dispatch = useAppDispatch();

  const checkAuth = useCallback(() => {
    if (!uid) {
      addNotification('Пользователь не авторизован', 'warning');
      dispatch(setJwt(null));
      return;
    }
  }, [dispatch, uid]);

  const getFavoriteData = useCallback(async () => {
    setIsLoading(true);

    try {
      const snapshot = await getDoc(filmRef);

      if (snapshot.exists()) {
        setIsFavorite(true);
      }
    } catch {
      addNotification(
        `Ошибка при попытке получить информацию об избранном фильме - (${name})`,
        'danger',
      );
    } finally {
      setIsLoading(false);
    }
  }, [filmRef, name]);

  useEffect(() => {
    if (!uid) return;

    getFavoriteData();
  }, [filmRef, getFavoriteData, id, name, uid]);

  const addToFavorite = useCallback(
    async (filmData: ShortFilmInfo) => {
      checkAuth();

      setIsLoading(true);

      try {
        await setDoc(filmRef, {
          ...filmData,
          createdAt: Timestamp.fromDate(new Date()),
        });

        setIsFavorite(true);
      } catch {
        addNotification(
          `Ошибка при добавлении фильма в избранное - (${name})`,
          'danger',
        );
      } finally {
        setIsLoading(false);
      }
    },
    [checkAuth, filmRef, name],
  );

  const deleteFromFavorite = useCallback(async () => {
    checkAuth();

    setIsLoading(true);

    try {
      await deleteDoc(filmRef);
      setIsFavorite(false);
    } catch {
      addNotification(
        `Ошибка при удалении фильма из избранного - (${name})`,
        'danger',
      );
    } finally {
      setIsLoading(false);
    }
  }, [checkAuth, filmRef, name]);

  return { isLoading, isFavorite, addToFavorite, deleteFromFavorite };
};
