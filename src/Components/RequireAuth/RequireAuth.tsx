
import { Navigate } from 'react-router-dom';
import { RequireAuthProps } from './RequireAuth.props';
import { useUserContext } from '../../context/user.context';

export function RequireAuth ({ children }: RequireAuthProps) {
	const { isLogined, setIsLogined, setUserName } = useUserContext();
	if (!isLogined) {
		console.log('Запускаю проверку JWT');
		const isValidJWT = checkJWTexpirationTime();

		if (isValidJWT) {
			const currentUser = localStorage.getItem('lastLoggedInUser');
			if (currentUser) {
				setUserName(currentUser);
				setIsLogined(true);
				console.log('JWT действителен: пользователь авторизован.');
				return children;
			} else {
				console.log('Нет сохранённого пользователя: перенаправление на страницу входа.');
				clearJwt();
			}
		}
		console.log('Нет JWT (JWT просрочен): перенаправление на страницу входа.');
		return <Navigate to='/login' replace />;
	}

	console.log('JWT найден: пользователь авторизован.');
	return children;

}


function clearJwt() {
	console.log('Clear JWT: перенаправление на страницу входа.');
	return localStorage.removeItem('jwt');
}

function checkJWTexpirationTime() {
	//загружаем из localStorage
	const jwt = localStorage.getItem('jwt');
	//распарсиваем
	if (!jwt) {
		return false;
	}
	const jwtObj = JSON.parse(jwt); // {jwt_expiration: 1709692987170}
	const expirationTime =jwtObj['jwt_expiration'];
	const currentTime = new Date().getTime();
	console.log(currentTime);

	return expirationTime && currentTime <= parseInt(expirationTime);
}