import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserInterface {
	userName: string;
    isLogined: boolean;
    userFavorites: string[]; 
}

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		userName: '',
		isLogined: false, 
		userFavorites: []
	},
	reducers: {
		login: (state, action: PayloadAction<InputUserName>) => {
			const inputUserName = action.payload.inputUserName;
			
			if (!inputUserName.trim()) {
				return;
			}

			console.log(inputUserName);
			const userDataStr = localStorage.getItem(inputUserName);

			const userData = {
				userName: inputUserName,
				isLogined: true, 
				userFavorites: []
			};
		
			if (!userDataStr) {
				console.log('пусто');
				console.log('создаю новый профиль');
				// Сохраняем данные пользователя как объект
			
				localStorage.setItem(inputUserName, JSON.stringify(userData));
				console.log('новый профиль создан');
			} else {
				console.log('профиль найден');
				const userData = JSON.parse(userDataStr);
				userData.isLogined = true; 
				localStorage.setItem(inputUserName, JSON.stringify(userData));
			
			}
			jwt();
			localStorage.setItem('lastLoggedInUser', inputUserName);
			state.userName = inputUserName;
			state.isLogined = true;
			console.log(state.userName);
		},
		logout: (state) => {
			// const userName = state.userName;
			let userDataStr;
			if (state.isLogined && state.userName) {
				userDataStr = localStorage.getItem(state.userName);
			}
						
			if (userDataStr) {
				const userData = JSON.parse(userDataStr);
				userData.isLogined = false;
				localStorage.setItem(state.userName, JSON.stringify(userData));
			}
			state.isLogined = false;
			localStorage.setItem('lastLoggedInUser', '');
			clearJwt(); // Удаление JWT из localStorage
			
		}
		
	}
});

export type InputUserName = {
	inputUserName: string 
}

function jwt() {
	const expiresIn = 24 * 60 * 60 * 1000; // Срок действия 1 день в миллисекундах
	const expirationTime = new Date().getTime() + expiresIn;
	localStorage.setItem('jwt', JSON.stringify({
		'jwt_expiration': expirationTime
	}));
}

function clearJwt() {
	console.log('Clear JWT: перенаправление на страницу входа.');
	return localStorage.removeItem('jwt');
}

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;