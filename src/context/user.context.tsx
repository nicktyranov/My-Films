import { createContext, useState, useContext, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { favoritesSlice} from '../store/favoritesSlice';


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
		clearJwt();
		setIsLogined(false); 
		setUserName(''); 
		dispatch(favoritesSlice.actions.resetFavorites());
	};
	
	return (
		<CurrentUserContext.Provider value={{ isLogined, setIsLogined, userName, setUserName, logout }}>
			{children}
		</CurrentUserContext.Provider>
	);
};

function clearJwt() {
	return localStorage.removeItem('jwt');
}