import { HtmlHTMLAttributes, ReactNode } from 'react';

export interface ParagrahProps extends HtmlHTMLAttributes<HTMLElement>{
	text: ReactNode,
}