
import { createContext, useState, useContext, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { favoritesSlice} from '../store/favoritesSlice';

// Определение интерфейса для контекста
interface CurrentUserContextType {
	isLogined: boolean;
	setIsLogined: (isLogined: boolean) => void;
	userName: string;
	setUserName: (userName: string) => void;
	logout: () => void; 
	
}

export const CurrentUserContext = createContext<CurrentUserContextType>({
	isLogined: false,
	setIsLogined: () => {},
	userName: '',
	setUserName: () => { },
	logout: () => {} 
});

export const useUserContext = () => useContext(CurrentUserContext);


// Типизация пропсов для провайдера
interface CurrentUserProviderProps {
  children: ReactNode;
}

export const CurrentUserProvider = ({ children }: CurrentUserProviderProps) => {
	const [isLogined, setIsLogined] = useState(false);
	const [userName, setUserName] = useState('');
	const dispatch = useDispatch();

	const logout = () => {
		let userDataStr;
		if (isLogined && userName) {
			userDataStr = localStorage.getItem(userName);
		}
						
		if (userDataStr) {
			const userData = JSON.parse(userDataStr);
			userData.isLogined = false;
			localStorage.setItem(userName, JSON.stringify(userData));
		}
		clearJwt(); // Удаление JWT из localStorage
		setIsLogined(false); // Сброс состояния авторизации
		setUserName(''); // Сброс имени пользователя
		dispatch(favoritesSlice.actions.resetFavorites());
	};
	
	return (
		<CurrentUserContext.Provider value={{ isLogined, setIsLogined, userName, setUserName, logout }}>
			{children}
		</CurrentUserContext.Provider>
	);
};

function clearJwt() {
	console.log('Clear JWT: перенаправление на страницу входа.');
	return localStorage.removeItem('jwt');
}