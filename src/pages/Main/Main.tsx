import mainFilm from '../../mocks/main-page-film.ts';
import { MainFilmPoster } from '../../components/MainFilmPoster/MainFilmPoster.tsx';
import { FilmsCarousel } from '../../components/FilmsCarousel/FilmsCarousel.tsx';
import { SwiperSlide } from 'swiper/react';
import { FilmCard } from '../../components/FilmCard/FilmCard.tsx';
import { Heading } from '../../components/Heading/Heading.tsx';
import { useFilmWithParams } from '../../hooks/useFilmWithParams.ts';
import {
  CLOSEST_RELEASES_FILMS_PARAMS,
  POPULAR_FILMS_PARAMS,
} from '../../helpers/constants.ts';
import { ShortFilmInfo } from '../../types/shortFilmInfo.ts';
import { useMemo } from 'react';
import { Loader } from '../../components/Loader/Loader.tsx';

export const Main = () => {
  const popularFilmsParams = useMemo(
    () => ({ ...POPULAR_FILMS_PARAMS, limit: 25 }),
    [],
  );

  const closestReleasesParams = useMemo(
    () => ({ ...CLOSEST_RELEASES_FILMS_PARAMS, limit: 25 }),
    [],
  );

  const { filmData: popularFilms, isLoading: popularFilmsLoading } =
    useFilmWithParams<ShortFilmInfo>(popularFilmsParams);

  const { filmData: closestReleases, isLoading: closestReleasesLoading } =
    useFilmWithParams<ShortFilmInfo>(closestReleasesParams);

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

      <Heading withMargin={false}>Популярные</Heading>

      {popularFilmsLoading && <Loader />}
      {popularFilms && (
        <FilmsCarousel spaceBetween={65} slidesPerView={5} slidesPerGroup={5}>
          {popularFilms.map((film, index) => {
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
      )}

      <Heading withMargin={false}>Ближайшие премьеры</Heading>

      {closestReleasesLoading && <Loader />}
      {closestReleases && (
        <FilmsCarousel spaceBetween={65} slidesPerView={4} slidesPerGroup={4}>
          {closestReleases.map((film, index) => {
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
      )}
    </>
  );
};
