
import Card from '../Card/Card';
import styles from './FilmList.module.css';
import { FilmListProps } from './FilmList.props';

function FilmList({films}: FilmListProps) {
	
	const processedFilms = films.map(film => ({
		title: film['#TITLE'], 
		id: film['#IMDB_ID'],
		rating: film['#RANK'],
		img: film['#IMG_POSTER'],
		inFavorites: false
	}));

	const list = processedFilms.map((film) => (
		<Card
			key={film.id}
			id={film.id}
			inFavorites={film.inFavorites}
			img={film.img}
			rating={film.rating}
			title={film.title}
		/>
	));
	
	return (
		<>
			<div className={styles['film-list']}>
				{list}
			</div>
		</>
	);
}

export default FilmList;