import { Film } from '../../types/film.ts';

export interface MainFilmPosterProps
  extends Pick<
    Film,
    | 'backdrop'
    | 'name'
    | 'genres'
    | 'description'
    | 'videos'
    | 'rating'
    | 'year'
  > {}
