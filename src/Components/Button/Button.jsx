import styles from './Button.module.css';
import cl from 'classnames';

function Button({textButton = 'Search'}) {

	const onClick = () => {
		console.log('Clicked');
	};

	return (
		<button className={styles.button} onClick={onClick}>{ textButton}</button>
	);
}

export default Button;