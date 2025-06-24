import styles from './HomePage.module.css';
import FilmList from '../../Components/FilmList/FilmList';
import Heading from '../../Components/Heading/Heading';
import InputSearch from '../../Components/InputSearch/InputSearch';
import Paragrah from '../../Components/Paragrah/Paragrah';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import axios from 'axios';
import { PREFIX } from '../../helpers/API';

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
	<>Enter the name of a movie, TV series or cartoon to search <br /> and add to favorites.</>
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
				console.error(error);
				setReceivedResults(false);
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
		<Heading headingText='Search' level={1} appearance='big'/>
		<Paragrah
			text={text}
			className={styles['text']} />
		<div>
			<InputSearch onSearch={ handleSearch} />
		</div>
		{	isLoading
			&& <p className='message-text'>Loading films...</p>}
		
		{!isLoading && (!receivedResults || isError) && (
			<Heading headingText='Oops... Nothing found' level={2} appearance='small' />
		)}

		
		{	!isLoading
			&& receivedResults
			&& <FilmList films={films} />}
	</div>;
	
}