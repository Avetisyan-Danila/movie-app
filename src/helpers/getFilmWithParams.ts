import axios from 'axios';
import { PREFIX } from './API.ts';
import { addNotification } from './notification.ts';
import { UrlSearchParams } from '../types/urlSearchParams.ts';
import { convertSearchParamsToStrings } from './convertSearchParamsToStrings.ts';

export const getFilmWithParams = async <T>(params: UrlSearchParams) => {
  try {
    const stringifiedParams = convertSearchParamsToStrings(params);

    const queryParams = new URLSearchParams(stringifiedParams).toString();
    const { data } = await axios.get<T>(`${PREFIX}/movie?${queryParams}`, {
      headers: {
        'X-API-KEY': 'HGFY3HG-DD5MQSW-HDTMZPR-Q85SRNB',
      },
    });

    return data;
  } catch (error) {
    addNotification('Ошибка при получении данных', 'danger');
  }
};
