
import { useNavigate } from 'react-router-dom';
import { RequireAuthProps } from './RequireAuth.props';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { userSlice } from '../../store/userSlice';
import { useEffect } from 'react';

export function RequireAuth ({ children }: RequireAuthProps) {
	const isLogined = useSelector((state: RootState) => state.user.isLogined);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (!isLogined && !checkJWTexpirationTime()) {
			console.log('Нет JWT или JWT просрочен: перенаправление на страницу входа.');
			clearJwt();
			navigate('/login', { replace: true });
		} else if (!isLogined && checkJWTexpirationTime()) {
			const currentUser = localStorage.getItem('lastLoggedInUser');
			
			if (currentUser) {
				dispatch(userSlice.actions.login({ inputUserName: currentUser }));
			} else {
				console.log('JWT действителен, но нет сохранённого пользователя: перенаправление на страницу входа.');
				clearJwt();
				navigate('/login', { replace: true });
			}
		}
	}, [isLogined, dispatch, navigate]);

	// Возвращаем children без условия, так как условие редиректа обрабатывается в useEffect
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