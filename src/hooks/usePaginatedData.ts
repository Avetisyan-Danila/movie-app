import { useCallback, useState } from 'react';
import { getFilmWithParams } from '../helpers/getFilmWithParams.ts';
import { addNotification } from '../helpers/notification.ts';
import { UrlSearchParams } from '../types/urlSearchParams.ts';
import { ListApiResponse } from '../types/listApiResponse.ts';

export const usePaginatedData = <T>(
  perPage: number,
  params: UrlSearchParams,
) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadedAll, setIsLoadedAll] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      const data = await getFilmWithParams<ListApiResponse>({
        page: currentPage,
        limit: perPage,
        ...params,
      });

      if (data) {
        const newData = (data.docs as T[]) ?? [];
        setData((prevData) => [...prevData, ...newData]);

        if (currentPage === data.pages) {
          setIsLoadedAll(true);
        } else {
          setCurrentPage(currentPage + 1);
        }
      } else {
        setData([]);
      }
    } catch {
      addNotification('Ошибка при получении данных', 'danger');
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, params, perPage]);

  return { data, fetchData, isLoading, isLoadedAll };
};
