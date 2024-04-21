import { ShortFilmInfo } from '../../types/shortFilmInfo.ts';

export interface FilmListWithPaginationProps {
  data: ShortFilmInfo[];
  fetchDataFunction: () => Promise<void>;
  isLoading: boolean;
  isLoadedAll: boolean;
  emptyMessage: string;

  perPage?: number;
}
