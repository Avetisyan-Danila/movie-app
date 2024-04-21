import { Heading } from '../../components/Heading/Heading.tsx';
import { FilmListWithPagination } from '../../components/FilmListWithPagination/FilmListWithPagination.tsx';

export const WatchList = () => {
  const collectionName = 'watchList';
  const orderBy = 'createdAt';
  const emptyMessage = 'Список "Смотреть позже" пуст';

  return (
    <>
      <Heading>Смотреть позже</Heading>

      <FilmListWithPagination
        collectionName={collectionName}
        orderBy={orderBy}
        emptyMessage={emptyMessage}
      />
    </>
  );
};
