import { configureStore } from '@reduxjs/toolkit';
import favoritesSlice from './favoritesSlice';
import userSlice from './userSlice';

export const store = configureStore({
	reducer: {
		favorites: favoritesSlice,
		user: userSlice
	}
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch