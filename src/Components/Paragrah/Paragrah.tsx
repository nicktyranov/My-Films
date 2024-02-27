import styles from './Paragrah.module.css';
import { ParagrahProps } from './Paragrah.props';

function Paragrah({text}: ParagrahProps) {
	
	return (
		<p className={styles.text}>{text }</p>
	);
}

export default Paragrah;