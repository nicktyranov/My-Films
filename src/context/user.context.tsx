
import { createContext, useState, useContext, ReactNode } from 'react';

// Определение интерфейса для контекста
interface CurrentUserContextType {
  isLogined: boolean;
  setIsLogined: (isLogined: boolean) => void;
  userName: string;
  setUserName: (userName: string) => void;
}

export const CurrentUserContext = createContext<CurrentUserContextType>({
	isLogined: false,
	setIsLogined: () => {},
	userName: '',
	setUserName: () => {}
});

export const useUserContext = () => useContext(CurrentUserContext);

// Типизация пропсов для провайдера
interface CurrentUserProviderProps {
  children: ReactNode;
}

export const CurrentUserProvider = ({ children }: CurrentUserProviderProps) => {
	const [isLogined, setIsLogined] = useState(false);
	const [userName, setUserName] = useState('');
	
	return (
		<CurrentUserContext.Provider value={{ isLogined, setIsLogined, userName, setUserName }}>
			{children}
		</CurrentUserContext.Provider>
	);
};

