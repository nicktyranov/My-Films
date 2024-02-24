
import React from 'react';
import styles from './Heading.module.css';
import { HeadingProps } from './Heading.props';

function Heading({ headingText = 'Search', level = 1 }: HeadingProps) {
// 	let Tag = `h${level}`; 

// 	return (
// 		<Tag className={styles.heading}>{headingText}</Tag>
// 	);
	// }
	
	const Tag = `h${level}` as keyof JSX.IntrinsicElements; // Приведение типа к ключу JSX.IntrinsicElements

  return React.createElement(Tag, { className: styles.heading }, headingText);
}



export default Heading;