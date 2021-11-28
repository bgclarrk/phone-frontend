import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getHistory = createAsyncThunk(
    "history/getCallHistory",
    async () => {
        return await fetch(`http://localhost:3001/api/v1/calls`)
        .then(resp => resp.json())
    }
)

export const addHistory = createAsyncThunk(
    "call/addCallHistory",
    async (call) => {
        return await fetch(`http://localhost:3001/api/v1/calls`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(call)
        })
        .then(resp => resp.json())
    }
)

export const deleteHistory = createAsyncThunk(
    "history/deleteCallHistory",
    async (id) => {
        return await fetch(`http://localhost:3001/api/v1/calls/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: "DELETE"
        })
        .then(resp => resp.json())
    }
)

const historySlice = createSlice({
    name: 'history',
    initialState: {
        callHistory: [],
        status: null
    },
    extraReducers: {
        [getHistory.pending]: (state) => {
            state.status = "loading";
        },
        [getHistory.fulfilled]: (state, action) => {
            state.status = "success";
            state.callHistory = action.payload;
        },
        [addHistory.pending]: (state) => {
            state.status = "pending";
        },
        [addHistory.fulfilled]: (state, action) => {
            state.status = "success";
            state.callHistory.push(action.payload);
        },
        [deleteHistory.pending]: (state) => {
            state.status = "pending";
        },
        [deleteHistory.fulfilled]: (state, action) => {
            state.status = "success";
            state.callHistory = state.callHistory.filter(call => call.id !== action.payload);
        },
    },
});

export default historySlice.reducer;