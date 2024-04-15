export type Film = {
  id: number;
  genres: Array<{ name: string }>;
  name: string;
  description: string;
  rating: {
    kp: number;
  };
  year: number;
  videos?: {
    trailers: Array<{
      url: string;
      name: string;
      site: string;
      type: string;
    }>;
  };
  poster: {
    url: string;
    previewUrl: string;
  };
  backdrop: {
    url: string;
    previewUrl: string;
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
  ageRating: number;
  movieLength: number;
};
