import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import styles from './FilmDetailed.module.css';
import { Heading } from '../../components/Heading/Heading.tsx';
import ClockIcon from '../../assets/icons/clock.svg';
import { toHoursAndMinutes } from '../../helpers/toHoursAndMinutes.ts';
import { FilmsCarouselSection } from '../../components/FilmsCarouselSection/FilmsCarouselSection.tsx';
import { Button } from '../../components/Button/Button.tsx';
import { Rating } from '../../components/Rating/Rating.tsx';
import { useFilmById } from '../../hooks/useFilmById.ts';
import CameraSlash from '../../assets/icons/camera-slash.svg';

export const FilmDetailed = () => {
  const { id } = useParams();

  const params = useMemo(() => ({ id: id ?? null }), [id]);

  const { filmData, isLoading } = useFilmById(params.id);

  const onTrailerClick = () => {
    if (filmData?.videos?.trailers && filmData?.videos?.trailers.length > 0) {
      window.open(
        filmData.videos.trailers[0].url!,
        '_blank',
        'noopener, noreferrer',
      );
    }
  };

  if (!filmData) return;

  console.log(filmData);

  return (
    <>
      {filmData.backdrop?.url && (
        <div className={styles['backdrop']}>
          <img
            src={filmData.backdrop.url}
            alt={`Фон к фильму - ${filmData.name}`}
          />
        </div>
      )}

      <div className={styles['info-wrapper']}>
        <img
          className={styles['poster']}
          src={filmData.poster?.url ?? CameraSlash}
          alt={`Постер к фильму - ${filmData.name}`}
        />

        <div className={styles['info-detailed']}>
          <div className={styles['block']}>
            {filmData.rating?.kp && (
              <Rating rating={filmData.rating} className={styles['rating']} />
            )}

            <h4 className={styles['year']}>{filmData.year}</h4>

            {filmData.movieLength && (
              <div className={styles['movie-length']}>
                <img src={ClockIcon} alt="Продолжительность" />
                {toHoursAndMinutes(filmData.movieLength)}
              </div>
            )}

            <span className={styles['ageRating']}>{filmData.ageRating}+</span>
          </div>

          <Heading className={styles['name']} withMargin={false}>
            {filmData.name}
          </Heading>

          <Heading
            className={styles['slogan']}
            appearance="small"
            withMargin={false}
          >
            {filmData.slogan}
          </Heading>

          <p className={styles['description']}>{filmData.description}</p>

          <div className={styles['genres']}>
            <Heading
              className={styles['genres-title']}
              appearance="small"
              withMargin={false}
            >
              Жанр
            </Heading>

            {filmData.genres && filmData.genres?.length > 0 && (
              <ul className={styles['genres-list']}>
                {filmData.genres.map(({ name }) => (
                  <li className={styles['genres-item']} key={name}>
                    {name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {!!filmData?.videos?.trailers && (
            <div className={styles['actions']}>
              {filmData.videos && (
                <Button onClick={onTrailerClick}>Смотреть трейлер</Button>
              )}
            </div>
          )}
        </div>
      </div>

      {filmData.persons && filmData.persons?.length > 0 && (
        <div className={styles['info-block']}>
          <Heading
            className={styles['info-title']}
            withMargin={false}
            appearance="small"
          >
            Актерский состав
          </Heading>

          <div className={styles['line']}></div>

          <div className={styles['actors']}>
            {filmData.persons.map(
              ({ id, enProfession, name, enName, photo, description }) => {
                if (enProfession !== 'actor') return;

                return (
                  <div className={styles['actor']} key={id}>
                    <img src={photo} alt={`Фото актера - ${name}`} />

                    <div>
                      <h4 className={styles['actor-name']}>{name ?? enName}</h4>
                      <h4 className={styles['actor-description']}>
                        {description ?? description}
                      </h4>
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </div>
      )}

      {filmData.similarMovies && filmData.similarMovies?.length > 0 && (
        <div className={styles['info-block']}>
          <Heading
            className={styles['info-title']}
            withMargin={false}
            appearance="small"
          >
            Похожие
          </Heading>

          <div className={styles['line']}></div>

          <FilmsCarouselSection
            films={filmData.similarMovies ?? []}
            loading={isLoading}
            slidesPerView={5}
            slidesPerGroup={5}
          />
        </div>
      )}
    </>
  );
};
