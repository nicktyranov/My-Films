export interface Film {
  '#TITLE': string;
  '#IMDB_ID': string;
  '#RANK': string | number;
  '#IMG_POSTER': string;
	'inFavorites'?: boolean;
}

export interface FilmListProps {
  films: Film[];
  isFavorite?: boolean
}