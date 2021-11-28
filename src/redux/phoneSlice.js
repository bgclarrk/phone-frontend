import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addHistory = createAsyncThunk(
    "call/addCallHistory",
    async (call) => {
        debugger;
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

export const phoneSlice = createSlice({
    name: 'call',
    initialState: {
        phoneNumber: "",
        duration: 0,
        status: null,
    },
    reducers: {
        addNumber: (state, action) => {
            state.phoneNumber = state.phoneNumber + action.payload;
        },
        setDuration: (state, action) => {
            state.duration = action.payload;
        },
    },
    extraReducers: {
        [addHistory.pending]: (state) => {
            state.status = "pending";
        },
        [addHistory.fulfilled]: (state, action) => {
            state.status = "success";
            debugger;
            state.callHistory.push(action.payload);
        },
    }
});

export const { addNumber, setDuration } = phoneSlice.actions;

export default phoneSlice.reducer;