import styles from './FilmCard.module.css';
import { FilmCardProps } from './FilmCard.props.ts';
import { AddToFavoriteButton } from '../AddToFavoriteButton/AddToFavoriteButton.tsx';
import { useFavorites } from '../../hooks/useFavorites.ts';

export const FilmCard = (props: FilmCardProps) => {
  const { id, name, year, genres, poster } = props;

  const { isFavorite, addToFavorite, deleteFromFavorite } = useFavorites(
    id,
    name,
  );

  const handleFavoriteClick = async (value: boolean) => {
    if (value) {
      addToFavorite(props);
    } else {
      deleteFromFavorite();
    }
  };

  return (
    <div className={styles['card']}>
      <img className={styles['poster']} src={poster.previewUrl} alt={name} />

      <AddToFavoriteButton
        className={styles['favorite-button']}
        isActive={isFavorite}
        onClick={() => handleFavoriteClick(!isFavorite)}
      />

      <div className={styles['info']}>
        <h4 className={styles['title']}>{name}</h4>

        <div className={styles['line']}>
          <div className={styles['info-item']}>{year}</div>
          <div className={styles['info-item']}>
            {genres.map((g) => g.name).join(' ')}
          </div>
        </div>
      </div>
    </div>
  );
};
