import api from '../services/api.ts';
import { useState, useEffect } from 'react';
import { addNotification } from '../helpers/notification.ts';

export const useFilmWithParams = <T>(
  params: Record<string, string>,
): { isLoading: boolean; filmData: T | null } => {
  const [isLoading, setIsLoading] = useState(false);
  const [filmData, setFilmData] = useState<T | null>(null);

  useEffect(() => {
    const fetchFilm = async () => {
      setIsLoading(true);
      try {
        const queryParams = new URLSearchParams(params).toString();
        const { data } = await api.get<T>(`/movie?${queryParams}`);
        setFilmData(data);
      } catch (error) {
        addNotification('Ошибка при получении данных', 'danger');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilm();
  }, [params]);

  return { isLoading, filmData };
};
