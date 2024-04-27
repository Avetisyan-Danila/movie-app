import { Film } from '../../types/film.ts';
import { HTMLAttributes } from 'react';

export interface RatingProps extends HTMLAttributes<HTMLSpanElement> {
  rating: Film['rating'];
}
