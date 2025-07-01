import {render, screen} from '@testing-library/react';
import Menu from './Menu';
import { expect, test } from 'vitest';

test('renders menu', () => {
	render(
		<Menu />
	);
	expect(screen.getByText('My Films')).toBeInTheDocument();
});
