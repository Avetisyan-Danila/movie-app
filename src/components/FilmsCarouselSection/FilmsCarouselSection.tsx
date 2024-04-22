import { Heading } from '../Heading/Heading.tsx';
import { FilmsCarousel } from '../FilmsCarousel/FilmsCarousel.tsx';
import { SwiperSlide } from 'swiper/react';
import { FilmCard } from '../FilmCard/FilmCard.tsx';
import { FilmsCarouselSectionProps } from './FilmsCarouselSection.props.ts';
import { Loader } from '../Loader/Loader.tsx';
import styles from '../FilmListWithPagination/FilmListWithPagination.module.css';

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
        <Heading
          className={styles['empty']}
          appearance="small"
          withMargin={false}
        >
          {emptyMessage}
        </Heading>
      )}

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
    </>
  );
};
