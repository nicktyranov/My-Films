import {render, screen} from '@testing-library/react';
import Paragraph from './Paragraph';
import { expect, test } from 'vitest';

test('renders menu', () => {
	render(
		<Paragraph text="test001" />
	);
	expect(screen.getByText('test001')).toBeInTheDocument();
});

test('renders menu', () => {
	render(
		<Paragraph text="test002" className='styleTest' />
	);
	expect(screen.getByText('test002')).toHaveClass('styleTest');
});