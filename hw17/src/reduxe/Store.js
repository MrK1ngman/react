import { configureStore } from '@reduxjs/toolkit';
import itemsSlice from './counterSlice';

const store = configureStore({
    reducer: itemsSlice.reducer,
});

export default store;