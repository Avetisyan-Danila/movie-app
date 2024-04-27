import styles from './MainFilmPoster.module.css';
import cn from 'classnames';
import { MainFilmPosterProps } from './MainFilmPoster.props.ts';
import { Button } from '../Button/Button.tsx';
import { Link } from 'react-router-dom';
import { Rating } from '../Rating/Rating.tsx';
import { useCallback, useMemo } from 'react';
import { Loader } from '../Loader/Loader.tsx';

export const MainFilmPoster = ({
  id,
  backdrop,
  name,
  genres,
  description,
  videos,
  rating,
  year,
  loading,
}: MainFilmPosterProps) => {
  const isActionsEnabled = useMemo(() => {
    return !!videos?.trailers;
  }, [videos?.trailers]);

  const onTrailerClick = useCallback(() => {
    if (videos?.trailers.length && videos?.trailers.length > 0) {
      window.open(videos.trailers[0].url!, '_blank', 'noopener, noreferrer');
    }
  }, [videos?.trailers]);

  return (
    <>
      {loading && <Loader />}

      {!loading && (
        <div
          className={styles['poster']}
          style={{ backgroundImage: `url(${backdrop?.url})` }}
        >
          <Link to={`/film/${id}`}>
            <div className={styles['background']}></div>
          </Link>

          <div className={styles['info']}>
            <Link to={`/film/${id}`} className={styles['link']}>
              <h2 className={styles['title']}>{name}</h2>
            </Link>

            <p className={styles['description']}>{description}</p>

            <div className={styles['line']}>
              <div className={styles['info-item']}>{year}</div>

              {genres && (
                <div className={styles['info-item']}>
                  {genres.map(({ name }) => name).join(' ')}
                </div>
              )}

              {rating && (
                <Rating
                  rating={rating}
                  className={cn(styles['info-item'], [styles['rating']])}
                />
              )}
            </div>

            {isActionsEnabled && (
              <div className={styles['actions']}>
                {videos && (
                  <Button onClick={onTrailerClick}>Смотреть трейлер</Button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
