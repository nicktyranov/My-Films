
import  { useState, useRef } from 'react'; 
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import styles from './Login.module.css';
import Paragraf from '../Paragraf/Paragraf';

function Login({isLogined, setIsLogined }) {
	const headingText = 'Login';
	const placeholder = 'Enter your name';
	const textButton = 'Login';
	const buttonLoginRef = useRef(null);

	const [userName, setUserName] = useState(''); 

	function onClick() {
		console.log(userName);
		const userDataStr = localStorage.getItem(userName);

		if (!userDataStr) {
			console.log('пусто');
			console.log('создаю новый профиль');
			// Сохраняем данные пользователя как объект
			const userData = {
				name: userName,
				isLogined: true, 
				userFavorites: []
			};
			localStorage.setItem(userName, JSON.stringify(userData));
			console.log('новый профиль создан');
		} else {
			console.log('профиль найден');
		}
		localStorage.setItem('lastLoggedInUser', userName);
		setIsLogined(true);
	}

	const loginMessage = isLogined ? (
		<Paragraf text={'Success'} />
	) : null;


	function handleChange(event) {
		setUserName(event.target.value); // Обновление состояния при каждом вводе в инпут
	}

	return (
		<div className={styles['login_wrapper']}>
			<Heading headingText={headingText} />
			<input 
				type="text" 
				placeholder={placeholder} 
				className={styles['input_login']}
				value={userName} 
				onChange={handleChange}
				id='loginName'
			/>
			<Button ref={buttonLoginRef} textButton={textButton} onClick={onClick} />
			{loginMessage}
		</div>
	);
}

export default Login;
