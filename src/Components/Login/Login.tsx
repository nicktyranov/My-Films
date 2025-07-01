import { useState, useRef, ChangeEvent } from 'react';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import styles from './Login.module.css';
import Paragraph from '../Paragraph/Paragraph';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { favoritesSlice } from '../../store/favoritesSlice';
import { userSlice } from '../../store/userSlice';
import { RootState } from '../../store/store';

const headingText = 'Login';
const placeholder = 'Enter your name';
const textButton = 'Login';

function Login() {
	const buttonLoginRef = useRef(null);
	const [inputUserName, setInputUserName] = useState('');
	const dispatch = useDispatch();

	const isLogined = useSelector((state: RootState) => state.user.isLogined);

	function onClick() {
		if (!inputUserName.trim()) {
			return;
		}
		dispatch(userSlice.actions.login({ inputUserName: inputUserName }));
		dispatch(favoritesSlice.actions.loadFavorites());
	}

	const loginMessage = isLogined ? <Paragraph text={'Success'} /> : null;

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setInputUserName(event.target.value);
	}

	if (isLogined) {
		return <Navigate to="/" />;
	}

	return (
		<div className={styles['login_wrapper']} data-testid="loginForm">
			<Heading headingText={headingText} level={1} appearance="big" />
			<input
				type="text"
				placeholder={placeholder}
				className={styles['input_login']}
				value={inputUserName}
				onChange={handleChange}
				id="loginName"
			/>
			<Button ref={buttonLoginRef} textButton={textButton} onClick={onClick} />
			{loginMessage}
		</div>
	);
}

export default Login;
