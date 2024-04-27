import api from '../services/api.ts';
import { Film } from '../types/film.ts';
import { useState, useEffect } from 'react';
import { addNotification } from '../helpers/notification.ts';

export const useFilmById = (filmId: string | null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [filmData, setFilmData] = useState<Film | null>(null);

  useEffect(() => {
    const fetchFilm = async () => {
      setIsLoading(true);
      try {
        const { data } = await api.get<Film>(`/movie/${filmId}`);
        setFilmData(data);
      } catch (error) {
        addNotification('Ошибка при получении данных', 'danger');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilm();
  }, [filmId]);

  return { isLoading, filmData };
};
