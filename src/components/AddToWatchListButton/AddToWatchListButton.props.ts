import { ButtonHTMLAttributes } from 'react';

export interface AddToWatchListButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: 'big' | 'small';
  isActive?: boolean;
}
