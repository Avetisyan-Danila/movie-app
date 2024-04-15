import { Film } from './film.ts';

export type ListApiResponse = {
  docs: Film[];
  total: number;
  limit: number;
  page: number;
  pages: number;
};
