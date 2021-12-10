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
        const response = await fetch(`http://localhost:3001/api/v1/calls`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(call)
        })
        .then(resp => resp.json())
        return response
    }
   
)

export const deleteHistory = createAsyncThunk(
    "history/deleteCallHistory",
    async (id) => {
        await fetch(`http://localhost:3001/api/v1/calls/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: "DELETE"
        })
        .then(resp => resp.json())
        return id;
    }
)

const historySlice = createSlice({
    name: 'history',
    initialState: {
        callHistory: [],
        filteredHistory: [],
        status: null
    },
    reducers: {
        filterCalls: (state, action) => {
            debugger;
            state.filteredHistory = state.callHistory
            state.filteredHistory = state.filteredHistory.filter(call => 
                call.phoneNumber.startsWith(action.payload)
            );
        },
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

export const getCallHistoryFromStore = state => state.history.callHistory
export const getfilteredCallHistoryFromStore = state => state.history.filteredHistory
export const { filterCalls } = historySlice.actions

export default historySlice.reducer;