import { Heading } from '../../components/Heading/Heading.tsx';
import { FilmListWithPagination } from '../../components/FilmListWithPagination/FilmListWithPagination.tsx';
import { usePaginatedData } from '../../hooks/usePaginatedData.ts';
import { ShortFilmInfo } from '../../types/shortFilmInfo.ts';
import {
  PER_PAGE,
  PER_PAGE_LAPTOP,
  POPULAR_DOCUMENTARY_PARAMS,
  POPULAR_FILMS_PARAMS,
  POPULAR_SERIES_PARAMS,
} from '../../helpers/constants.ts';
import { useAuth } from '../../hooks/useAuth.ts';
import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { UrlSearchParams } from '../../types/urlSearchParams.ts';
import useWindowSize from '../../hooks/useWindowSize.ts';

type popularCategories = {
  type: 'films' | 'series' | 'documentaries';
};

const paramsByType = {
  films: POPULAR_FILMS_PARAMS,
  series: POPULAR_SERIES_PARAMS,
  documentaries: POPULAR_DOCUMENTARY_PARAMS,
};

const titleByType = {
  films: 'Популярные фильмы',
  series: 'Популярные сериалы',
  documentaries: 'Лауреаты «Оскара» за лучший документальный фильм',
};

export const Popular = () => {
  const uid = useAuth();

  const { width } = useWindowSize();
  const { type } = useParams<popularCategories>();

  const params = useMemo(() => {
    return type ? (paramsByType[type] as UrlSearchParams) : '';
  }, [type]);

  const { data, fetchData, isLoading, isLoadedAll } =
    usePaginatedData<ShortFilmInfo>(
      '/movie',
      width > 1480 ? PER_PAGE : PER_PAGE_LAPTOP,
      params,
    );

  const emptyMessage = 'Не удалось загрузить популярные фильмы';

  return (
    <>
      <Heading>{type ? titleByType[type] : ''}</Heading>

      <FilmListWithPagination
        uid={uid}
        params={params}
        data={data}
        fetchDataFunction={fetchData}
        isLoading={isLoading}
        isLoadedAll={isLoadedAll}
        emptyMessage={emptyMessage}
      />
    </>
  );
};
