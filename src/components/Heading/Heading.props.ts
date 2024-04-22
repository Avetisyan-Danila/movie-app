import { ReactNode } from 'react';

export interface HeadingProps {
  children: ReactNode;

  className?: string;
  appearance?: 'big' | 'small';
  empty?: boolean;
  centered?: boolean;
  withMargin?: boolean;
}
