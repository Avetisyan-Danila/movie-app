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
      <Heading withMargin={false}>{title}</Heading>

      {loading && <Loader />}

      {!loading && films.length === 0 && (
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
          {films.map((film) => (
            <SwiperSlide key={film.id}>
              <FilmCard
                id={film.id}
                name={film.name}
                year={film.year}
                genres={film.genres}
                poster={film.poster}
              />
            </SwiperSlide>
          ))}
        </FilmsCarousel>
      )}
    </>
  );
};
