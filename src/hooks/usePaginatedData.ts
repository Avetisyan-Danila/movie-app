import { useCallback, useState } from 'react';
import { getFilmsWithParams } from '../helpers/getFilmsWithParams.ts';
import { addNotification } from '../helpers/notification.ts';
import { UrlSearchParams } from '../types/urlSearchParams.ts';
import { ListApiResponse } from '../types/listApiResponse.ts';

export const usePaginatedData = <T>(
  perPage: number,
  params: UrlSearchParams | string,
) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadedAll, setIsLoadedAll] = useState(false);

  const fetchData = useCallback(
    async (newParams?: boolean) => {
      setIsLoading(true);

      let queryPage = currentPage;

      if (newParams) {
        queryPage = 1;
        setCurrentPage(queryPage);
        setData([]);
      }

      try {
        if (typeof params === 'string' || !params) return;

        const data = await getFilmsWithParams<ListApiResponse>({
          page: queryPage,
          limit: perPage,
          ...params,
        });

        if (data) {
          const newData = (data.docs as T[]) ?? [];
          setData((prevData) => [...prevData, ...newData]);

          if (queryPage === data.pages) {
            setIsLoadedAll(true);
          } else {
            setCurrentPage(queryPage + 1);
          }
        } else {
          setData([]);
        }
      } catch {
        addNotification('Ошибка при получении данных', 'danger');
      } finally {
        setIsLoading(false);
      }
    },
    [currentPage, params, perPage],
  );

  return { data, fetchData, isLoading, isLoadedAll };
};
