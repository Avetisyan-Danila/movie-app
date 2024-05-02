import { useState, useEffect, useCallback, useMemo } from 'react';
import { db } from '../firebase.ts';
import { doc, getDoc, setDoc, deleteDoc, Timestamp } from 'firebase/firestore';
import { addNotification } from '../helpers/notification.ts';
import { ShortFilmInfo } from '../types/shortFilmInfo.ts';
import { useAppDispatch } from '../store/store.ts';
import { setJwt } from '../store/user/userSlice.ts';

export const useList = (
  id: number | string,
  name: string,
  uid: string | undefined,
  listType: 'favorites' | 'watchList',
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isInList, setIsInList] = useState(false);
  const listRef = useMemo(
    () => doc(db, `users/${uid}/${listType}`, id.toString()),
    [id, uid, listType],
  );

  const dispatch = useAppDispatch();

  const checkAuth = useCallback(() => {
    if (!uid) {
      addNotification('Пользователь не авторизован', 'warning');
      dispatch(setJwt(null));
      return false;
    }
    return true;
  }, [dispatch, uid]);

  const getListData = useCallback(async () => {
    setIsLoading(true);

    try {
      const snapshot = await getDoc(listRef);

      if (snapshot.exists()) {
        setIsInList(true);
      }
    } catch {
      addNotification(
        `Ошибка при попытке получить информацию о наличии фильма в списке "${listType}" - (${name})`,
        'danger',
      );
    } finally {
      setIsLoading(false);
    }
  }, [listRef, name, listType]);

  useEffect(() => {
    if (!uid) return;

    getListData();
  }, [listRef, getListData, id, name, uid]);

  const addToList = useCallback(
    async (filmData: ShortFilmInfo) => {
      if (!checkAuth()) return;

      setIsLoading(true);

      try {
        await setDoc(listRef, {
          ...filmData,
          createdAt: Timestamp.fromDate(new Date()),
        });

        setIsInList(true);
      } catch {
        addNotification(
          `Ошибка при добавлении фильма в список "${listType}" - (${name})`,
          'danger',
        );
      } finally {
        setIsLoading(false);
      }
    },
    [checkAuth, listRef, name, listType],
  );

  const deleteFromList = useCallback(async () => {
    if (!checkAuth()) return;

    setIsLoading(true);

    try {
      await deleteDoc(listRef);
      setIsInList(false);
    } catch {
      addNotification(
        `Ошибка при удалении фильма из списка "${listType}" - (${name})`,
        'danger',
      );
    } finally {
      setIsLoading(false);
    }
  }, [checkAuth, listRef, name, listType]);

  return { isLoading, isInList, addToList, deleteFromList };
};
