import { configureStore } from '@reduxjs/toolkit';
import phoneSlice from '../redux/phoneSlice';
import historySlice from '../redux/historySlice';

let store = configureStore({
    reducer: {
        call: phoneSlice,
        history: historySlice
    }
})

export default store;