
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import styles from './FilmList.module.css';
import { FilmListProps } from './FilmList.props';
import { RootState } from '../../store/store';


function FilmList({ films}: FilmListProps) {
	const favoritesData = useSelector((state: RootState)=> state.favorites.items);
	
	function checkFavorites(id:string) {
		console.log('Checking favoritesData');
		return favoritesData.some((films) => films.id === id);
	}

	//ПРеобразуем названия полей (избавляемся от решетки)
	const processedFilms = films.map(film => ({
		title: film['#TITLE'], 
		id: film['#IMDB_ID'],
		rating: film['#RANK'],
		img: film['#IMG_POSTER'],
		inFavorites: checkFavorites(film['#IMDB_ID'])
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