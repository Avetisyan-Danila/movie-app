import api from '../services/api.ts';
import { addNotification } from './notification.ts';
import { UrlSearchParams } from '../types/urlSearchParams.ts';
import { convertSearchParamsToStrings } from './convertSearchParamsToStrings.ts';

export const getFilmWithParams = async <T>(params: UrlSearchParams) => {
  try {
    const stringifiedParams = convertSearchParamsToStrings(params);

    const queryParams = new URLSearchParams(stringifiedParams).toString();
    const { data } = await api.get<T>(`/movie?${queryParams}`);

    return data;
  } catch (error) {
    addNotification('Ошибка при получении данных', 'danger');
  }
};
