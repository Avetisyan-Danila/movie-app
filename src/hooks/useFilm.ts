import axios from 'axios';
import { PREFIX } from '../helpers/API.ts';
import { Film } from '../types/film.ts';
import { useState, useEffect } from 'react';
import { addNotification } from '../helpers/notification.ts';

export const useFilm = (filmId: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [filmData, setFilmData] = useState<Film | null>(null);

  useEffect(() => {
    const fetchFilm = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get<Film>(`${PREFIX}/movie/${filmId}`);
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
