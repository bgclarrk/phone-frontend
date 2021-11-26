import { createSlice } from '@reduxjs/toolkit';

export const historySlice = createSlice({
    name: 'history',
    initialState: {
        calls: [],
        status: "idle",
        error: null
    },
    reducers: {
        getCalls: (state, action) => {
            state.calls.push(action.payload);
        },
        newCall: (state, action) => {
            state.calls += action.payload;
        },
        deleteCall: (state, action) => {
            state.calls = state.calls.filter(call => call.id !== action.payload);
        },
    },
});

export const { getCalls, newCall, deleteCall } = historySlice.actions;
export const selectAllCalls = state => state.calls;

export default historySlice.reducer;