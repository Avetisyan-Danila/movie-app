import { Film } from '../../types/film.ts';

export interface MainFilmPosterProps
  extends Pick<
    Film,
    | 'id'
    | 'backdrop'
    | 'name'
    | 'genres'
    | 'description'
    | 'videos'
    | 'rating'
    | 'year'
  > {
  loading: boolean;
}
