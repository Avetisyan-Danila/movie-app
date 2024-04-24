import { Status } from '../types/status.ts';

export const PER_PAGE = 10;
export const POPULAR_FILMS_PARAMS = { lists: 'popular-films', year: 2024 };
export const CLOSEST_RELEASES_FILMS_PARAMS = { lists: 'the_closest_releases' };

export const STATUS_IDLE: Status = 'idle';
export const STATUS_LOADING: Status = 'loading';
export const STATUS_FAILED: Status = 'failed';
export const STATUS_SUCCESS: Status = 'success';
