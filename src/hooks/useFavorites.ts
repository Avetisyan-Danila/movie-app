import { useState, useEffect } from 'react';
import { db } from '../firebase.ts';
import { doc, getDoc, setDoc, deleteDoc, Timestamp } from 'firebase/firestore';
import { addNotification } from '../helpers/notification.ts';
import { ShortFilmInfo } from '../types/shortFilmInfo.ts';

export const useFavorites = (id: number | string, name: string) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const filmRef = doc(db, `favorites/${id}`);

  useEffect(() => {
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
  }, [id, name]);

  const addToFavorite = (filmData: ShortFilmInfo) => {
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
