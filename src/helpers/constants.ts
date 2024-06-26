import { Status } from '../types/status.ts';

export const MAIN_POSTER_FILM_ID = 1071383;

export const USER_PERSISTENT_STATE = 'userData';

export const PER_PAGE = 10;
export const PER_PAGE_LAPTOP = 8;

export const POPULAR_FILMS_PARAMS = { lists: 'popular-films', year: 2024 };
export const POPULAR_SERIES_PARAMS = { lists: 'popular-series', year: 2024 };
export const POPULAR_DOCUMENTARY_PARAMS = {
  lists: 'oscar-documentary-feature',
};
export const CLOSEST_RELEASES_FILMS_PARAMS = { lists: 'the_closest_releases' };

export const STATUS_IDLE: Status = 'idle';
export const STATUS_LOADING: Status = 'loading';
export const STATUS_FAILED: Status = 'failed';
export const STATUS_SUCCESS: Status = 'success';

export const EMAIL_VERIFICATION_MESSAGE =
  'Вам отправлено письмо для подтверждения эл. почты';
export const NEED_REAUTHORIZATION_MESSAGE =
  'Необходимо повторно пройти авторизацию';
export const RESET_EMAIL_SEND_MESSAGE =
  'Письмо для восстановления пароля отправлено';
export const NAME_UPDATE_SUCCESS_MESSAGE = 'Имя успешно изменено';
export const AVATAR_UPDATE_SUCCESS_MESSAGE = 'Фото профиля успешно изменено';
export const EMAIL_UPDATE_SUCCESS_MESSAGE = 'Email успешно изменен';
export const PASSWORD_UPDATE_SUCCESS_MESSAGE = 'Пароль успешно изменен';
export const DELETE_ACCOUNT_SUCCESS_MESSAGE = 'Аккаунт успешно удален';
