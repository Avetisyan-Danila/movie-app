import { ReactNode } from 'react';

export interface FilmsCarouselProps {
  children: ReactNode;
  spaceBetween: number;
  slidesPerView: number;
  slidesPerGroup: number;
  autoplayDuration?: number;
  allowTouchMove?: boolean;
  pauseOnMouseEnter?: boolean;
  className?: string;
}
