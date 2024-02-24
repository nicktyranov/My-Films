import { HtmlHTMLAttributes } from 'react';

export interface HeadingProps extends HtmlHTMLAttributes<HTMLHeadingElement>{
	headingText: string,
	level: string | number,
	
}