import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';
import { expect, test, vi } from 'vitest';

test('Button renders correctly', () => {
	render(
		<Button textButton='test'/>
	);
	expect(screen.getByText('test')).toBe;
});

test('Button runs fn', async () => {
	const handleClick = vi.fn();

	render(
		<Button textButton='test2' onClick={handleClick}/>
	);
	const btn = screen.getByText('test2');
	await userEvent.click(btn);


	expect(handleClick).toHaveBeenCalled();
	expect(handleClick).toHaveBeenCalledTimes(1);
});

test('Button runs with other props', async () => {

	render(
		<Button textButton='test3' disabled={true}/>
	);
	expect(screen.getByText('test3')).toHaveProperty('disabled', true);
});