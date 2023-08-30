import { configureStore } from '@reduxjs/toolkit'
import DataSlice from './DataSlice';

const store = configureStore({
    reducer: {
        apiData: DataSlice,
    }
})


export default store;