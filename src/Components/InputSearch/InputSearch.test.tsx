import {screen, render} from '@testing-library/react';
import InputSearch from './InputSearch';
import { expect, test, vi } from 'vitest';
import {userEvent} from '@testing-library/user-event';

test('input renders', async () => {
	render(
		<InputSearch onSearch ={() => {}} />
	);
	await expect(await screen.findByTestId('input')).toBeInTheDocument();
});

test('user clicks ENTER key', async () => {
	const onSearch = vi.fn();
	render(
		<InputSearch onSearch ={onSearch} />
	);
	const input = screen.getByTestId('input');
	await userEvent.type( input, 'Harry');
	await userEvent.keyboard('{Enter}');

	expect(onSearch).toHaveBeenCalledWith('Harry');
});

test('user clicks SUBMIT button', async () => {
	const onSearch = vi.fn();
	render(
		<InputSearch onSearch ={onSearch} />
	);
	const input = screen.getByTestId('input');
	const button = screen.getByTestId('button');
	await userEvent.type( input, 'Harry');
	await userEvent.click(button);

	expect(onSearch).toHaveBeenCalledWith('Harry');
});