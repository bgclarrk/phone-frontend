import { createSlice } from '@reduxjs/toolkit';

export const phoneSlice = createSlice({
    name: 'call',
    initialState: {
        phoneNumber: "",
        duration: 0,
    },
    reducers: {
        addNumber: (state, action) => {
            state.phoneNumber = state.phoneNumber + action.payload;
        },
        setDuration: (state, action) => {
            state.duration = action.payload;
        },
    },
});

export const { addNumber, setDuration } = phoneSlice.actions;

export default phoneSlice.reducer;