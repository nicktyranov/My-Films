import { configureStore } from '@reduxjs/toolkit';
import favoritesSlice from './favoritesSlice';
import userSlice from './userSlice';
import modalSlice from './modalSlice';

export const store = configureStore({
	reducer: {
		favorites: favoritesSlice,
		user: userSlice,
		modal: modalSlice
	}
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch