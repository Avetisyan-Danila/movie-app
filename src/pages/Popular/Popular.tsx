import { Heading } from '../../components/Heading/Heading.tsx';
import { FilmListWithPagination } from '../../components/FilmListWithPagination/FilmListWithPagination.tsx';
import { usePaginatedData } from '../../hooks/usePaginatedData.ts';
import { ShortFilmInfo } from '../../types/shortFilmInfo.ts';
import { PER_PAGE, POPULAR_FILMS_PARAMS } from '../../helpers/constants.ts';

export const Popular = () => {
  const { data, fetchData, isLoading, isLoadedAll } =
    usePaginatedData<ShortFilmInfo>(PER_PAGE, POPULAR_FILMS_PARAMS);

  const emptyMessage = 'Не удалось загрузить популярные фильмы';

  return (
    <>
      <Heading>Популярные</Heading>

      <FilmListWithPagination
        data={data}
        fetchDataFunction={fetchData}
        isLoading={isLoading}
        isLoadedAll={isLoadedAll}
        emptyMessage={emptyMessage}
      />
    </>
  );
};
