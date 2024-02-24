import styles from './HomePage.module.css'

import FilmList from '../../Components/FilmList/FilmList';
import Heading from '../../Components/Heading/Heading';
import InputSearch from '../../Components/InputSearch/InputSearch';
import Paragrah from '../../Components/Paragrah/Paragrah';


const text = (
	<>Введите название фильма, сериала или мультфильма для поиска <br /> и добавления в избранное.</>
);

export function HomePage() {
	return <div>
					<Heading headingText='Search' level={1} appearance='big'/>
					<Paragrah text = {text} />
					<div>
						<InputSearch />
					</div>
		<FilmList />
		</div>
	
}