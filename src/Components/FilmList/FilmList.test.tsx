import {render, screen} from '@testing-library/react';
import {expect, test} from 'vitest';
import FilmList from './FilmList';
import { Film } from './FilmList.props';
import { store } from '../../store/store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

const films: Film[] = [
	{
		'#TITLE': 'The Shawshank Redemption',
		'#IMDB_ID': 'tt0000001',
		'#RANK': 1,
		'#IMG_POSTER': '/backUpImage.jpg',
		inFavorites: false
	},
	{
		'#TITLE': 'TEST 2',
		'#IMDB_ID': 'tt0000002',
		'#RANK': 2,
		'#IMG_POSTER': '/backUpImage.jpg',
		inFavorites: true
	},
	{
		'#TITLE': 'TEST 3',
		'#IMDB_ID': 'tt0000003',
		'#RANK': 20,
		'#IMG_POSTER': '/backUpImage.jpg',
		inFavorites: true
	}
];


test('filmList renders', () => {
	render(
		<Provider store={store}>
			<MemoryRouter>
				<FilmList films={films} />
			</MemoryRouter>
		</Provider>
	);
	expect(screen.getByText('The Shawshank Redemption')).toBeInTheDocument();
	expect(screen.getByText('TEST 2')).toBeInTheDocument();
	expect(screen.getByText('TEST 3')).toBeInTheDocument();
});

