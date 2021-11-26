import { configureStore } from '@reduxjs/toolkit';
import phoneSlice from '../redux/phoneSlice';
import historySlice from '../redux/historySlice';

export default configureStore({
    reducer: {
        call: phoneSlice,
        history: historySlice
    }
})