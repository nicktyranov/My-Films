import styles from './Error.module.css'

import FilmList from '../../Components/FilmList/FilmList';
import Heading from '../../Components/Heading/Heading';
import InputSearch from '../../Components/InputSearch/InputSearch';
import Login from '../../Components/Login/Login';
import Paragrah from '../../Components/Paragrah/Paragrah';

const text = (
	<>Введите название фильма, сериала или мультфильма для поиска <br /> и добавления в избранное.</>
);

export function Error() {
	return <div>
					<Heading headingText='Search' level={1} appearance='big'/>
					<Paragrah text = {text} />
					<InputSearch />
		<Heading headingText='Oops... Nothing found' level={2} appearance='small' />
					

		</div>
	
}