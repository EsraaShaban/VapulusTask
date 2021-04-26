export interface IMovieItem {

  id: string;
  backdrop: string;
  title: string;
  slug: string;
  classification: string;
  director: string;
  length: string;
  overview: string;
  poster: string;
  released_on: string;
  imdb_rating: number;
  cast: Array<string>;
  genres: Array<string>;

}
