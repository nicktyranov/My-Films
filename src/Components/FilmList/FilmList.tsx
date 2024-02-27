import { useState } from 'react';
import Card from '../Card/Card';
import filmData from '../../mock/filmData';
// import cl from 'classnames';
import styles from './FilmList.module.css';

function FilmList() {
	//еще может пригодится этот код
	// const INITIAL_DATA = [
	// 	{
	// 		id: 1,
	// 		img: '../../public/BlackWidow.jpg',
	// 		rating: 324,
	// 		heading: 'Black Widow',
	// 		inFavorites: false

	// 	},
	// 	{
	// 		id: 2,
	// 		img: '../../public/Shang-Chi.png',
	// 		rating: 124,
	// 		heading: 'Shang-Chi',
	// 		inFavorites: false
			
	// 	},
	// 	{
	// 		id: 3,
	// 		img: '../../public/Loki.jpg',
	// 		rating: 235,
	// 		heading: 'Loki',
	// 		inFavorites: false
			
	// 	},
	// 	{
	// 		id: 4,
	// 		img: '../../public/HowIMetYourMother.jpg',
	// 		rating: 123,
	// 		heading: 'How I Met Your Mother',
	// 		inFavorites: false
			
	// 	},
	// 	{
	// 		id: 5,
	// 		img: '../../public/MoneyHeist.png',
	// 		rating: 8125,
	// 		heading: 'Money Heist',
	// 		inFavorites: true
			
	// 	},
	// 	{
	// 		id: 6,
	// 		img: '../../public/Friends.jpg',
	// 		rating: 123,
	// 		heading: 'Friends',
	// 		inFavorites: false
	// 	},
	// 	{
	// 		id: 7,
	// 		img: '../../public/TheBigBangTheory.png',
	// 		rating: 12,
	// 		heading: 'The Big Bang Theory',
	// 		inFavorites: false
			
	// 	},
	// 	{
	// 		id: 8,
	// 		img: '../../public/TwoAndaHalfMen.png',
	// 		rating: 456,
	// 		heading: 'Two And a Half Men',
	// 		inFavorites: false
	// 	}];

	const [films, setFilms] = useState(filmData);

	const list = films.map((film) => (
		console.log([film.id, film.img]),

		<Card
			key={film.id}
			inFavorites={film.inFavorites}
			img={film.img}
			rating={film.rating}
			heading={film.heading}
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