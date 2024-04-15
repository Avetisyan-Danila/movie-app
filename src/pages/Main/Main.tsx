import { MainFilmPoster } from '../../components/MainFilmPoster/MainFilmPoster.tsx';
import mainFilm from '../../mocks/main-page-film.ts';

export const Main = () => {
  // const { data: mainFilm } = useFilms('/409424');

  return (
    <div>
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
    </div>
  );
};
