import { configureStore } from '@reduxjs/toolkit';
import phoneReducer from '../redux/phoneSlice';
import historyReducer from '../redux/historySlice';

const store = configureStore({
    reducer: {
        call: phoneReducer,
        history: historyReducer
    },
})

export default store;