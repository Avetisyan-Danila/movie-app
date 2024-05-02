import { ButtonHTMLAttributes } from 'react';

export interface AddToFavoriteButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: 'big' | 'small';
  isActive?: boolean;
  loading: boolean;
}
