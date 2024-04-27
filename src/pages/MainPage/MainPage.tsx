import mainFilm from '../../mocks/main-page-film.ts';
import { MainFilmPoster } from '../../components/MainFilmPoster/MainFilmPoster.tsx';
import { useFilmWithParams } from '../../hooks/useFilmWithParams.ts';
import {
  CLOSEST_RELEASES_FILMS_PARAMS,
  POPULAR_FILMS_PARAMS,
} from '../../helpers/constants.ts';
import { ShortFilmInfo } from '../../types/shortFilmInfo.ts';
import { useMemo } from 'react';
import { FilmsCarouselSection } from '../../components/FilmsCarouselSection/FilmsCarouselSection.tsx';

export const MainPage = () => {
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
    useFilmWithParams<ShortFilmInfo>(popularFilmsParams);
  const { filmData: closestReleases, isLoading: closestReleasesLoading } =
    useFilmWithParams<ShortFilmInfo>(closestReleasesParams);

  return (
    <>
      {/* TODO: убрать моки */}
      {mainFilm && (
        <MainFilmPoster
          id={mainFilm.id}
          backdrop={mainFilm.backdrop}
          name={mainFilm.name}
          genres={mainFilm.genres}
          description={mainFilm.description}
          videos={mainFilm.videos}
          rating={mainFilm.rating}
          year={mainFilm.year}
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
