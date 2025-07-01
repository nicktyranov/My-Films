import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
	isOpen?: boolean;
	message: string;
}

export const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		isOpen: false,
		message: ''
	},
	reducers: {
		showModal(state, action: PayloadAction<ModalState>) {
			state.message = action.payload.message;
			state.isOpen = true;
		},
		hideModal(state) {
			state.message = '',
			state.isOpen = false;
		}
	}
});

export const {showModal, hideModal} = modalSlice.actions;
export default modalSlice.reducer;