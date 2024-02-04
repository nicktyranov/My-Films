
// import cl from 'classnames';
import styles from './Heading.module.css';

function Heading({headingText = 'Search'}, {level = 1}) {


	return (
		<h1 className={styles.heading}>{ headingText}</h1>
	);
}

export default Heading;