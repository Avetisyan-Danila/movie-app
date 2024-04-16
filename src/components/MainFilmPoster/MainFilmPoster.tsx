import styles from './MainFilmPoster.module.css';
import { MainFilmPosterProps } from './MainFilmPoster.props.ts';
import { Button } from '../Button/Button.tsx';
import { AddToFavoriteButton } from '../AddToFavoriteButton/AddToFavoriteButton.tsx';
import { useState } from 'react';
import cn from 'classnames';

export const MainFilmPoster = ({
  backdrop,
  name,
  genres,
  description,
  videos,
  rating,
  year,
}: MainFilmPosterProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const onTrailerClick = () => {
    if (videos) {
      window.open(videos.trailers[0].url!, '_blank', 'noopener, noreferrer');
    }
  };

  return (
    <div
      className={styles['poster']}
      style={{ backgroundImage: `url(${backdrop.url})` }}
    >
      <div className={styles['background']}></div>

      <div className={styles['info']}>
        <h2 className={styles['title']}>{name}</h2>
        <p className={styles['description']}>{description}</p>

        <div className={styles['line']}>
          <div className={styles['info-item']}>{year}</div>
          <div className={styles['info-item']}>
            {genres.map((g) => g.name).join(' ')}
          </div>
          <div
            className={cn(styles['info-item'], [styles['rating']], {
              [styles['neutral']]: rating.kp < 7,
              [styles['positive']]: rating.kp >= 7,
            })}
          >
            {rating.kp.toFixed(1)}
          </div>
        </div>

        <div className={styles['actions']}>
          <Button
            onClick={videos ? onTrailerClick : undefined}
            disabled={!videos}
          >
            Смотреть трейлер
          </Button>

          <AddToFavoriteButton
            appearance="big"
            isActive={isFavorite}
            onClick={() => setIsFavorite(!isFavorite)}
          />
        </div>
      </div>
    </div>
  );
};
