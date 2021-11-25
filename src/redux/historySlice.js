import { createSlice } from '@reduxjs/toolkit';

export const historySlice = createSlice({
    name: 'history',
    initialState: {
        calls: [],
    },
    reducers: {
        getCalls: (state, action) => {
            state.calls = action.payload;
        },
        // newCall: (state, action) => {
        //     state.calls -= 1;
        // },
        deleteCall: (state, action) => {
            state.calls = state.calls.filter(call => call.id !== action.payload);
        },
    },
});

export const getCallsAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(getCalls())
    }, 1000)
  }

export const { getCalls, deleteCall } = historySlice.actions;

export default historySlice.reducer;