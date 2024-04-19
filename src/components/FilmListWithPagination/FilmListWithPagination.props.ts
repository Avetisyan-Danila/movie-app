export interface FilmListWithPaginationProps {
  collectionName: string;
  orderBy: string;
  emptyMessage: string;

  perPage?: number;
}
