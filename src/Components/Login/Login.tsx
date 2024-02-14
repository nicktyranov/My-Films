
import  { useState, useRef, ChangeEvent } from 'react'; 
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import styles from './Login.module.css';
import Paragrah from '../Paragrah/Paragrah';
import { useUserContext } from '../../context/user.context';

const headingText = 'Login';
const placeholder = 'Enter your name';
const textButton = 'Login';

function Login() {
	const buttonLoginRef = useRef(null);
	const [InputUserName, setInputUserName] = useState(''); 
	const {isLogined, setIsLogined, setUserName } = useUserContext();

	function onClick() {
		if (!InputUserName.trim()) {
			return;
		}

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
			const userData = JSON.parse(userDataStr);
			userData.isLogined = true; 
			localStorage.setItem(InputUserName, JSON.stringify(userData));
		}
		localStorage.setItem('lastLoggedInUser', InputUserName);
		setIsLogined(true);
		//чтобы обновить глобальный UserName
		setUserName(InputUserName);
	}

	const loginMessage = isLogined ? (
		<Paragrah text={'Success'} />
	) : null;


	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setInputUserName(event.target.value); // Обновление состояния при каждом вводе в инпут
	}

	return (
		<div className={styles['login_wrapper']}>
			<Heading headingText={headingText} level={1}/>
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
