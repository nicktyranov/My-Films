import { HtmlHTMLAttributes } from 'react';

export interface CardProps extends HtmlHTMLAttributes<HTMLElement> {
	inFavorites: boolean,
	img: string,
	rating: string | number,
	heading: string
}