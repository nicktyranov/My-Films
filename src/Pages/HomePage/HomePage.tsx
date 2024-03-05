// import styles from './HomePage.module.css';

import FilmList from '../../Components/FilmList/FilmList';
import Heading from '../../Components/Heading/Heading';
import InputSearch from '../../Components/InputSearch/InputSearch';
import Paragrah from '../../Components/Paragrah/Paragrah';
import { useState } from 'react';
import axios from 'axios';
import { PREFIX } from '../../helpers/API';

const text = (
	<>Введите название фильма, сериала или мультфильма для поиска <br /> и добавления в избранное.</>
);

export function HomePage({isError}:{isError?:boolean}) {
	const [films, setFilms] = useState([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [recievedResults, setRecievedResults] = useState(true);

	const handleSearch = async(searchQuery: number | string) => {
		console.log(searchQuery);
		try {
			setIsLoading(true);
			const {data} = await axios.get(`${PREFIX}/?q=${encodeURIComponent(searchQuery)}`);
			console.log(data.description);
			if (data.description.length < 1) {
				console.log('nothing');
				setRecievedResults(false);
				setIsLoading(false);
				return;
			}
			setRecievedResults(true);
			setFilms(data.description);
			setIsLoading(false);
		} catch (e) {
			console.error(e);
			setRecievedResults(false);
			setIsLoading(false);
		}
		return; 
	};

	return <div>
		<Heading headingText='Search' level={1} appearance='big'/>
		<Paragrah text = {text} />
		<div>
			<InputSearch onSearch={ handleSearch} />
		</div>
		{	isLoading
			&& <>Loading films...</>}
		
		{	!isLoading
			&& !recievedResults
			&& <Heading headingText='Oops... Nothing found' level={2} appearance='small' />}
		
		{	isError
			&& <Heading headingText='Oops... Nothing found' level={2} appearance='small' />}


		{	!isLoading
			&& recievedResults
			&& <FilmList films={films} />}
	</div>;
	
}