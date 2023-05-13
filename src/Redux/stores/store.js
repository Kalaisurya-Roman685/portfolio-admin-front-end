import { configureStore } from '@reduxjs/toolkit'
import RootReducer from './../reducer/index';

const store = configureStore({
    reducer:RootReducer,
})

export default store;