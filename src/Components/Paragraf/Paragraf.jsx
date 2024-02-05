import styles from './Paragraf.module.css';
// import cl from 'classnames';

function Paragraf({text}) {
	

	return (
		<p className={styles.text}>{text }</p>
	);
}

export default Paragraf;