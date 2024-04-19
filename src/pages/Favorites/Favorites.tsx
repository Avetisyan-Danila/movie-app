import { Heading } from '../../components/Heading/Heading.tsx';
import { FilmListWithPagination } from '../../components/FilmListWithPagination/FilmListWithPagination.tsx';

export const Favorites = () => {
  const collectionName = 'favorites';
  const orderBy = 'createdAt';
  const emptyMessage = 'Список любимых фильмов пуст';

  return (
    <>
      <Heading>Любимые фильмы</Heading>

      <FilmListWithPagination
        collectionName={collectionName}
        orderBy={orderBy}
        emptyMessage={emptyMessage}
      />
    </>
  );
};
