import { Heading } from '../Heading/Heading.tsx';
import { FilmsCarousel } from '../FilmsCarousel/FilmsCarousel.tsx';
import { SwiperSlide } from 'swiper/react';
import { FilmCard } from '../FilmCard/FilmCard.tsx';
import { FilmsCarouselSectionProps } from './FilmsCarouselSection.props.ts';
import { Loader } from '../Loader/Loader.tsx';

export const FilmsCarouselSection = ({
  title,
  films,
  loading,
  slidesPerView,
  slidesPerGroup,
  emptyMessage,
  spaceBetween = 65,
}: FilmsCarouselSectionProps) => {
  if (!films) return null;

  return (
    <>
      {title && <Heading withMargin={false}>{title}</Heading>}

      {loading && <Loader />}

      {emptyMessage && !loading && films.length === 0 && (
        <Heading appearance="small" empty={true}>
          {emptyMessage}
        </Heading>
      )}

      {films.length > 0 && (
        <FilmsCarousel
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          slidesPerGroup={slidesPerGroup}
        >
          {films.map((film) => {
            if (!film.name || !film.poster?.previewUrl) return;

            return (
              <SwiperSlide key={film.id}>
                <FilmCard
                  id={film.id}
                  name={film.name}
                  year={film.year}
                  genres={film.genres}
                  poster={film.poster}
                  rating={film.rating}
                />
              </SwiperSlide>
            );
          })}
        </FilmsCarousel>
      )}
    </>
  );
};
