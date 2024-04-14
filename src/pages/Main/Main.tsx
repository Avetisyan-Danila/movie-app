import { useFilm } from '../../hooks/useFilm.ts';
import { MainFilmPoster } from '../../components/MainFilmPoster/MainFilmPoster.tsx';

export const Main = () => {
  const { filmData } = useFilm('409424');

  return (
    <div>
      {filmData && (
        <MainFilmPoster
          backdrop={filmData.backdrop}
          name={filmData.name}
          genres={filmData.genres}
          description={filmData.description}
          videos={filmData.videos}
          rating={filmData.rating}
          year={filmData.year}
        />
      )}
    </div>
  );
};
