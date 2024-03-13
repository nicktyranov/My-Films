import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';


export interface FavoriteItem {
	key: string;
	id: string;
	img: string;
	rating: string | number;
	title: string;
	userName: string;
	inFavorites: boolean;
}

export type Favorites = {
  items: FavoriteItem[];
}

const initialStateValue = (): Favorites => {
	try {
		const userName = localStorage.getItem('lastLoggedInUser');
		console.log(userName);
		if (!userName) {
			return { items: [] };
		}
		const existData = localStorage.getItem(userName);
		console.log(existData);
		if (!existData) {
			return { items: [] };
		}

		const data = JSON.parse(existData);
		console.log(data);
		if (data.userFavorites && Array.isArray(data.userFavorites)) {

			return { items: data.userFavorites };
		} else {
			return { items: [] }; // Возвращаем пустой массив, если userFavorites отсутствует или не является массивом
		}

	} catch (e) {
		console.error(e);
		return { items: [] }; // Возвращаем пустой массив в случае ошибки
	}
};


export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState: initialStateValue(),
	reducers: {
		addToFavorites: (state, action: PayloadAction<FavoriteItem>) => {
			// Загружаем данные пользователя
			const existData = localStorage.getItem(action.payload.userName);
			const existDataFavorites = existData
				? JSON.parse(existData)
				: {
					name: action.payload.userName,
					isLogined: true,
					userFavorites: []
				};

			// Проверяем, находится ли фильм уже в избранных
			const indexInLocalStorage = existDataFavorites.userFavorites.findIndex((film: FavoriteItem) => film.id === action.payload.id);
			// -1 = не найдено
			if (indexInLocalStorage !== -1) {
				// Если фильм найден в избранных, удаляем его
				existDataFavorites.userFavorites.splice(indexInLocalStorage, 1);
			} else {
				// Если фильм не найден, добавляем его в избранные
				existDataFavorites.userFavorites.push({
					id: action.payload.id,
					title: action.payload.title,
					img: action.payload.img,
					rating: action.payload.rating
				});
			}

			// Сохраняем обновленные данные пользователя в localStorage
			localStorage.setItem(action.payload.userName, JSON.stringify(existDataFavorites));

			// Синхронизируем состояние Redux с обновленными данными
			state.items = existDataFavorites.userFavorites;
		},
		resetFavorites: (state) => {
			const initialStateUser = initialStateValue(); // Это ваша функция загрузки начального состояния
			state.items = initialStateUser.items;
		},
		loadFavorites: (state, action: PayloadAction<FavoriteItem[]>) => {
			state.items = action.payload;
			
		}
	}
	
});

export const favoriteFilms = (state: RootState) => state.favorites.items;

export const { addToFavorites, resetFavorites, loadFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;