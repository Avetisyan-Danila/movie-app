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
          <Heading withMargin={false}>Популярные</Heading>

          <FilmsCarousel spaceBetween={65} slidesPerView={5} slidesPerGroup={5}>
            {popularFilms.docs.map((film, index) => {
              return (
                <SwiperSlide key={index}>
                  <FilmCard
                    id={film.id}
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
          <Heading withMargin={false}>Ближайшие премьеры</Heading>

          <FilmsCarousel spaceBetween={65} slidesPerView={4} slidesPerGroup={4}>
            {closestReleases.docs.map((film, index) => {
              return (
                <SwiperSlide key={index}>
                  <FilmCard
                    id={film.id}
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
