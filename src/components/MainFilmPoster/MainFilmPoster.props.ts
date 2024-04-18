import { Film } from '../../types/film.ts';

export interface MainFilmPosterProps
  extends Pick<
    Film,
    | 'id'
    | 'poster'
    | 'backdrop'
    | 'name'
    | 'genres'
    | 'description'
    | 'videos'
    | 'rating'
    | 'year'
  > {}
