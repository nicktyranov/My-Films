import { HtmlHTMLAttributes } from 'react';

export interface CardProps extends HtmlHTMLAttributes<HTMLElement> {
	id: string,
	inFavorites?: boolean,
	img: string,
	rating: string | number,
	title: string
}