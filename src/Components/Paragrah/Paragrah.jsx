import styles from './Paragrah.module.css';
// import cl from 'classnames';

function Paragrah({text}) {
	

	return (
		<p className={styles.text}>{text }</p>
	);
}

export default Paragrah;