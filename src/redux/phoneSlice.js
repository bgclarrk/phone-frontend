import { createSlice } from '@reduxjs/toolkit';

export const phoneSlice = createSlice({
    name: 'call',
    initialState: {
        phoneNumber: "",
        duration: 0
    },
    reducers: {
        addNumber: (state, action) => {
            state.phoneNumber = state.phoneNumber + action.payload;
        },
    },
});

export const { addNumber } = phoneSlice.actions;
export const getPhoneNumber = state => state.call.phoneNumber.value;

export default phoneSlice.reducer;