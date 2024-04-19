import { ReactNode } from 'react';

export interface HeadingProps {
  children: ReactNode;

  className?: string;
  appearance?: 'big' | 'small';
  withMargin?: boolean;
}
