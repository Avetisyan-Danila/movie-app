import { Heading } from '../../components/Heading/Heading.tsx';
import { FilmListWithPagination } from '../../components/FilmListWithPagination/FilmListWithPagination.tsx';
import { useFirestorePaginatedData } from '../../hooks/useFirestorePaginatedData.ts';
import { ShortFilmInfo } from '../../types/shortFilmInfo.ts';
import { PER_PAGE } from '../../helpers/constants.ts';

export const WatchList = () => {
  const collectionName = 'watchList';
  const orderBy = 'createdAt';
  const emptyMessage = 'Список "Смотреть позже" пуст';

  const { data, fetchData, isLoading, isLoadedAll } =
    useFirestorePaginatedData<ShortFilmInfo>(collectionName, orderBy, PER_PAGE);

  return (
    <>
      <Heading>Смотреть позже</Heading>

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
