import { FilmCardProps } from './FilmCard.props.ts';
import styles from './FilmCard.module.css';
import { AddToFavoriteButton } from '../AddToFavoriteButton/AddToFavoriteButton.tsx';
import { useState } from 'react';

export const FilmCard = ({ name, year, genres, poster }: FilmCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className={styles['card']}>
      <img className={styles['poster']} src={poster.previewUrl} alt={name} />

      <AddToFavoriteButton
        className={styles['favorite-button']}
        isActive={isFavorite}
        onClick={() => setIsFavorite(!isFavorite)}
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
