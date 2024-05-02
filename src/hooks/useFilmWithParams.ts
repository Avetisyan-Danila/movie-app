import { useState, useEffect } from 'react';
import { addNotification } from '../helpers/notification.ts';
import { UrlSearchParams } from '../types/urlSearchParams.ts';
import { getFilmsWithParams } from '../helpers/getFilmsWithParams.ts';
import { ListApiResponse } from '../types/listApiResponse.ts';

interface UseFilmWithParamsResult<T> {
  isLoading: boolean;
  filmData: T[] | null;
}

export const useFilmWithParams = <T>(
  url: string,
  params: UrlSearchParams,
): UseFilmWithParamsResult<T> => {
  const [filmData, setFilmData] = useState<T[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFilm = async () => {
      setIsLoading(true);
      try {
        const data = await getFilmsWithParams<ListApiResponse>(url, params);
        setFilmData((data?.docs as T[]) ?? []);
      } catch (error) {
        addNotification('Ошибка при получении данных', 'danger');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilm();
  }, [params, url]);

  return { isLoading, filmData };
};
