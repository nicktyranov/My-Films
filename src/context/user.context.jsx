
import { createContext, useState, useContext } from 'react';

export const CurrentUserContext = createContext({
	isLogined: false,
	setIsLogined: () => {},
	userName: '',
	setUserName: () => {}
});

export const useUserContext = () => useContext(CurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
	const [isLogined, setIsLogined] = useState(false);
	const [userName, setUserName] = useState('');
	
	return (
		<CurrentUserContext.Provider value={{ isLogined, setIsLogined, userName, setUserName }}>
			{children}
		</CurrentUserContext.Provider>
	);
};

