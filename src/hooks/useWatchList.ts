import { useState, useEffect } from 'react';
import { db } from '../firebase.ts';
import { doc, getDoc, setDoc, deleteDoc, Timestamp } from 'firebase/firestore';
import { addNotification } from '../helpers/notification.ts';
import { ShortFilmInfo } from '../types/shortFilmInfo.ts';

export const useWatchList = (id: number | string, name: string) => {
  const [isAdded, setIsAdded] = useState(false);
  const filmRef = doc(db, `watchList/${id}`);

  useEffect(() => {
    getDoc(filmRef)
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
  }, [id, name]);

  const addToWatchList = (filmData: ShortFilmInfo) => {
    setDoc(filmRef, {
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
    deleteDoc(filmRef)
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
