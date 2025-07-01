import {render, screen} from '@testing-library/react';
import Modal from './Modal';
import { expect, test } from 'vitest';
import { Provider } from 'react-redux';
import { modalSlice } from '../../store/modalSlice';
import { configureStore } from '@reduxjs/toolkit';

const testStore = configureStore({
	reducer: {
		modal: modalSlice.reducer
	},
	preloadedState: {
		modal: {
			isOpen: true,
			message: 'Test01'
		}
	}
});

test('renders menu', () => {
	render(
		<Provider store={testStore}>
			<Modal />
		</Provider>
	);
	expect(screen.getByText('Test01')).toBeInTheDocument();
});
