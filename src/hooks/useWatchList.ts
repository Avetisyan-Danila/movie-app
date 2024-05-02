import { useState, useEffect, useMemo, useCallback } from 'react';
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
  const [isLoading, setIsLoading] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const watchListRef = useMemo(
    () => doc(db, `users/${uid}/watchList`, id.toString()),
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

  const getWatchListData = useCallback(async () => {
    setIsLoading(true);

    try {
      const snapshot = await getDoc(watchListRef);

      if (snapshot.exists()) {
        setIsAdded(true);
      }
    } catch {
      addNotification(
        `Ошибка при попытке получить информацию о наличии фильма в списке "Смотреть позже" - (${name})`,
        'danger',
      );
    } finally {
      setIsLoading(false);
    }
  }, [name, watchListRef]);

  useEffect(() => {
    if (!uid) return;

    getWatchListData();
  }, [watchListRef, id, name, uid, getWatchListData]);

  const addToWatchList = useCallback(
    async (filmData: ShortFilmInfo) => {
      checkAuth();

      setIsLoading(true);

      try {
        await setDoc(watchListRef, {
          ...filmData,
          createdAt: Timestamp.fromDate(new Date()),
        });

        setIsAdded(true);
      } catch {
        addNotification(
          `Ошибка при добавлении фильма в список "Смотреть позже" - (${name})`,
          'danger',
        );
      } finally {
        setIsLoading(false);
      }
    },
    [checkAuth, name, watchListRef],
  );

  const deleteFromWatchList = useCallback(async () => {
    checkAuth();

    setIsLoading(true);

    try {
      await deleteDoc(watchListRef);
      setIsAdded(false);
    } catch {
      addNotification(
        `Ошибка при удалении фильма из списка "Смотреть позже" - (${name})`,
        'danger',
      );
    } finally {
      setIsLoading(false);
    }
  }, [checkAuth, name, watchListRef]);

  return { isLoading, isAdded, addToWatchList, deleteFromWatchList };
};
