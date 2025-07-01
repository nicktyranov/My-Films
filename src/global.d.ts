// declare module '*.module.css';
// custom.d.ts

declare module '*.svg' {
	const content: string;
	export default content;
}

declare module '*.png' {
	const content: string;
	export default content;
}

declare module '*.jpg' {
	const content: string;
	export default content;
}

declare module '*.jpeg' {
	const content: string;
	export default content;
}

declare module '*.module.css' {
	const classes: { [key: string]: string };
	export default classes;
}
