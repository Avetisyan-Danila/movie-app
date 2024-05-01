import { ShortFilmInfo } from '../../types/shortFilmInfo.ts';
import { UrlSearchParams } from '../../types/urlSearchParams.ts';

export interface FilmListWithPaginationProps {
  uid: string | undefined;
  params: UrlSearchParams | string;
  data: ShortFilmInfo[];
  fetchDataFunction: (newParams?: boolean) => Promise<void>;
  isLoading: boolean;
  isLoadedAll: boolean;
  emptyMessage: string;

  perPage?: number;
}
