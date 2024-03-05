
import { Navigate } from 'react-router-dom';
import { RequireAuthProps } from './RequireAuth.props';
import { useUserContext } from '../../context/user.context';

export function RequireAuth ({ children }: RequireAuthProps) {
	const { isLogined } = useUserContext();
	
	if (!isLogined) {
		clearJwt();
	}
	
	const jwt = localStorage.getItem('jwt');
	const isValidJWT = checkJWTexpirationTime();
	if (!isValidJWT) {
		clearJwt();
	}

	if (!jwt || !isValidJWT) {
		console.log('Нет JWT: перенаправление на страницу входа.');
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
		return;
	}
	const jwtObj = JSON.parse(jwt); // {jwt_expiration: 1709692987170}
	const expirationTime =jwtObj['jwt_expiration'];
	const currentTime = new Date().getTime();

	return expirationTime && currentTime <= parseInt(expirationTime);
}