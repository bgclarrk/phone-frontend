import { createSlice } from '@reduxjs/toolkit';

export const phoneSlice = createSlice({
    name: 'call',
    initialState: {
        phoneNumber: "",
        duration: 0,
        status: false,
    },
    reducers: {
        addNumber: (state, action) => {
            state.phoneNumber = state.phoneNumber + action.payload;
        },
        setDuration: (state) => {
            state.duration += 1;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        clearCall: (state) => {
            state.duration = 0;
            state.phoneNumber = "";
        },
    },
});

export const { addNumber, setDuration, setStatus, clearCall } = phoneSlice.actions;

export default phoneSlice.reducer;