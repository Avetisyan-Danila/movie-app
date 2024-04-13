import { InputHTMLAttributes } from 'react';

export interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch: (value: string) => void;
  isSearchActive: boolean;
  onSearchIconClick: (value: boolean) => void;
}
