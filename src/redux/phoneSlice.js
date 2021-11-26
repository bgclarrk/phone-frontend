import { createSlice } from '@reduxjs/toolkit';

export const phoneSlice = createSlice({
    name: 'call',
    initialState: {
        phoneNumber: "123",
        duration: 0
    },
    reducers: {
        addNumber: (state, action) => {
            state.phoneNumber = state.phoneNumber + action.payload;
        },
    },
});

export const { addNumber } = phoneSlice.actions;

export default phoneSlice.reducer;