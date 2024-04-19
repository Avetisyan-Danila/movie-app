import { Heading } from '../../components/Heading/Heading.tsx';
import { useCallback, useEffect, useState } from 'react';
import { addNotification } from '../../helpers/notification.ts';
import {
  QueryDocumentSnapshot,
  collection,
  getDocs,
  limit,
  query,
  startAfter,
} from 'firebase/firestore';
import { db } from '../../firebase.ts';
import { ShortFilmInfo } from '../../types/shortFilmInfo.ts';
import { FilmCard } from '../../components/FilmCard/FilmCard.tsx';
import styles from './Favorites.module.css';
import { useScroll } from '../../hooks/useScroll.ts';

export const Favorites = () => {
  const [list, setList] = useState<ShortFilmInfo[]>([]);
  const [lastVisible, setLastVisible] = useState<QueryDocumentSnapshot>();
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  const { triggerHeight } = useScroll();
  const [isLoadedAll, setIsLoadedAll] = useState(false);

  const fetchList = useCallback(async () => {
    if (isLoading) return;

    console.log(lastVisible);

    setIsLoading(true);

    const favoritesCollection = collection(db, 'favorites');
    const customerOrdersQuery = lastVisible
      ? query(favoritesCollection, limit(5), startAfter(lastVisible))
      : query(favoritesCollection, limit(10));

    await getDocs(customerOrdersQuery)
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          setIsLoadedAll(true);
          return;
        }

        const data = querySnapshot.docs.map((e) => e.data()) as ShortFilmInfo[];

        setList((prevList) => [...prevList, ...data]);
        setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      })
      .catch(() => {
        setApiError('Не удалось загрузить список любимых фильмов');
        setList([]);
        setLastVisible(undefined);
      })
      .finally(() => setIsLoading(false));
  }, [isLoading, lastVisible]);

  useEffect(() => {
    fetchList();
  }, []);

  useEffect(() => {
    if (
      triggerHeight >= document.body.scrollHeight - 400 &&
      !isLoadedAll &&
      !isLoading &&
      lastVisible
    ) {
      fetchList();
    }
  }, [triggerHeight, isLoadedAll, isLoading, lastVisible]);

  useEffect(() => {
    if (apiError) {
      addNotification(apiError, 'danger');
    }
  }, [apiError]);

  return (
    <>
      <Heading>Любимые фильмы</Heading>

      {!isLoading && list.length === 0 && (
        <Heading>Список любимых фильмов пуст</Heading>
      )}

      {list && (
        <div className={styles['wrapper']}>
          <div className={styles['list']}>
            {list.map((film, index) => (
              <FilmCard
                id={film.id}
                name={film.name}
                year={film.year}
                genres={film.genres}
                poster={film.poster}
                key={`${film.id + index}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
