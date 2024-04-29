import styles from './FilmCard.module.css';
import { FilmCardProps } from './FilmCard.props.ts';
import { AddToFavoriteButton } from '../AddToFavoriteButton/AddToFavoriteButton.tsx';
import { useFavorites } from '../../hooks/useFavorites.ts';
import { AddToWatchListButton } from '../AddToWatchListButton/AddToWatchListButton.tsx';
import { useWatchList } from '../../hooks/useWatchList.ts';
import { Link } from 'react-router-dom';
import { Rating } from '../Rating/Rating.tsx';
import { useAuth } from '../../hooks/useAuth.ts';

export const FilmCard = (props: FilmCardProps) => {
  const { id, name, year, genres, poster, rating } = props;

  const uid = useAuth();

  const { isFavorite, addToFavorite, deleteFromFavorite } = useFavorites(
    id,
    name ?? '',
    uid,
  );

  const { isAdded, addToWatchList, deleteFromWatchList } = useWatchList(
    id,
    name ?? '',
    uid,
  );

  const handleFavoriteClick = async (value: boolean) => {
    if (value) {
      addToFavorite(props);
    } else {
      deleteFromFavorite();
    }
  };

  const handleWatchListClick = async (value: boolean) => {
    if (value) {
      addToWatchList(props);
    } else {
      deleteFromWatchList();
    }
  };

  return (
    <div className={styles['card']}>
      <Link to={`/film/${id}`}>
        <img className={styles['poster']} src={poster?.previewUrl} alt={name} />
      </Link>

      <AddToFavoriteButton
        className={styles['favorite-button']}
        isActive={isFavorite}
        onClick={() => handleFavoriteClick(!isFavorite)}
      />

      <AddToWatchListButton
        className={styles['watch-list-button']}
        isActive={isAdded}
        onClick={() => handleWatchListClick(!isAdded)}
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
