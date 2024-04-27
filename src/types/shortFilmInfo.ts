import { Film } from './film.ts';

export type ShortFilmInfo = Pick<
  Film,
  'id' | 'name' | 'year' | 'genres' | 'poster' | 'rating'
>;
