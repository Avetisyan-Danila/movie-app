import { ShortFilmInfo } from '../../types/shortFilmInfo.ts';

export interface FilmsCarouselSectionProps {
  title: string;
  films: ShortFilmInfo[];
  loading: boolean;
  slidesPerView: number;
  slidesPerGroup: number;
  emptyMessage: string;

  spaceBetween?: number;
}
