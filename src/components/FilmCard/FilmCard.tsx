import styles from './FilmCard.module.css';
import { FilmCardProps } from './FilmCard.props.ts';
import { AddToFavoriteButton } from '../AddToFavoriteButton/AddToFavoriteButton.tsx';
import { useFavorites } from '../../hooks/useFavorites.ts';
import { AddToWatchListButton } from '../AddToWatchListButton/AddToWatchListButton.tsx';
import { useWatchList } from '../../hooks/useWatchList.ts';
import { Link } from 'react-router-dom';
import { Rating } from '../Rating/Rating.tsx';
import { useAuth } from '../../hooks/useAuth.ts';
import CameraSlash from '../../assets/icons/camera-slash.svg';
import cn from 'classnames';

export const FilmCard = (props: FilmCardProps) => {
  const { id, name, year, genres, poster, rating } = props;

  const uid = useAuth();

  const {
    isLoading: isFavoriteDataLoading,
    isFavorite,
    addToFavorite,
    deleteFromFavorite,
  } = useFavorites(id, name ?? '', uid);

  const {
    isLoading: isWatchListDataLoading,
    isAdded,
    addToWatchList,
    deleteFromWatchList,
  } = useWatchList(id, name ?? '', uid);

  const handleFavoriteClick = async (value: boolean) => {
    if (value) {
      await addToFavorite(props);
    } else {
      await deleteFromFavorite();
    }
  };

  const handleWatchListClick = async (value: boolean) => {
    if (value) {
      await addToWatchList(props);
    } else {
      await deleteFromWatchList();
    }
  };

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
        loading={isFavoriteDataLoading}
      />

      <AddToWatchListButton
        className={styles['watch-list-button']}
        isActive={isAdded}
        onClick={() => handleWatchListClick(!isAdded)}
        loading={isWatchListDataLoading}
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

          {genres && (
            <div className={styles['info-item']}>
              {genres.map(({ name }) => name).join(' ')}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
