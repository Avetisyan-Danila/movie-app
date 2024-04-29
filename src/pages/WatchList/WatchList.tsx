import { Heading } from '../../components/Heading/Heading.tsx';
import { FilmListWithPagination } from '../../components/FilmListWithPagination/FilmListWithPagination.tsx';
import { useFirestorePaginatedData } from '../../hooks/useFirestorePaginatedData.ts';
import { ShortFilmInfo } from '../../types/shortFilmInfo.ts';
import { PER_PAGE } from '../../helpers/constants.ts';
import { useAuth } from '../../hooks/useAuth.ts';

export const WatchList = () => {
  const uid = useAuth();

  const collectionName = `users/${uid}/watchList`;
  const orderBy = 'createdAt';
  const emptyMessage = 'Список "Смотреть позже" пуст';

  const { data, fetchData, isLoading, isLoadedAll } =
    useFirestorePaginatedData<ShortFilmInfo>(
      uid,
      collectionName,
      orderBy,
      PER_PAGE,
    );

  return (
    <>
      <Heading>Смотреть позже</Heading>

      <FilmListWithPagination
        uid={uid}
        data={data}
        fetchDataFunction={fetchData}
        isLoading={isLoading}
        isLoadedAll={isLoadedAll}
        emptyMessage={emptyMessage}
      />
    </>
  );
};
