import { Film } from '../../types/film.ts';

export interface FilmCardProps
  extends Pick<Film, 'name' | 'year' | 'genres' | 'poster'> {}
