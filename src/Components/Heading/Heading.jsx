
// import cl from 'classnames';
import styles from './Heading.module.css';

function Heading({ headingText = 'Search', level = 1 }) {
	const Tag = `h${level}`; 

	return (
		<Tag className={styles.heading}>{headingText}</Tag>
	);
}


export default Heading;