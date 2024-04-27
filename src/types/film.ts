import { ShortFilmInfo } from './shortFilmInfo.ts';

export type Film = {
  id: number;
  year: number;

  genres?: Array<{ name: string }>;
  description?: string;
  ageRating?: number;
  movieLength?: number;
  rating?: {
    kp: number;
  };
  name?: string;
  slogan?: string;
  backdrop?: {
    url?: string;
    previewUrl?: string;
  };
  poster?: {
    url?: string;
    previewUrl?: string;
  };
  videos?: {
    trailers: Array<{
      url: string;
      name: string;
      site: string;
      type: string;
    }>;
  };
  persons?: Array<{
    id: number;
    photo: string;
    name: string;
    enName: string | null;
    description: string | null;
    profession: string;
    enProfession: string;
  }>;
  similarMovies?: Array<ShortFilmInfo>;
};
