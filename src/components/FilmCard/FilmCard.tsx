import { FilmCardProps } from './FilmCard.props.ts';
import styles from './FilmCard.module.css';
import { AddToFavoriteButton } from '../AddToFavoriteButton/AddToFavoriteButton.tsx';
import { useState } from 'react';
import { db } from '../../firebase.ts';
import { doc, setDoc } from 'firebase/firestore';
import { addNotification } from '../../helpers/notification.ts';

export const FilmCard = ({ id, name, year, genres, poster }: FilmCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const favorites = doc(db, `favorites/${id}`);
  const handleFavoriteClick = async (value: boolean) => {
    setDoc(favorites, { id, name, year, genres, poster })
      .then(() => {
        setIsFavorite(value);
      })
      .catch((error) => {
        console.log(error);
        addNotification('Ошибка при добавлении фильма в избранное', 'danger');
      });
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
