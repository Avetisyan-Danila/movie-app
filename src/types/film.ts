export type Film = {
  id: number;
  genres: Array<{ name: string }>;
  name: string;
  description: string;
  year: number;
  ageRating: number;
  movieLength: number;
  rating: {
    kp: number;
  };
  poster: {
    url: string;
    previewUrl: string;
  };
  backdrop: {
    url: string;
    previewUrl: string;
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
};
