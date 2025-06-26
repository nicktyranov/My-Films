import FilmList from '../../Components/FilmList/FilmList';
import Heading from '../../Components/Heading/Heading';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Film } from '../../Components/FilmList/FilmList.props';
import { Helmet } from 'react-helmet';

export function Favorites() {
	const favoritesData = useSelector((state: RootState) => state.favorites.items);

	const films: Film[] = favoritesData.map((film) => ({
		'#TITLE': film.title || '',
		'#IMDB_ID': film.id,
		'#RANK': film.rating,
		'#IMG_POSTER': film.img || ''
	}));

	return <>
		<div>
			<Helmet>
				<title>My Films | Favorites</title>
				<meta name="description" content="Your list of favorite movies" />
			</Helmet>
			<Heading headingText='Favorites' level={1} appearance='big' />
			<FilmList films={films}/>
		</div>
	</>;
}
