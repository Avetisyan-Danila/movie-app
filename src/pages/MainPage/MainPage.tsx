import { MainFilmPoster } from '../../components/MainFilmPoster/MainFilmPoster.tsx';
import { useFilmWithParams } from '../../hooks/useFilmWithParams.ts';
import {
  CLOSEST_RELEASES_FILMS_PARAMS,
  MAIN_POSTER_FILM_ID,
  POPULAR_FILMS_PARAMS,
} from '../../helpers/constants.ts';
import { ShortFilmInfo } from '../../types/shortFilmInfo.ts';
import { useMemo } from 'react';
import { FilmsCarouselSection } from '../../components/FilmsCarouselSection/FilmsCarouselSection.tsx';
import { useFilmById } from '../../hooks/useFilmById.ts';

export const MainPage = () => {
  const URL = '/movie';

  const { filmData: mainPosterFilm, isLoading: mainPosterLoading } =
    useFilmById(MAIN_POSTER_FILM_ID);

  const popularFilmsTitle = 'Популярные';
  const closestReleasesTitle = 'Ближайшие премьеры';

  const popularEmptyMessage = 'Не удалось загрузить популярные фильмы';
  const closestReleasesEmptyMessage = 'Не удалось загрузить ближайшие премьеры';

  const popularFilmsParams = useMemo(
    () => ({ ...POPULAR_FILMS_PARAMS, limit: 15 }),
    [],
  );
  const closestReleasesParams = useMemo(
    () => ({ ...CLOSEST_RELEASES_FILMS_PARAMS, limit: 20 }),
    [],
  );

  const { filmData: popularFilms, isLoading: popularFilmsLoading } =
    useFilmWithParams<ShortFilmInfo>(URL, popularFilmsParams);
  const { filmData: closestReleases, isLoading: closestReleasesLoading } =
    useFilmWithParams<ShortFilmInfo>(URL, closestReleasesParams);

  return (
    <>
      {mainPosterFilm && (
        <MainFilmPoster
          id={mainPosterFilm.id}
          backdrop={mainPosterFilm.backdrop}
          name={mainPosterFilm.name}
          genres={mainPosterFilm.genres}
          description={mainPosterFilm.description}
          videos={mainPosterFilm.videos}
          rating={mainPosterFilm.rating}
          year={mainPosterFilm.year}
          loading={mainPosterLoading}
        />
      )}

      <FilmsCarouselSection
        title={popularFilmsTitle}
        films={popularFilms ?? []}
        loading={popularFilmsLoading}
        slidesPerView={5}
        slidesPerGroup={5}
        emptyMessage={popularEmptyMessage}
      />

      <FilmsCarouselSection
        title={closestReleasesTitle}
        films={closestReleases ?? []}
        loading={closestReleasesLoading}
        slidesPerView={4}
        slidesPerGroup={4}
        emptyMessage={closestReleasesEmptyMessage}
      />
    </>
  );
};
