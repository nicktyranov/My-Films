import {render, screen} from '@testing-library/react';
import { RequireAuth } from './RequireAuth';
import { expect, test } from 'vitest';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../../store/userSlice';

const testStore = configureStore({
	reducer: {
		user: userSlice.reducer
	},
	preloadedState: {
		user: {
			userName: '',
			isLogined: true,
			userFavorites: []
		}
	}
});

test('render RequireAuth', () => {
	render(
		<Provider store={testStore}>
			<MemoryRouter>
				<RequireAuth>
					<div>Hello Test</div>
				</RequireAuth>
			</MemoryRouter>
		</Provider>
	);
	expect(screen.getByText('Hello Test')).toBeInTheDocument();
});