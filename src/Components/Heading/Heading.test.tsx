import {render, screen} from '@testing-library/react';
import {test, expect} from 'vitest';
import Heading from './Heading';
import { HeadingProps } from './Heading.props';

const testData: HeadingProps = {
	headingText: 'Hello World',
	level: 1,
	appearance: 'big'  

};

test('renders heading', () => {
	render(
		<Heading {...testData}/>
	);
	expect(screen.getByText('Hello World')).toBeInTheDocument();
});

