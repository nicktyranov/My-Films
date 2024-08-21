
import Heading from '../../Components/Heading/Heading';
import InputSearch from '../../Components/InputSearch/InputSearch';
import Paragrah from '../../Components/Paragrah/Paragrah';
// import styles from './Error.module.css';

const text = (
	<>Введите название фильма, сериала или мультфильма для поиска <br /> и добавления в избранное.</>
);

const handleSearch = (query: string) => {
	console.log('Search query:', query);
};

export function Error() {
	return <div>
		<Heading headingText='Search' level={1} appearance='big' />
		<Paragrah text={text} />
		<InputSearch onSearch={handleSearch} />
		<Heading headingText='Oops... Nothing found' level={2} appearance='small' />
	</div>;
}