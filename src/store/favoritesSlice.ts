import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface FavoriteItem {
	key?: string;
	id: string;
	img: string;
	rating: string | number;
	title: string;
	userName: string;
	inFavorites?: boolean;
}

export type Favorites = {
  items: FavoriteItem[];
}

const initialStateValue = (): Favorites => {
	try {
		const userName = localStorage.getItem('lastLoggedInUser');
		if (!userName) {
			return { items: [] };
		}
		const existData = localStorage.getItem(userName);
		if (!existData) {
			return { items: [] };
		}

		const data = JSON.parse(existData);
		if (data.userFavorites && Array.isArray(data.userFavorites)) {

			return { items: data.userFavorites };
		} else {
			return { items: [] }; 
		}

	} catch (e) {
		throw new Error(`${e}`);
	}
};

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState: initialStateValue(),
	reducers: {
		addToFavorites: (state, action: PayloadAction<FavoriteItem>) => {
			const existData = localStorage.getItem(action.payload.userName);
			const existDataFavorites = existData
				? JSON.parse(existData)
				: {
					name: action.payload.userName,
					isLogined: true,
					userFavorites: []
				};

			const indexInLocalStorage = existDataFavorites.userFavorites.findIndex((film: FavoriteItem) => film.id === action.payload.id);
			// -1 = not found
			if (indexInLocalStorage !== -1) {
				existDataFavorites.userFavorites.splice(indexInLocalStorage, 1);
			} else {
				existDataFavorites.userFavorites.push({
					id: action.payload.id,
					title: action.payload.title,
					img: action.payload.img,
					rating: action.payload.rating
				});
			}
			localStorage.setItem(action.payload.userName, JSON.stringify(existDataFavorites));
			state.items = existDataFavorites.userFavorites;
		},
		resetFavorites: (state) => {
			const initialStateUser = initialStateValue(); 
			state.items = initialStateUser.items;
		},
		loadFavorites: (state) => {
			const userName = localStorage.getItem('lastLoggedInUser');
			if (!userName) {
				return;
			}
			const existData = localStorage.getItem(userName);
			if (!existData) {
				return;
			}
			const data = JSON.parse(existData);
			state.items = data.userFavorites;
		}
	}
	
});

export const favoriteFilms = (state: RootState) => state.favorites.items;

export const { addToFavorites, resetFavorites, loadFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;