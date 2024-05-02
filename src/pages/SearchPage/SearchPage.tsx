import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { usePaginatedData } from '../../hooks/usePaginatedData.ts';
import { ShortFilmInfo } from '../../types/shortFilmInfo.ts';
import { PER_PAGE } from '../../helpers/constants.ts';
import { Heading } from '../../components/Heading/Heading.tsx';
import { FilmListWithPagination } from '../../components/FilmListWithPagination/FilmListWithPagination.tsx';
import { useAuth } from '../../hooks/useAuth.ts';

export const SearchPage = () => {
  const uid = useAuth();
  const { query } = useParams();

  const params = useMemo(() => ({ query: query ?? null }), [query]);

  const { data, fetchData, isLoading, isLoadedAll } =
    usePaginatedData<ShortFilmInfo>('/movie/search', PER_PAGE, params);

  const emptyMessage = 'Не удалось найти фильм по вашему запросу';

  return (
    <>
      <Heading>Поиск</Heading>

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
