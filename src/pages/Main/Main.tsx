import mainFilm from '../../mocks/main-page-film.ts';
import popularFilms from '../../mocks/main-page-popular-films.ts';
import closestReleases from '../../mocks/main-page-closest-releases.ts';
import { MainFilmPoster } from '../../components/MainFilmPoster/MainFilmPoster.tsx';
import { FilmsCarousel } from '../../components/FilmsCarousel/FilmsCarousel.tsx';
import { SwiperSlide } from 'swiper/react';
import { FilmCard } from '../../components/FilmCard/FilmCard.tsx';
import { Heading } from '../../components/Heading/Heading.tsx';
import styles from './Main.module.css';

export const Main = () => {
  // const { data: mainFilm } = useFilmById('/409424');

  return (
    <>
      {mainFilm && (
        <MainFilmPoster
          backdrop={mainFilm.backdrop}
          name={mainFilm.name}
          genres={mainFilm.genres}
          description={mainFilm.description}
          videos={mainFilm.videos}
          rating={mainFilm.rating}
          year={mainFilm.year}
        />
      )}

      {popularFilms && (
        <div className={styles['main-block']}>
          <Heading>Популярные</Heading>

          <FilmsCarousel spaceBetween={65} slidesPerView={6} slidesPerGroup={6}>
            {popularFilms.docs.map((film) => {
              return (
                <SwiperSlide>
                  <FilmCard
                    name={film.name}
                    year={film.year}
                    genres={film.genres}
                    poster={film.poster}
                  />
                </SwiperSlide>
              );
            })}
          </FilmsCarousel>
        </div>
      )}

      {closestReleases && (
        <div className={styles['main-block']}>
          <Heading>Ближайшие премьеры</Heading>

          <FilmsCarousel spaceBetween={65} slidesPerView={5} slidesPerGroup={5}>
            {closestReleases.docs.map((film) => {
              return (
                <SwiperSlide>
                  <FilmCard
                    name={film.name}
                    year={film.year}
                    genres={film.genres}
                    poster={film.poster}
                  />
                </SwiperSlide>
              );
            })}
          </FilmsCarousel>
        </div>
      )}
    </>
  );
};
