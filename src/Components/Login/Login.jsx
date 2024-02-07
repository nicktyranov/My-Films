
import  { useState, useRef, useContext } from 'react'; 
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import styles from './Login.module.css';
import Paragraf from '../Paragraf/Paragraf';
import { CurrentUserContext } from '../../context/user.context';

function Login() {
	const headingText = 'Login';
	const placeholder = 'Enter your name';
	const textButton = 'Login';
	const buttonLoginRef = useRef(null);

	const [InputUserName, setInputUserName] = useState(''); 
	const {isLogined, setIsLogined, setUserName } = useContext(CurrentUserContext);

	function onClick() {
		console.log(InputUserName);
		const userDataStr = localStorage.getItem(InputUserName);

		if (!userDataStr) {
			console.log('пусто');
			console.log('создаю новый профиль');
			// Сохраняем данные пользователя как объект
			const userData = {
				name: InputUserName,
				isLogined: true, 
				userFavorites: []
			};
			localStorage.setItem(InputUserName, JSON.stringify(userData));
			console.log('новый профиль создан');
		} else {
			console.log('профиль найден');
		}
		localStorage.setItem('lastLoggedInUser', InputUserName);
		setIsLogined(true);
		//чтобы обновить глобальный UserName
		setUserName(InputUserName);
	}

	const loginMessage = isLogined ? (
		<Paragraf text={'Success'} />
	) : null;


	function handleChange(event) {
		setInputUserName(event.target.value); // Обновление состояния при каждом вводе в инпут
	}

	return (
		<div className={styles['login_wrapper']}>
			<Heading headingText={headingText} />
			<input 
				type="text" 
				placeholder={placeholder} 
				className={styles['input_login']}
				value={InputUserName} 
				onChange={handleChange}
				id='loginName'
			/>
			<Button ref={buttonLoginRef} textButton={textButton} onClick={onClick} />
			{loginMessage}
		</div>
	);
}

export default Login;
