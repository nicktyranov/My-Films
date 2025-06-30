import {render, screen} from '@testing-library/react';
import Card from './Card';
import { CardProps } from './Card.props';
import { expect, test } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { MemoryRouter } from 'react-router-dom';
import  '@testing-library/jest-dom';


const testData:CardProps = {
	id: '1',
	inFavorites: false,
	img: './Friends.jpg',
	rating: 1,
	title: 'Friends'
};

const testData2:CardProps = {
	id: '1',
	inFavorites: true,
	img: './Friends.jpg',
	rating: 1,
	title: 'Friends'
};

test('renders Card without being inFavorites', () => {
	render(
		<Provider store={store}>
			<MemoryRouter>
				<Card {...testData}  />
			</MemoryRouter>
		</Provider>
	);
});

test('renders Card being inFavorites', () => {
	render(
		<Provider store={store}>
			<MemoryRouter>
				<Card {...testData2}  />
			</MemoryRouter>
		</Provider>
	);
});

test('renders Card with Img', () => {
	render(
		<Provider store={store}>
			<MemoryRouter>
				<Card {...testData2} />
			</MemoryRouter>
		</Provider>
	);
	expect(screen.getByTestId('cardImg')).toHaveAttribute('src', './Friends.jpg');
});

const testData3:CardProps = {
	id: '1',
	inFavorites: true,
	img: '',
	rating: 1,
	title: 'Friends'
};

test('renders Card with BackupImg', () => {
	render(
		<Provider store={store}>
			<MemoryRouter>
				<Card {...testData3} />
			</MemoryRouter>
		</Provider>
	);
	expect(screen.getByTestId('cardImg')).toHaveAttribute('src', '/backUpImage.jpg');
});

test('renders starIcon on the card', () => {
	render(
		<Provider store={store}>
			<MemoryRouter>
				<Card {...testData3} />
			</MemoryRouter>
		</Provider>
	);
	expect(screen.getByTestId('starIcon')).toBeInTheDocument();
});

const testData4:CardProps = {
	id: '1',
	inFavorites: true,
	img: '',
	rating: 1,
	title: 'Friends'
};

test('renders rating on the card', () => {
	render(
		<Provider store={store}>
			<MemoryRouter>
				<Card {...testData4} />
			</MemoryRouter>
		</Provider>
	);
	expect(screen.getByTestId('ratingNum')).toBeInTheDocument();
});

const testData5:Partial<CardProps> = {
	id: '1',
	inFavorites: true,
	img: '',
	// rating: '',
	title: 'Friends'
};
test('renders card without rating', () => {
	render(
		<Provider store={store}>
			<MemoryRouter>
				<Card {...(testData5 as CardProps)} />
			</MemoryRouter>
		</Provider>
	);
	expect(screen.getByTestId('ratingNum')).toBeInTheDocument();
});

const testData6:CardProps = {
	id: '1',
	inFavorites: true,
	img: '',
	rating: 1,
	title: 'Friends'
};

test('renders card heading', () => {
	render(
		<Provider store={store}>
			<MemoryRouter>
				<Card {...testData6} />
			</MemoryRouter>
		</Provider>
	);
	expect(screen.getByTestId('cardHeading')).toBeInTheDocument();
	expect(screen.getByTestId('cardHeading').textContent?.length).toBeGreaterThan(0);
});

test('renders favorite icon', () => {
	render(
		<Provider store={store}>
			<MemoryRouter>
				<Card {...testData6} />
			</MemoryRouter>
		</Provider>
	);
	expect(screen.getByTestId('iconFavorite').getAttribute('src')).toContain('like.svg');
});


