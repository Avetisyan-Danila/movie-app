import styles from './FilmCard.module.css';
import { FilmCardProps } from './FilmCard.props.ts';
import { AddToFavoriteButton } from '../AddToFavoriteButton/AddToFavoriteButton.tsx';
import { AddToWatchListButton } from '../AddToWatchListButton/AddToWatchListButton.tsx';
import { Link } from 'react-router-dom';
import { Rating } from '../Rating/Rating.tsx';
import { useAuth } from '../../hooks/useAuth.ts';
import CameraSlash from '../../assets/icons/camera-slash.svg';
import cn from 'classnames';
import { useList } from '../../hooks/useList.ts';
import { useCallback, useMemo } from 'react';

export const FilmCard = (props: FilmCardProps) => {
  const { id, name, year, genres, poster, rating } = props;

  const uid = useAuth();

  const {
    isLoading: isFavoriteLoading,
    isInList: isFavorite,
    addToList: addToFavorite,
    deleteFromList: deleteFromFavorite,
  } = useList(id, name ?? '', uid, 'favorites');

  const {
    isLoading: isWatchListLoading,
    isInList: isAddedToWatchList,
    addToList: addToWatchList,
    deleteFromList: deleteFromWatchList,
  } = useList(id, name ?? '', uid, 'watchList');

  const handleFavoriteClick = useCallback(
    async (value: boolean) => {
      if (value) {
        await addToFavorite(props);
      } else {
        await deleteFromFavorite();
      }
    },
    [addToFavorite, deleteFromFavorite, props],
  );

  const handleWatchListClick = useCallback(
    async (value: boolean) => {
      if (value) {
        await addToWatchList(props);
      } else {
        await deleteFromWatchList();
      }
    },
    [addToWatchList, deleteFromWatchList, props],
  );

  const genreString = useMemo(
    () => genres?.map(({ name }) => name).join(' '),
    [genres],
  );

  return (
    <div className={styles['card']}>
      <Link
        to={`/film/${id}`}
        className={cn({ [styles['without-image']]: !poster?.previewUrl })}
      >
        <img
          className={styles['poster']}
          src={poster?.previewUrl ?? CameraSlash}
          alt={name}
        />
      </Link>

      <AddToFavoriteButton
        className={styles['favorite-button']}
        isActive={isFavorite}
        onClick={() => handleFavoriteClick(!isFavorite)}
        loading={isFavoriteLoading}
      />

      <AddToWatchListButton
        className={styles['watch-list-button']}
        isActive={isAddedToWatchList}
        onClick={() => handleWatchListClick(!isAddedToWatchList)}
        loading={isWatchListLoading}
      />

      <div className={styles['info']}>
        <Link to={`/film/${id}`} className={styles['link']}>
          <h4 className={styles['title']}>
            {name}
            {rating && <Rating rating={rating} className={styles['rating']} />}
          </h4>
        </Link>

        <div className={styles['line']}>
          <div className={styles['info-item']}>{year}</div>

          {genreString && (
            <div className={styles['info-item']}>{genreString}</div>
          )}
        </div>
      </div>
    </div>
  );
};
