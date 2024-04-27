import { ShortFilmInfo } from '../../types/shortFilmInfo.ts';

export interface FilmsCarouselSectionProps {
  films: ShortFilmInfo[];
  loading: boolean;
  slidesPerView: number;
  slidesPerGroup: number;

  title?: string;
  emptyMessage?: string;
  spaceBetween?: number;
}
