
import { createContext, useState } from 'react';

export const CurrentUserContext = createContext({
	isLogined: false,
	setIsLogined: () => {},
	userName: '',
	setUserName: () => {}
});

export const CurrentUserProvider = ({ children }) => {
	const [isLogined, setIsLogined] = useState(false);
	const [userName, setUserName] = useState('');

	return (
		<CurrentUserContext.Provider value={{ isLogined, setIsLogined, userName, setUserName }}>
			{children}
		</CurrentUserContext.Provider>
	);
};


// export const UserContext = createContext({
// 	userId: 1
// });

// export const UserContextProvidev = ({ children }) => {
// 	const [userId, setUserId] = useState(1);

// 	return <UserContext.Provider value={{ userId, setUserId }}>
// 		{children}
// 	</UserContext.Provider>;
// };
