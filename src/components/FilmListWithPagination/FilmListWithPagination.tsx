import styles from './FilmListWithPagination.module.css';
import { FilmCard } from '../FilmCard/FilmCard.tsx';
import { Heading } from '../Heading/Heading.tsx';
import { Loader } from '../Loader/Loader.tsx';
import { Button } from '../Button/Button.tsx';
import { FilmListWithPaginationProps } from './FilmListWithPagination.props.ts';
import { useFirestorePaginatedData } from '../../hooks/useFirestorePaginatedData.ts';
import { ShortFilmInfo } from '../../types/shortFilmInfo.ts';
import { useScroll } from '../../hooks/useScroll.ts';
import { useEffect, useRef, useState } from 'react';
import { PER_PAGE } from '../../helpers/constants.ts';
import cn from 'classnames';

export const FilmListWithPagination = ({
  collectionName,
  orderBy,
  perPage = PER_PAGE,
  emptyMessage,
}: FilmListWithPaginationProps) => {
  const { data, fetchData, isLoading, isLoadedAll, lastVisible } =
    useFirestorePaginatedData<ShortFilmInfo>(collectionName, orderBy, perPage);

  const { triggerHeight } = useScroll();

  const [loadAllActive, setLoadAllActive] = useState(false);

  const initialFetchDone = useRef(false);

  useEffect(() => {
    if (!initialFetchDone.current) {
      fetchData();
      initialFetchDone.current = true;
    }
  }, []);

  useEffect(() => {
    if (
      loadAllActive &&
      triggerHeight >= document.body.scrollHeight - 1000 &&
      !isLoadedAll &&
      !isLoading &&
      lastVisible
    ) {
      fetchData();
    }
  }, [loadAllActive, triggerHeight, isLoadedAll, isLoading, lastVisible]);

  const handleLoadAll = () => {
    fetchData();
    setLoadAllActive(true);
  };

  return (
    <div className={styles['wrapper']}>
      {data.length > 0 && (
        <div className={styles['list']}>
          {data.map((film, index) => (
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
      )}

      {!isLoading && data.length === 0 && (
        <Heading
          className={styles['empty']}
          appearance="small"
          withMargin={false}
        >
          {emptyMessage}
        </Heading>
      )}

      {isLoading && (
        <Loader
          className={cn({
            [styles['first-load']]: data.length === 0,
          })}
        />
      )}

      {data.length > 0 && !isLoadedAll && (
        <Button
          style={{
            transition: loadAllActive ? 'none' : '0.2s ease',
            opacity: loadAllActive ? '0' : '1',
          }}
          onClick={handleLoadAll}
          disabled={loadAllActive}
        >
          Загрузить все
        </Button>
      )}
    </div>
  );
};
