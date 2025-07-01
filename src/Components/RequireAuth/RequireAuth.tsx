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
			clearJwt();
			navigate('/login', { replace: true });
		} else if (!isLogined && checkJWTexpirationTime()) {
			const currentUser = localStorage.getItem('lastLoggedInUser');
			
			if (currentUser) {
				dispatch(userSlice.actions.login({ inputUserName: currentUser }));
			} else {
				clearJwt();
				navigate('/login', { replace: true });
			}
		}
	}, [isLogined, dispatch, navigate]);

	return children;
}

function clearJwt() {
	return localStorage.removeItem('jwt');
}

function checkJWTexpirationTime() {
	const jwt = localStorage.getItem('jwt');
	if (!jwt) {
		return false;
	}
	const jwtObj = JSON.parse(jwt); // {jwt_expiration: 1709692987170}
	const expirationTime =jwtObj['jwt_expiration'];
	const currentTime = new Date().getTime();
	

	return expirationTime && currentTime <= parseInt(expirationTime);
}