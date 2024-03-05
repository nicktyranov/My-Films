export interface Film {
  '#TITLE': string;
  '#IMDB_ID': string;
  '#RANK': number;
  '#IMG_POSTER': string;
	'inFavorites'?: boolean;
}

export interface FilmListProps {
  films: Film[];
}