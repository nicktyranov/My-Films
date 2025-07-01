import { HtmlHTMLAttributes, ReactNode } from 'react';

export interface ParagraphProps extends HtmlHTMLAttributes<HTMLElement>{
	text: ReactNode,
	className?: string
}