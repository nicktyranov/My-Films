import styles from './HomePage.module.css';
import FilmList from '../../Components/FilmList/FilmList';
import Heading from '../../Components/Heading/Heading';
import InputSearch from '../../Components/InputSearch/InputSearch';
import Paragraph from '../../Components/Paragraph/Paragraph';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { PREFIX } from '../../helpers/API';
import { Helmet } from 'react-helmet';

interface Film {
  '#TITLE': string;
  '#YEAR': number;
  '#IMDB_ID': string;
  '#RANK': number;
  '#ACTORS': string;
  '#AKA': string;
  '#IMDB_URL': string;
  '#IMDB_IV': string;
  '#IMG_POSTER': string;
  photo_width: number;
  photo_height: number;
}

const text = (
	<>Enter the name of a movie, TV series or cartoon to search and add to favorites.</>
);
const filmsLimit = 12;

export function HomePage({isError}:{isError?:boolean}) {
	const [films, setFilms] = useState<Film[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [receivedResults, setReceivedResults] = useState(true);
	const [searchParams, setSearchParams] = useSearchParams();

	const searchQuery = searchParams.get('q') || '';

	useEffect(() => {
		if (!searchQuery.trim()) {
			setFilms([]);
			setReceivedResults(false);
			return;
		}

		const fetchData = async () => {
			try {
				setIsLoading(true);
				const { data } = await axios.get(`${PREFIX}/?q=${encodeURIComponent(searchQuery)}`);
				if (!data.description?.length) {
					setReceivedResults(false);
					setFilms([]);
				} else {
					const sortedResults: Film[] = [...data.description]
						.filter(f => f['#RANK'] !== 0)
						.sort((a, b) => b['#RANK'] - a['#RANK'])
						.slice(0, filmsLimit);
					setFilms(sortedResults);
					setReceivedResults(true);
				}
			} catch (error) {
				throw new Error(`${error}`);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [searchQuery]);

	const handleSearch = (query: string) => {
		setSearchParams({ q: query });
	};

	return <div className={styles['content-wrapper']}>
		<Helmet>
			<title>My Films</title>
			<meta name="description" content="YSearch for movies using real-time IMDb data. Discover trending titles and save your favorites for later" />
		</Helmet>
		<Heading headingText='Search' level={1} appearance='small'/>
		<Paragraph
			text={text}
			className={styles['text']} />
		<div>
			<InputSearch onSearch={ handleSearch} />
		</div>
		{	isLoading
			&& <p className='message-text'>Loading films...</p>}
		
		

		
		{	!isLoading
			&& receivedResults
			&& <FilmList films={films} />}

		{!isLoading && !isError && !receivedResults && (
			<Heading headingText='Search for movies using real-time IMDb data. Discover trending titles and save your favorites for later.
' level={4} appearance='smaller' />
		)}

		{!isLoading && (!receivedResults && isError) && (
			<Heading headingText='Oops... Nothing found' level={2} appearance='small' />
		)}
	</div>;
	
}