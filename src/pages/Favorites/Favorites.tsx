import { Heading } from '../../components/Heading/Heading.tsx';
import { Pagination } from '../../components/Pagination/Pagination.tsx';
import { useEffect, useState } from 'react';
import { addNotification } from '../../helpers/notification.ts';
import {
  collection,
  getDocs,
  limit,
  query,
  getCountFromServer,
  startAfter,
  QueryDocumentSnapshot,
} from 'firebase/firestore';
import { db } from '../../firebase.ts';
import { ShortFilmInfo } from '../../types/shortFilmInfo.ts';
import { FilmCard } from '../../components/FilmCard/FilmCard.tsx';
import styles from './Favorites.module.css';

export const Favorites = () => {
  const [list, setList] = useState<ShortFilmInfo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageOffset, setPageOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [lastVisible, setLastVisible] = useState<QueryDocumentSnapshot>();
  const [apiError, setApiError] = useState('');

  const favoritesCollection = collection(db, 'favorites');

  useEffect(() => {
    const fetchList = async () => {
      setIsLoading(true);

      const customerOrdersQuery = lastVisible
        ? query(favoritesCollection, limit(4), startAfter(lastVisible))
        : query(favoritesCollection, limit(4));

      const countData = await getCountFromServer(favoritesCollection);
      const count = Math.ceil(countData.data().count / 4);

      await getDocs(customerOrdersQuery)
        .then((querySnapshot) => {
          const data = querySnapshot.docs.map((e) =>
            e.data(),
          ) as ShortFilmInfo[];

          setList(data);
          setPageCount(count);
          setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
        })
        .catch(() => {
          setApiError('Не удалось загрузить список любимых фильмов');
          setList([]);
          setPageCount(0);
        })
        .finally(() => setIsLoading(false));
    };

    fetchList();
  }, [pageOffset]);

  useEffect(() => {
    if (apiError) {
      addNotification(apiError, 'danger');
    }
  }, [apiError]);

  const handlePageChange = (event: { selected: number }) => {
    setPageOffset(event.selected);
  };

  return (
    <>
      <Heading>Любимые фильмы</Heading>

      {!isLoading && list.length === 0 && (
        <Heading>Список любимых фильмов пуст</Heading>
      )}

      {list && pageCount > 0 && (
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

          <Pagination
            forcePage={pageOffset}
            pageCount={pageCount}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </>
  );
};
