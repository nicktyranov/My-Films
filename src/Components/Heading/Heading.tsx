import React from 'react';
import styles from './Heading.module.css';
import cl from 'classnames';
import { HeadingProps } from './Heading.props';

function Heading({ headingText = 'Search', level = 1, appearance, ...props }: HeadingProps) {

	const className = cl({
		[styles['heading-big']]: appearance === 'big',
		[styles['heading-small']]: appearance === 'small',
		[styles['heading-smaller']]: appearance === 'smaller',
		[styles['heading-movie']]: appearance === 'movie'
	});

	const Tag = `h${level}`;

	// Объединяем класс с другими пропсами
	const elementProps = {
		...props,
		className: className
	};

	return React.createElement(Tag, elementProps, headingText);
}

export default Heading;
