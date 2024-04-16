import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

import { Swiper } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import { FilmsCarouselProps } from './FilmsCarousel.props.ts';

export const FilmsCarousel = ({
  children,
  spaceBetween,
  slidesPerView,
  slidesPerGroup,
  autoplayDuration = 12000,
  allowTouchMove = false,
  pauseOnMouseEnter = true,
  className,
}: FilmsCarouselProps) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: autoplayDuration,
        pauseOnMouseEnter: pauseOnMouseEnter,
      }}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      className={className}
      slidesPerGroup={slidesPerGroup}
      allowTouchMove={allowTouchMove}
    >
      {children}
    </Swiper>
  );
};
