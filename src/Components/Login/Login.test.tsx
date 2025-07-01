import {render, screen} from '@testing-library/react';
import Login from './Login';
import { expect, test } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

test('renders login page', () => {
	render(
		<Provider store={store}>
			<Login />
		</Provider>
	);
	expect(screen.getByTestId('loginForm')).toBeInTheDocument();
});