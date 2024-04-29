import styles from './FilmListWithPagination.module.css';
import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { FilmCard } from '../FilmCard/FilmCard.tsx';
import { Heading } from '../Heading/Heading.tsx';
import { Loader } from '../Loader/Loader.tsx';
import { Button } from '../Button/Button.tsx';
import { useScroll } from '../../hooks/useScroll.ts';
import { FilmListWithPaginationProps } from './FilmListWithPagination.props.ts';

export const FilmListWithPagination = ({
  uid,
  fetchDataFunction,
  data,
  isLoading,
  isLoadedAll,
  emptyMessage,
}: FilmListWithPaginationProps) => {
  const [loadAllActive, setLoadAllActive] = useState(false);
  const initialFetchDone = useRef(false);
  const { triggerHeight } = useScroll();

  useEffect(() => {
    if (!initialFetchDone.current && uid) {
      fetchDataFunction();
      initialFetchDone.current = true;
    }
  }, [fetchDataFunction, uid]);

  useEffect(() => {
    if (
      uid &&
      loadAllActive &&
      triggerHeight >= document.body.scrollHeight - 1000 &&
      !isLoadedAll &&
      !isLoading
    ) {
      fetchDataFunction();
    }
  }, [
    uid,
    loadAllActive,
    triggerHeight,
    isLoadedAll,
    isLoading,
    fetchDataFunction,
  ]);

  const handleLoadAll = () => {
    fetchDataFunction();
    setLoadAllActive(true);
  };

  return (
    <div className={styles['wrapper']}>
      {data.length > 0 && (
        <div className={styles['list']}>
          {data.map((film) => (
            <FilmCard
              id={film.id}
              name={film.name}
              year={film.year}
              genres={film.genres}
              poster={film.poster}
              rating={film.rating}
              key={`${film.id}`}
            />
          ))}
        </div>
      )}

      {!isLoading && data.length === 0 && (
        <Heading
          appearance="small"
          withMargin={false}
          empty={true}
          centered={true}
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
